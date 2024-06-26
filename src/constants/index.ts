export * from "./traits.js";

// WALLET PROVIDERS ON ALGORAND
export enum WalletProvider {
	PERA = "pera",
	MNEMONIC = "mnemonic",
	WALLET_CONNECT = "wallet-connect",
}

// GENERIC STATUS ENUM
export enum Status {
	SUCCESS = "SUCCESS",
	ERROR = "ERROR",
	WARNING = "WARNING",
	IN_PROGRESS = "IN_PROGRESS",
	INACTIVE = "INACTIVE",
}

// IPFS
export const RAW_IPFS_URL_PREFIX = "ipfs://";
export const RAW_IPFS_TEMPLATE_URL_PREFIX = "template-ipfs://";
export const IPFS_TEMPLATE_URL = `${RAW_IPFS_TEMPLATE_URL_PREFIX}{ipfscid:1:raw:reserve:sha2-256}`;
export const IPFS_GATEWAY_URL_PREFIX = "https://ipfs.algonode.xyz/ipfs/";

// POTR
export const POTR_URL = "potr.algo.xyz";
