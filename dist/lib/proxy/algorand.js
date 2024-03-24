import { getAlgoClient, getAlgoIndexerClient, getAlgoNodeConfig, mnemonicAccountFromEnvironment, } from "@algorandfoundation/algokit-utils";
import { potrConfig } from "../../config";
export const getAlgoNetwork = () => process.env.ALGO_NETWORK;
export const algod = getAlgoClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "algod"));
export const indexer = getAlgoIndexerClient(getAlgoNodeConfig(getAlgoNetwork().toLowerCase(), "indexer"));
export const getAccountName = (type) => `POTR_${getAlgoNetwork()}_${type}`.toUpperCase();
export const getAdminAcc = () => mnemonicAccountFromEnvironment(getAccountName("admin"), algod);
export const getUserAcc = () => mnemonicAccountFromEnvironment(getAccountName("user"), algod);
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
export async function getLatestAssetConfigTransactions(asaId) {
    return indexer
        .lookupAssetTransactions(asaId)
        .do()
        .then((res) => res)
        .then((acfgTxns) => acfgTxns.transactions.at(0));
}
