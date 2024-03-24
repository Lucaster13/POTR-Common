import {
	getAlgoClient,
	getAlgoIndexerClient,
	getAlgoNodeConfig,
	mnemonicAccountFromEnvironment,
} from "@algorandfoundation/algokit-utils";
import { AccountInformationResponse, AssetConfigTransactionsResponse, AssetMetadataResponse } from "../../types";
import { algorandConfig, potrConfig } from "../../config";

export const getAlgoNetwork = () => process.env.ALGO_NETWORK as "TestNet" | "MainNet";

// CLIENTS
export const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "algod"));
export const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "indexer"));

export type AccountRole = "ADMIN" | "USER";
export const getAccountName = (role: AccountRole) => `POTR_${getAlgoNetwork()}_${role}`.toUpperCase();
export const getWalletAddrFromConfig = (role: AccountRole) => algorandConfig.wallets[getAlgoNetwork()][role];

// WALLETS
export const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
export const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
export const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
export const getUserAddr = () => getWalletAddrFromConfig("USER");

// GET ALL POTRS IN A GIVEN WALLET
export async function getPotrAsaIdsInWallet(account: string) {
	return indexer
		.lookupAccountAssets(account)
		.do()
		.then((res) => res as AccountInformationResponse)
		.then((accAssets) => accAssets.assets.map((a) => a["asset-id"]))
		.then((asaIds) => asaIds.filter((asaId) => potrConfig.asaIds[getAlgoNetwork()].includes(asaId)));
}

export async function getPotrAsaMetadata(asaIds: number[]) {}

// GET TIMESTAMP OF A BLOCK
export async function getBlockTimestamp(blockNumber: number) {
	return algod
		.block(blockNumber)
		.do()
		.then(({ block }) => new Date(block.ts * 1000));
}

// CHECK IF CONTRACT IS ALIVE
export async function contractIsAlive(ctcId: number) {
	return algod
		.getApplicationByID(Number(ctcId))
		.do()
		.then(() => true) // if succeess return true
		.catch(() => false); // if failure return false
}

export async function getLatestAssetConfigTransaction(asaId: number) {
	return indexer
		.lookupAssetTransactions(asaId)
		.do()
		.then((res) => res as AssetConfigTransactionsResponse)
		.then((acfgTxns) => acfgTxns.transactions.at(0)!);
}

export async function getAssetMetadata(asaId: number) {
	return indexer
		.lookupAssetByID(asaId)
		.do()
		.then((res) => res as AssetMetadataResponse)
		.then(({ assets }) => (assets.at(0) ? assets.at(0)!.params : undefined));
}
