import { getAlgoClient, getAlgoIndexerClient, getAlgoNodeConfig, mnemonicAccountFromEnvironment, } from "@algorandfoundation/algokit-utils";
import { algorandConfig, potrConfig } from "../../config";
export const getAlgoNetwork = () => process.env.ALGO_NETWORK;
export const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "algod"));
export const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "indexer"));
export const getAccountName = (role) => `POTR_${getAlgoNetwork()}_${role}`.toUpperCase();
export const getWalletAddrFromConfig = (role) => algorandConfig.wallets[getAlgoNetwork()][role];
export const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("ADMIN"), algod);
export const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("USER"), algod);
export const getAdminAddr = () => getWalletAddrFromConfig("ADMIN");
export const getUserAddr = () => getWalletAddrFromConfig("USER");
export async function getPotrAsaIdsInWallet(account) {
    return indexer
        .lookupAccountAssets(account)
        .do()
        .then((res) => res)
        .then((accAssets) => accAssets.assets.map((a) => a["asset-id"]))
        .then((asaIds) => asaIds.filter((asaId) => potrConfig.asaIds[getAlgoNetwork()].includes(asaId)));
}
export async function getBlockTimestamp(blockNumber) {
    return algod
        .block(blockNumber)
        .do()
        .then(({ block }) => new Date(block.ts * 1000));
}
export async function contractIsAlive(ctcId) {
    return algod
        .getApplicationByID(Number(ctcId))
        .do()
        .then(() => true)
        .catch(() => false);
}
export async function getLatestAssetConfigTransaction(asaId) {
    return indexer
        .lookupAssetTransactions(asaId)
        .do()
        .then((res) => res)
        .then((acfgTxns) => acfgTxns.transactions.at(0));
}
