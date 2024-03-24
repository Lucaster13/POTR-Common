export * from "./traits.js";
export var WalletProvider;
(function (WalletProvider) {
    WalletProvider["PERA"] = "pera";
    WalletProvider["MNEMONIC"] = "mnemonic";
    WalletProvider["WALLET_CONNECT"] = "wallet-connect";
})(WalletProvider || (WalletProvider = {}));
export var Status;
(function (Status) {
    Status["SUCCESS"] = "SUCCESS";
    Status["ERROR"] = "ERROR";
    Status["WARNING"] = "WARNING";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
export const RAW_IPFS_URL_PREFIX = "ipfs://";
export const RAW_IPFS_TEMPLATE_URL_PREFIX = "template-ipfs://";
export const IPFS_TEMPLATE_URL = `${RAW_IPFS_TEMPLATE_URL_PREFIX}{ipfscid:1:bag-pb:reserve:sha2-256}`;
export const IPFS_GATEWAY_URL_PREFIX = "https://ipfs.algonode.xyz/ipfs/";
export const POTR_URL = "potr.algo.xyz";
