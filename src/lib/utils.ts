import axios, { AxiosRequestConfig } from "axios";
import { decodeAddress, encodeAddress } from "algosdk";
import { CID, digest } from "multiformats";
import * as sha2 from "multiformats/hashes/sha2";

import Bottleneck from "bottleneck";
import { format } from "date-fns";
import { BASE_CLASSES, PotrBaseClass, PotrClass, IPFS_GATEWAY_URL_PREFIX } from "../constants";
import { Arc69Metadata, PotrAssetMetadata, PotrMetadata } from "../types";
import { getLatestAssetConfigTransaction } from "./proxy";

export const makeRateLimiter = (rps = 60, threads: number | null = null) =>
	new Bottleneck({ minTime: 1000 / rps, maxConcurrent: threads });

export const rateLimitedAxiosGET = <T>() =>
	makeRateLimiter(60, 3).wrap(async (url: string, config: AxiosRequestConfig<any> | undefined) =>
		axios.get<T>(url, config),
	);

export const shortenAddress = (addr?: string) => {
	if (!addr) return "????...????";
	const start = addr.substring(0, 4);
	const end = addr.substring(addr.length - 4);
	return `${start}...${end}`;
};

export function formatTimestamp(timestamp: Date) {
	return format(timestamp, "MMMM dd, yyyy hh:mm a 'UTC'xxx");
}

export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

// // RESOLVING IPFS URL, CID, RESERVE ADDRESS
export function getCIDFromReserveAddr(reserveAddr: string): string {
	// get 32 bytes Uint8Array reserve address - treating it as 32-byte sha2-256 hash
	const addr = decodeAddress(reserveAddr);
	const mhdigest = digest.create(sha2.sha256.code, addr.publicKey);
	const cid = CID.create(1, 0x55, mhdigest);
	return cid.toString();
}

export function getReserveAddrFromCID(cidString: string): string {
	const cid = CID.parse(cidString);
	const reserveAddr = encodeAddress(cid.multihash.digest);
	const cidCheck = getCIDFromReserveAddr(reserveAddr);
	if (cid.toString() !== cidCheck) {
		throw new Error(`CIDs did not match ${cid.toString()} !== ${cidCheck}`);
	}
	return reserveAddr;
}

// IPFS
export const resolveIpfsGatewayUrl = (cid: string) => `${IPFS_GATEWAY_URL_PREFIX}${cid}`;

// NFT RELATED UTILS
export const getArc69MetadataForAsaId = (asaId: number): Promise<Arc69Metadata> =>
	getLatestAssetConfigTransaction(asaId).then((txn) => getJsonFromNote(txn.note));

export function getJsonFromNote(noteBase64: string): Arc69Metadata {
	const noteString = Buffer.from(noteBase64, "base64")
		.toLocaleString()
		.trim()
		.replace(/[^ -~]+/g, "");
	const noteObject = JSON.parse(noteString);
	return noteObject;
}

// takes the asset metadata and the most recent asset config transaction and creates PotrMetadata
export function makePotrMetadata(potrAssetMetadata: PotrAssetMetadata, potrArc69Metadata: Arc69Metadata): PotrMetadata {
	// merge asaMd and traits to create metadata
	const { description, properties: traits } = potrArc69Metadata;
	return {
		...potrAssetMetadata,
		balance: 1,
		description,
		baseClass: getBaseClass(traits.PotrClass),
		traits,
	};
}

export function getBaseClass(potrClass: PotrClass): PotrBaseClass {
	// if the class is not part of [base classes] then it must be humanoid
	const potrBaseClass = potrClass as unknown as PotrBaseClass;
	return !BASE_CLASSES.includes(potrBaseClass) ? PotrBaseClass.HUMANOID : potrBaseClass;
}
