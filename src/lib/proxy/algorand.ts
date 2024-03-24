import {
	getAlgoClient,
	getAlgoIndexerClient,
	getAlgoNodeConfig,
	mnemonicAccountFromEnvironment,
} from "@algorandfoundation/algokit-utils";
import { AccountInformationResponse, AssetConfigTransactionsResponse } from "../../types";
import { potrConfig } from "../../config";

export const getAlgoNetwork = () => process.env.ALGO_NETWORK as "TestNet" | "MainNet";

// CLIENTS
export const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "algod"));
export const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "indexer"));

export const getAccountName = (type: "admin" | "user") => `POTR_${getAlgoNetwork()}_${type}`.toUpperCase();

// WALLETS
export const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("admin"), algod);
export const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("user"), algod);

// GET ALL POTRS IN A GIVEN WALLET
export async function getPotrAsaIdsInWallet(account: string) {
	return indexer
		.lookupAccountAssets(account)
		.do()
		.then((res) => res as AccountInformationResponse)
		.then((accAssets) => accAssets.assets.map((a) => a["asset-id"]))
		.then((asaIds) => asaIds.filter((asaId) => potrConfig.asaIds[getAlgoNetwork()].includes(asaId)));
}

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

export async function getLatestAssetConfigTransactions(asaId: number) {
	return indexer
		.lookupAssetTransactions(asaId)
		.do()
		.then((res) => res as AssetConfigTransactionsResponse)
		.then((acfgTxns) => acfgTxns.transactions.at(0)!);
}
