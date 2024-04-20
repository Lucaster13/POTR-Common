import { Arc69Metadata, AssetConfigTransaction, AssetMetadata } from "../../types";
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
    getNetwork: () => "TestNet" | "MainNet";
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
    getAsaIdsInWallet: ((arg1: string) => Promise<{
        asaIds: number[];
        nextToken: string;
    }>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: string) => Promise<{
            asaIds: number[];
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
    getAllAsaMetadata: ((arg1: string) => Promise<{
        assets: AssetMetadata[];
        nextToken: string;
    }>) & {
        withOptions: (options: {
            readonly priority?: number;
            readonly weight?: number;
            readonly expiration?: number;
            readonly id?: string;
        }, arg1: string) => Promise<{
            assets: AssetMetadata[];
            nextToken: string;
        }>;
    };
};
export default Algo;
