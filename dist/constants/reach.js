const REACH_NETWORK = "TestNet";
const ALGO_SERVER_PREFIX = `https://${REACH_NETWORK.toLowerCase()}`;
const ALGO_SERVER = `${ALGO_SERVER_PREFIX}-api.algonode.cloud`;
const ALGO_INDEXER_SERVER = `${ALGO_SERVER_PREFIX}-idx.algonode.cloud`;
const ASSET_TRANSACTION_URL = `${ALGO_INDEXER_SERVER}/v2/transactions`;
const ASSET_METADATA_URL = `${ALGO_INDEXER_SERVER}/v2/assets`;
const REACH_STDLIB_ENV = {
    REACH_CONNECTOR_MODE: "ALGO",
    REACH_ISOLATED_NETWORK: "no",
    ALGO_INDEXER_SERVER,
    ALGO_SERVER,
};
export { REACH_NETWORK, ALGO_SERVER_PREFIX, ALGO_SERVER, ALGO_INDEXER_SERVER, ASSET_TRANSACTION_URL, ASSET_METADATA_URL, REACH_STDLIB_ENV };
