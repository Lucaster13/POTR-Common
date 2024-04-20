import { Arc69Metadata, AssetConfigTransaction, AssetMetadata } from "../../types";
type GetAssetsInWalletQuery = {
    minBal?: number;
    nextToken?: string;
    limit?: number;
};
export declare const getArc69Metadata: (asaId: number) => Promise<Arc69Metadata>;
export declare function getJsonFromNote(noteBase64: string): Arc69Metadata;
declare const Algo: {
    getAdminAcc: (() => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }) => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
    };
    getUserAcc: (() => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }) => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
    };
    getAdminAddr: () => string;
    getUserAddr: () => string;
    getAlgoNetwork: () => "TestNet" | "MainNet";
    algod: import("algosdk").Algodv2;
    indexer: import("algosdk").Indexer;
    getArc69Metadata: ((arg1: number) => Promise<Arc69Metadata>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: number) => Promise<Arc69Metadata>;
    };
    getAssetsInWallet: ((arg1: string, arg2: GetAssetsInWalletQuery) => Promise<{
        assets: import("../../types/algorand").AssetInformation[];
        nextToken: string;
    }>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: string, arg2: GetAssetsInWalletQuery) => Promise<{
            assets: import("../../types/algorand").AssetInformation[];
            nextToken: string;
        }>;
    };
    getBlockTimestamp: ((arg1: number) => Promise<Date>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: number) => Promise<Date>;
    };
    getContractIsAlive: ((arg1: number) => Promise<boolean>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: number) => Promise<boolean>;
    };
    getLatestAssetConfigTransaction: ((arg1: number) => Promise<AssetConfigTransaction>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: number) => Promise<AssetConfigTransaction>;
    };
    getAsaMetadata: ((arg1: number) => Promise<AssetMetadata>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: number) => Promise<AssetMetadata>;
    };
};
export default Algo;
