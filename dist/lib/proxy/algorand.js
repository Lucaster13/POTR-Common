import { getAlgoClient, getAlgoIndexerClient, getAlgoNodeConfig, mnemonicAccountFromEnvironment, } from "@algorandfoundation/algokit-utils";
import { algorandConfig, potrConfig } from "../../config";
import { makeRateLimiter } from "../utils";
export const getAlgoNetwork = () => process.env.ALGO_NETWORK;
export const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "algod"));
export const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "indexer"));
const algorandRateLimiter = makeRateLimiter(...algorandConfig.tps);
export const getAccountName = (role) => `POTR_${getAlgoNetwork()}_${role}`.toUpperCase();
export const getWalletAddrFromConfig = (role) => algorandConfig.wallets[getAlgoNetwork()][role];
export const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
export const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
export const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
export const getUserAddr = () => getWalletAddrFromConfig("USER");
async function getPotrAsaIdsInWallet(account) {
    return indexer
        .lookupAccountAssets(account)
        .do()
        .then((res) => res)
        .then((accAssets) => accAssets.assets.map((a) => a["asset-id"]))
        .then((asaIds) => asaIds.filter((asaId) => potrConfig.asaIds[getAlgoNetwork()].includes(asaId)));
}
async function getBlockTimestamp(blockNumber) {
    return algod
        .block(blockNumber)
        .do()
        .then(({ block }) => new Date(block.ts * 1000));
}
async function contractIsAlive(ctcId) {
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
        .then(({ asset }) => asset.at(0));
}
export const Algo = {
    getPotrAsaIdsInWallet: algorandRateLimiter.wrap(getPotrAsaIdsInWallet),
    getBlockTimestamp: algorandRateLimiter.wrap(getBlockTimestamp),
    contractIsAlive: algorandRateLimiter.wrap(contractIsAlive),
    getLatestAssetConfigTransaction: algorandRateLimiter.wrap(getLatestAssetConfigTransaction),
    getAssetMetadata: algorandRateLimiter.wrap(getAssetMetadata),
};
