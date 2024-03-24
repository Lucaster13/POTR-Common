import {
	getAlgoClient,
	getAlgoIndexerClient,
	getAlgoNodeConfig,
	mnemonicAccountFromEnvironment,
} from "@algorandfoundation/algokit-utils";
import {
	AccountInformationResponse,
	AssetConfigTransaction,
	AssetConfigTransactionsResponse,
	AssetMetadata,
	AssetMetadataResponse,
} from "../../types";
import { algorandConfig, potrConfig } from "../../config";
import { makeRateLimiter } from "../utils";

export const getAlgoNetwork = () => process.env.ALGO_NETWORK as "TestNet" | "MainNet";

// CLIENTS
export const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "algod"));
export const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "indexer"));
const algorandRateLimiter = makeRateLimiter(...algorandConfig.tps);

export type AccountRole = "ADMIN" | "USER";
export const getAccountName = (role: AccountRole) => `POTR_${getAlgoNetwork()}_${role}`.toUpperCase();
export const getWalletAddrFromConfig = (role: AccountRole) => algorandConfig.wallets[getAlgoNetwork()][role];

// WALLETS
export const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
export const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
export const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
export const getUserAddr = () => getWalletAddrFromConfig("USER");

// GET ALL POTRS IN A GIVEN WALLET
async function getPotrAsaIdsInWallet(account: string) {
	return indexer
		.lookupAccountAssets(account)
		.do()
		.then((res) => res as AccountInformationResponse)
		.then((accAssets) => accAssets.assets.map((a) => a["asset-id"]))
		.then((asaIds) => asaIds.filter((asaId) => potrConfig.asaIds[getAlgoNetwork()].includes(asaId)));
}

// GET TIMESTAMP OF A BLOCK
async function getBlockTimestamp(blockNumber: number) {
	return algod
		.block(blockNumber)
		.do()
		.then(({ block }) => new Date(block.ts * 1000));
}
// CHECK IF} CONTRACT IS ALIVE
async function contractIsAlive(ctcId: number) {
	return algod
		.getApplicationByID(Number(ctcId))
		.do()
		.then(() => true) // if succeess return true
		.catch(() => false); // if failure return false
}

async function getLatestAssetConfigTransaction(asaId: number): Promise<AssetConfigTransaction> {
	return indexer
		.lookupAssetTransactions(asaId)
		.do()
		.then((res) => res as AssetConfigTransactionsResponse)
		.then((acfgTxns) => acfgTxns.transactions.at(0)!);
}

async function getAssetMetadata(asaId: number): Promise<AssetMetadata> {
	return indexer
		.lookupAssetByID(asaId)
		.do()
		.then((res) => res as AssetMetadataResponse)
		.then(({ asset }) => asset);
}

// EXPORT RATE LIMITED APIS
export const Algo = {
	getPotrAsaIdsInWallet: algorandRateLimiter.wrap(getPotrAsaIdsInWallet),
	getBlockTimestamp: algorandRateLimiter.wrap(getBlockTimestamp),
	contractIsAlive: algorandRateLimiter.wrap(contractIsAlive),
	getLatestAssetConfigTransaction: algorandRateLimiter.wrap(getLatestAssetConfigTransaction),
	getAssetMetadata: algorandRateLimiter.wrap(getAssetMetadata),
};
