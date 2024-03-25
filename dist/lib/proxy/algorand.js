import { getAlgoClient, getAlgoIndexerClient, getAlgoNodeConfig, mnemonicAccountFromEnvironment, } from "@algorandfoundation/algokit-utils";
import { algorandConfig } from "../../config";
import { makeRateLimiter } from "../utils";
const getAlgoNetwork = () => process.env.ALGO_NETWORK;
const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "algod"));
const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "indexer"));
const algorandRateLimiter = makeRateLimiter(...algorandConfig.tps);
const getAccountName = (role) => `POTR_${getAlgoNetwork()}_${role}`.toUpperCase();
const getWalletAddrFromConfig = (role) => algorandConfig.wallets[getAlgoNetwork()][role];
const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
const getUserAddr = () => getWalletAddrFromConfig("USER");
const RESPONSE_LIMIT = 3000;
async function getAllAssetIdsInWallet(addr, nextToken) {
    return indexer
        .lookupAccountAssets(addr)
        .limit(RESPONSE_LIMIT)
        .nextToken(nextToken ?? "")
        .do()
        .then((res) => res)
        .then((res) => ({
        asaIds: res.assets.filter((a) => a.amount > 0).map((a) => a["asset-id"]),
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
async function getAssetMetadata(asaId) {
    return indexer
        .lookupAssetByID(asaId)
        .do()
        .then((res) => res)
        .then(({ asset }) => asset);
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
    getAlgoNetwork,
    algod,
    indexer,
    getArc69Metadata: algorandRateLimiter.wrap(getArc69Metadata),
    getAllAssetIdsInWallet: algorandRateLimiter.wrap(getAllAssetIdsInWallet),
    getBlockTimestamp: algorandRateLimiter.wrap(getBlockTimestamp),
    getContractIsAlive: algorandRateLimiter.wrap(getContractIsAlive),
    getLatestAssetConfigTransaction: algorandRateLimiter.wrap(getLatestAssetConfigTransaction),
    getAssetMetadata: algorandRateLimiter.wrap(getAssetMetadata),
};
export default Algo;
