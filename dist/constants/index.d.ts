export * from "./traits.js";
export * from "./contract/index.js";
export { default as ASA_IDS } from "./asa-ids.js";
export declare const enum WalletProvider {
    PERA = "pera",
    MNEMONIC = "mnemonic",
    WALLET_CONNECT = "wallet-connect"
}
export declare const enum Status {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING",
    IN_PROGRESS = "IN_PROGRESS",
    INACTIVE = "INACTIVE"
}
export declare const RAW_IPFS_URL_PREFIX = "ipfs://";
export declare const RAW_IPFS_TEMPLATE_URL_PREFIX = "template-ipfs://";
export declare const getIPFSTemplateURL: (potrId: string) => string;
export declare const IPFS_GATEWAY_URL_PREFIX = "https://ipfs.io/ipfs/";
export declare const POTR_URL = "potr.algo.xyz";
