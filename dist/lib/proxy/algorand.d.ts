export declare const getAlgoNetwork: () => "TestNet" | "MainNet";
export declare const algod: import("algosdk").Algodv2;
export declare const indexer: import("algosdk").Indexer;
export declare const getAccountName: (type: "admin" | "user") => string;
export declare const getAdminAcc: () => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
export declare const getUserAcc: () => Promise<import("algosdk").Account | import("@algorandfoundation/algokit-utils/types/account").SigningAccount>;
export declare function getPotrAsaIdsInWallet(account: string): Promise<number[]>;
export declare function getBlockTimestamp(blockNumber: number): Promise<Date>;
export declare function contractIsAlive(ctcId: number): Promise<boolean>;
export declare function getLatestAssetConfigTransaction(asaId: number): Promise<{
    "asset-config-transaction": {
        "asset-id": number;
        amount: number;
    };
    "created-asset-index": number;
    note: string;
}>;
