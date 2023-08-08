import { ASSET_METADATA_URL, ASSET_TRANSACTION_URL, REACH_NETWORK } from "../constants";
import Account from "../constants/account";
import { rateLimitedAxiosGET } from "./common";
import { makeReach } from "./reach";
async function getBlockTimestamp(blockNumber) {
    return makeAlgodV2AndIndexer()
        .then(async ({ algodClient }) => algodClient.block(blockNumber).do())
        .then(({ block }) => new Date(block.ts * 1000));
}
async function contractIsAlive(ctcId) {
    return makeAlgodV2AndIndexer()
        .then(async ({ algodClient }) => algodClient.getApplicationByID(Number(ctcId)).do())
        .then(() => true)
        .catch(() => false);
}
async function makeAlgodV2AndIndexer() {
    return makeReach()
        .getProvider()
        .then((p) => ({ algodClient: p.algodClient, indexer: p.indexer }));
}
const RESPONSE_LIMIT = 30000;
const ASSET_MD_DEFAULT_PARAMS = { creator: Account.ADMIN[REACH_NETWORK], limit: RESPONSE_LIMIT };
async function getAssetMetadata(nextToken) {
    return rateLimitedAxiosGET()(ASSET_METADATA_URL, {
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
async function getAssetConfigTransactions(nextToken) {
    return rateLimitedAxiosGET()(ASSET_TRANSACTION_URL, {
        params: { ...ACFG_TXN_DEFAULT_PARAMS, limit: RESPONSE_LIMIT, next: nextToken },
    }).then(({ data }) => data);
}
async function getAllAssetConfigTransactions() {
    let nextToken;
    const acfgTxns = [];
    do {
        const data = await getAssetConfigTransactions(nextToken);
        nextToken = data["next-token"];
        data.transactions.forEach((txn) => acfgTxns.push(txn));
    } while (nextToken);
    return acfgTxns;
}
async function getAllAssetMetadata() {
    let nextToken;
    const assetMetadata = [];
    do {
        const data = await getAssetMetadata(nextToken);
        nextToken = data["next-token"];
        data.assets.forEach((asset) => assetMetadata.push(asset));
    } while (nextToken);
    return assetMetadata;
}
export { getBlockTimestamp, contractIsAlive, makeAlgodV2AndIndexer, getAssetMetadata, getAssetConfigTransactions, getAllAssetConfigTransactions, getAllAssetMetadata, };
