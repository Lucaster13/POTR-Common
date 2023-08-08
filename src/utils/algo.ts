import { Algodv2, Indexer } from "algosdk";
import { ASSET_METADATA_URL, ASSET_TRANSACTION_URL, REACH_NETWORK } from "../constants";
import Account from "../constants/account";
import {
	AssetConfigTransactionT,
	AssetConfigTransactionsResponseT,
	AssetMetadataResponseT,
	AssetMetadataT,
	ContractIdT,
} from "../types";
import { rateLimitedAxiosGET } from "./common";
import { makeReach } from "./reach";

async function getBlockTimestamp(blockNumber: number) {
	return makeAlgodV2AndIndexer()
		.then(async ({ algodClient }) => algodClient.block(blockNumber).do())
		.then(({ block }) => new Date(block.ts * 1000));
}

async function contractIsAlive(ctcId: ContractIdT) {
	return makeAlgodV2AndIndexer()
		.then(async ({ algodClient }) => algodClient.getApplicationByID(Number(ctcId)).do())
		.then(() => true) // if succeess return true
		.catch(() => false); // if failure return false
}

async function makeAlgodV2AndIndexer() {
	return makeReach()
		.getProvider()
		.then((p) => ({ algodClient: p.algodClient as Algodv2, indexer: p.indexer as Indexer }));
}

// gets metadata for assets created by account
const RESPONSE_LIMIT = 30000;
const ASSET_MD_DEFAULT_PARAMS = { creator: Account.ADMIN[REACH_NETWORK], limit: RESPONSE_LIMIT };
async function getAssetMetadata(nextToken?: string) {
	return rateLimitedAxiosGET<AssetMetadataResponseT>()(ASSET_METADATA_URL, {
		params: { ...ASSET_MD_DEFAULT_PARAMS, next: nextToken },
	}).then(({ data }) => data);
}

const ACFG_TXN_DEFAULT_PARAMS = {
	address: Account.ADMIN[REACH_NETWORK],
	"address-role": "sender",
	limit: 1,
	"tx-type": "acfg",
	sortBy: "round:desc",
};
async function getAssetConfigTransactions(nextToken?: string) {
	return rateLimitedAxiosGET<AssetConfigTransactionsResponseT>()(ASSET_TRANSACTION_URL, {
		params: { ...ACFG_TXN_DEFAULT_PARAMS, limit: RESPONSE_LIMIT, next: nextToken },
	}).then(({ data }) => data);
}

async function getAllAssetConfigTransactions(): Promise<AssetConfigTransactionT[]> {
	let nextToken: string | undefined;
	const acfgTxns: AssetConfigTransactionT[] = [];

	// paginate retrieving asset transactions
	do {
		// make request url based on nextToken (increase limit)
		const data = await getAssetConfigTransactions(nextToken);

		// retrieve next token if available
		nextToken = data["next-token"];

		// concatenate assets results
		data.transactions.forEach((txn) => acfgTxns.push(txn));
	} while (nextToken);

	return acfgTxns;
}

async function getAllAssetMetadata(): Promise<AssetMetadataT[]> {
	let nextToken: string | undefined;
	const assetMetadata: AssetMetadataT[] = [];

	// paginate retrieving asset metadata
	do {
		// make request url based on nextToken (increase limit)
		const data = await getAssetMetadata(nextToken);

		// retrieve next token if available
		nextToken = data["next-token"];

		// concatenate assets results
		data.assets.forEach((asset) => assetMetadata.push(asset));
	} while (nextToken);

	return assetMetadata;
}

export {
	getBlockTimestamp,
	contractIsAlive,
	makeAlgodV2AndIndexer,
	getAssetMetadata,
	getAssetConfigTransactions,
	getAllAssetConfigTransactions,
	getAllAssetMetadata,
};
