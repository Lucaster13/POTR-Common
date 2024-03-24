import { Arc69Metadata, AssetConfigTransaction, AssetMetadata } from "../../types";
export declare const getArc69Metadata: (asaId: number) => Promise<Arc69Metadata>;
export declare function getJsonFromNote(noteBase64: string): Arc69Metadata;
declare const Algo: {
    getAdminAcc: (() => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }) => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
    };
    getUserAcc: (() => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }) => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
    };
    getAdminAddr: () => string;
    getUserAddr: () => string;
    getAlgoNetwork: () => "TestNet" | "MainNet";
    algod: import("algosdk").Algodv2;
    indexer: import("algosdk").Indexer;
    getArc69Metadata: ((arg1: number) => Promise<Arc69Metadata>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: number) => Promise<Arc69Metadata>;
    };
    getAllAssetIdsInWallet: ((arg1: string) => Promise<void>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: string) => Promise<void>;
    };
    getBlockTimestamp: ((arg1: number) => Promise<Date>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: number) => Promise<Date>;
    };
    getContractIsAlive: ((arg1: number) => Promise<boolean>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: number) => Promise<boolean>;
    };
    getLatestAssetConfigTransaction: ((arg1: number) => Promise<AssetConfigTransaction>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: number) => Promise<AssetConfigTransaction>;
    };
    getAssetMetadata: ((arg1: number) => Promise<AssetMetadata>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: number) => Promise<AssetMetadata>;
    };
};
export default Algo;
