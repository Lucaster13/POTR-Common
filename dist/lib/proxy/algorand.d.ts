import { AssetConfigTransaction, AssetMetadata } from "../../types";
export declare const getAlgoNetwork: () => "TestNet" | "MainNet";
export declare const algod: import("algosdk").Algodv2;
export declare const indexer: import("algosdk").Indexer;
export type AccountRole = "ADMIN" | "USER";
export declare const getAccountName: (role: AccountRole) => string;
export declare const getWalletAddrFromConfig: (role: AccountRole) => string;
export declare const getAdminAcc: () => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
export declare const getUserAcc: () => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
export declare const getAdminAddr: () => string;
export declare const getUserAddr: () => string;
export declare const Algo: {
    getPotrAsaIdsInWallet: ((arg1: string) => Promise<number[]>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: string) => Promise<number[]>;
    };
    getBlockTimestamp: ((arg1: number) => Promise<Date>) & {
        withOptions: (options: {
            readonly priority?: number | null | undefined;
            readonly weight?: number | null | undefined;
            readonly expiration?: number | null | undefined;
            readonly id?: string | null | undefined;
        }, arg1: number) => Promise<Date>;
    };
    contractIsAlive: ((arg1: number) => Promise<boolean>) & {
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
