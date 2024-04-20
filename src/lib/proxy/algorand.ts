import {
	getAlgoClient,
	getAlgoIndexerClient,
	getAlgoNodeConfig,
	mnemonicAccountFromEnvironment,
} from "@algorandfoundation/algokit-utils";
import {
	AccountAssetInformationResponse,
	Arc69Metadata,
	AssetConfigTransaction,
	AssetConfigTransactionsResponse,
	AssetMetadata,
	AssetMetadataResponse,
} from "../../types";
import { algorandConfig } from "../../config";
import { makeRateLimiter } from "../utils";

const getAlgoNetwork = () =>
	(process.env.ALGO_NETWORK ?? process.env.NEXT_PUBLIC_ALGO_NETWORK) as "TestNet" | "MainNet";

// CLIENTS
const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "algod"));
const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase() as any, "indexer"));
const algorandRateLimiter = makeRateLimiter(...algorandConfig.tps);

type AccountRole = "ADMIN" | "USER";
const getAccountName = (role: AccountRole) => `POTR_${getAlgoNetwork()}_${role}`.toUpperCase();
const getWalletAddrFromConfig = (role: AccountRole) => algorandConfig.wallets[getAlgoNetwork()][role];

// WALLETS
const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
const getUserAddr = () => getWalletAddrFromConfig("USER");

// GET ALL POTRS IN A GIVEN WALLET
const RESPONSE_LIMIT = 3000;
type GetAssetsInWalletQuery = {
	minBal?: number;
	nextToken?: string;
	limit?: number;
};

async function getAssetsInWallet(addr: string, { nextToken, minBal, limit }: GetAssetsInWalletQuery = {}) {
	return indexer
		.lookupAccountAssets(addr)
		.limit(limit ?? RESPONSE_LIMIT)
		.nextToken(nextToken ?? "")
		.do()
		.then((res) => res as AccountAssetInformationResponse)
		.then(({ assets, ...res }) => ({
			assets: minBal ? assets.filter((a) => a.amount > minBal) : assets,
			nextToken: res["next-token"],
		}));
}

// GET TIMESTAMP OF A BLOCK
async function getBlockTimestamp(blockNumber: number) {
	return algod
		.block(blockNumber)
		.do()
		.then(({ block }) => new Date(block.ts * 1000));
}

// CHECK IF CONTRACT IS ALIVE
async function getContractIsAlive(ctcId: number) {
	return algod
		.getApplicationByID(Number(ctcId))
		.do()
		.then(() => true) // if succeess return true
		.catch(() => false); // if failure return false
}

// GETS LATEST ASSET CONFIG TRANSACTION
async function getLatestAssetConfigTransaction(asaId: number): Promise<AssetConfigTransaction> {
	return indexer
		.lookupAssetTransactions(asaId)
		.do()
		.then((res) => res as AssetConfigTransactionsResponse)
		.then((acfgTxns) => acfgTxns.transactions.at(0)!);
}

// GETS ASA METADATA
async function getAsaMetadata(asaId: number): Promise<AssetMetadata> {
	return indexer
		.lookupAssetByID(asaId)
		.do()
		.then((res) => res as AssetMetadataResponse)
		.then(({ asset }) => asset);
}

// GETS ARC-69 METADATA
export const getArc69Metadata = (asaId: number): Promise<Arc69Metadata> =>
	getLatestAssetConfigTransaction(asaId).then((txn) => getJsonFromNote(txn.note));

export function getJsonFromNote(noteBase64: string): Arc69Metadata {
	const noteString = Buffer.from(noteBase64, "base64")
		.toLocaleString()
		.trim()
		.replace(/[^ -~]+/g, "");
	const noteObject = JSON.parse(noteString);
	return noteObject;
}

// EXPORT RATE LIMITED APIS
const Algo = {
	getAdminAcc: algorandRateLimiter.wrap(getAdminAcc),
	getUserAcc: algorandRateLimiter.wrap(getUserAcc),
	getAdminAddr,
	getUserAddr,
	getAlgoNetwork,
	algod,
	indexer,
	getArc69Metadata: algorandRateLimiter.wrap(getArc69Metadata),
	getAssetsInWallet: algorandRateLimiter.wrap(getAssetsInWallet),
	getBlockTimestamp: algorandRateLimiter.wrap(getBlockTimestamp),
	getContractIsAlive: algorandRateLimiter.wrap(getContractIsAlive),
	getLatestAssetConfigTransaction: algorandRateLimiter.wrap(getLatestAssetConfigTransaction),
	getAsaMetadata: algorandRateLimiter.wrap(getAsaMetadata),
};

export default Algo;
