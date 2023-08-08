import { Algodv2, Indexer } from "algosdk";
import { AssetConfigTransactionT, AssetConfigTransactionsResponseT, AssetMetadataResponseT, AssetMetadataT, ContractIdT } from "../types";
declare function getBlockTimestamp(blockNumber: number): Promise<Date>;
declare function contractIsAlive(ctcId: ContractIdT): Promise<boolean>;
declare function makeAlgodV2AndIndexer(): Promise<{
    algodClient: Algodv2;
    indexer: Indexer;
}>;
declare function getAssetMetadata(nextToken?: string): Promise<AssetMetadataResponseT>;
declare function getAssetConfigTransactions(nextToken?: string): Promise<AssetConfigTransactionsResponseT>;
declare function getAllAssetConfigTransactions(): Promise<AssetConfigTransactionT[]>;
declare function getAllAssetMetadata(): Promise<AssetMetadataT[]>;
export { getBlockTimestamp, contractIsAlive, makeAlgodV2AndIndexer, getAssetMetadata, getAssetConfigTransactions, getAllAssetConfigTransactions, getAllAssetMetadata, };
