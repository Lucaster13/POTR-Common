import { getAlgoClient, getAlgoIndexerClient, getAlgoNodeConfig, mnemonicAccountFromEnvironment, } from "@algorandfoundation/algokit-utils";
import { algorandConfig } from "../../config";
import { makeRateLimiter } from "../utils";
const getNetwork = () => (process.env.ALGO_NETWORK ?? process.env.NEXT_PUBLIC_ALGO_NETWORK);
const algod = getAlgoClient(getAlgoNodeConfig(getNetwork().toLowerCase(), "algod"));
const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getNetwork().toLowerCase(), "indexer"));
const algorandRateLimiter = makeRateLimiter(...algorandConfig.tps);
const getAccountName = (role) => `POTR_${getNetwork()}_${role}`.toUpperCase();
const getWalletAddrFromConfig = (role) => algorandConfig.wallets[getNetwork()][role];
const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
const getUserAddr = () => getWalletAddrFromConfig("USER");
const RESPONSE_LIMIT = 3000;
async function getAsaIdsInWallet(addr, params) {
    const { nextToken, minBal, limit } = params ?? {};
    return indexer
        .lookupAccountAssets(addr)
        .limit(limit ?? RESPONSE_LIMIT)
        .nextToken(nextToken ?? "")
        .do()
        .then((res) => res)
        .then(({ assets, ...res }) => ({
        asaIds: assets.filter((a) => !minBal || a.amount >= minBal).map((a) => a["asset-id"]),
        nextToken: res["next-token"],
    }));
}
async function getBlockTimestamp(blockNumber) {
    return algod
        .block(blockNumber)
        .do()
        .then(({ block }) => new Date(block.ts * 1000));
}
async function getContractIsAlive(ctcId) {
    return algod
        .getApplicationByID(Number(ctcId))
        .do()
        .then(() => true)
        .catch(() => false);
}
async function getLatestAssetConfigTransaction(asaId) {
    return indexer
        .lookupAssetTransactions(asaId)
        .do()
        .then((res) => res)
        .then((acfgTxns) => acfgTxns.transactions.at(0));
}
async function getAsaMetadata(asaId) {
    return indexer
        .lookupAssetByID(asaId)
        .do()
        .then((res) => res)
        .then(({ asset }) => asset);
}
async function getAllAsaMetadata(addr, nextToken) {
    return indexer
        .lookupAccountCreatedAssets(addr)
        .limit(RESPONSE_LIMIT)
        .nextToken(nextToken ?? "")
        .do()
        .then((res) => res)
        .then(({ assets, ...res }) => ({
        assets,
        nextToken: res["next-token"],
    }));
}
export const getArc69Metadata = (asaId) => getLatestAssetConfigTransaction(asaId).then((txn) => getJsonFromNote(txn.note));
export function getJsonFromNote(noteBase64) {
    const noteString = Buffer.from(noteBase64, "base64")
        .toLocaleString()
        .trim()
        .replace(/[^ -~]+/g, "");
    const noteObject = JSON.parse(noteString);
    return noteObject;
}
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
