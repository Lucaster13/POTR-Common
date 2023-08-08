declare const enum AlgoNetwork {
    MAIN_NET = "MainNet",
    TEST_NET = "TestNet",
    DEV_NET = "DevNet"
}
declare const REACH_NETWORK: AlgoNetwork;
declare const ALGO_SERVER_PREFIX: string;
declare const ALGO_SERVER: string;
declare const ALGO_INDEXER_SERVER: string;
declare const ASSET_TRANSACTION_URL: string;
declare const ASSET_METADATA_URL: string;
declare const REACH_STDLIB_ENV: {
    REACH_CONNECTOR_MODE: string;
    REACH_ISOLATED_NETWORK: string;
    ALGO_INDEXER_SERVER: string;
    ALGO_SERVER: string;
    REACH_NO_WARN: string;
};
export { REACH_NETWORK, ALGO_SERVER_PREFIX, ALGO_SERVER, ALGO_INDEXER_SERVER, ASSET_TRANSACTION_URL, ASSET_METADATA_URL, REACH_STDLIB_ENV, AlgoNetwork, };
