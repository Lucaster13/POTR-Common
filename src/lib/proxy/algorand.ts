import {
	getAlgoClient,
	getAlgoIndexerClient,
	getAlgoNodeConfig,
	mnemonicAccountFromEnvironment,
} from "@algorandfoundation/algokit-utils";
import {
	AccountAssetHoldingResponse,
	Arc69Metadata,
	AssetConfigTransaction,
	AssetConfigTransactionsResponse,
	AssetMetadata,
	AssetMetadataResponse,
	CreatedAssetsResponse,
	GetAllAsaMetadataRequest,
	GetAsaIdsInWalletRequest,
} from "../../types";
import { algorandConfig } from "../../config";
import { makeRateLimiter } from "../utils";

const getNetwork = () => (process.env.ALGO_NETWORK ?? process.env.NEXT_PUBLIC_ALGO_NETWORK) as "TestNet" | "MainNet";

// CLIENTS
const algod = getAlgoClient(getAlgoNodeConfig(getNetwork().toLowerCase() as any, "algod"));
const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getNetwork().toLowerCase() as any, "indexer"));
const algorandRateLimiter = makeRateLimiter(...algorandConfig.tps);

type AccountRole = "ADMIN" | "USER";
const getAccountName = (role: AccountRole) => `POTR_${getNetwork()}_${role}`.toUpperCase();
const getWalletAddrFromConfig = (role: AccountRole) => algorandConfig.wallets[getNetwork()][role];

// WALLETS
const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
const getUserAddr = () => getWalletAddrFromConfig("USER");

// GET ALL POTRS IN A GIVEN WALLET
const RESPONSE_LIMIT = 3000;

async function getAsaIdsInWallet({ addr, nextToken, minBal, limit }: GetAsaIdsInWalletRequest) {
	return indexer
		.lookupAccountAssets(addr)
		.limit(limit ?? RESPONSE_LIMIT)
		.nextToken(nextToken ?? "")
		.do()
		.then((res) => res as AccountAssetHoldingResponse)
		.then(({ assets, ...res }) => ({
			asaIds: assets.filter((a) => !minBal || a.amount >= minBal).map((a) => a["asset-id"]),
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

async function getAllAsaMetadata({ addr, nextToken }: GetAllAsaMetadataRequest) {
	return indexer
		.lookupAccountCreatedAssets(addr)
		.limit(RESPONSE_LIMIT)
		.nextToken(nextToken ?? "")
		.do()
		.then((res) => res as CreatedAssetsResponse)
		.then(({ assets, ...res }) => ({
			assets,
			nextToken: res["next-token"],
		}));
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
	getNetwork,
	algod,
	indexer,
	getArc69Metadata: algorandRateLimiter.wrap(getArc69Metadata),
	getAsaIdsInWallet: algorandRateLimiter.wrap(getAsaIdsInWallet),
	getBlockTimestamp: algorandRateLimiter.wrap(getBlockTimestamp),
	getContractIsAlive: algorandRateLimiter.wrap(getContractIsAlive),
	getLatestAssetConfigTransaction: algorandRateLimiter.wrap(getLatestAssetConfigTransaction),
	getAsaMetadata: algorandRateLimiter.wrap(getAsaMetadata),
	getAllAsaMetadata: algorandRateLimiter.wrap(getAllAsaMetadata),
};

export default Algo;
