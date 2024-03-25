import { decodeAddress, encodeAddress } from "algosdk";
import { CID, digest } from "multiformats";
import * as sha2 from "multiformats/hashes/sha2";
import Bottleneck from "bottleneck";
import { format } from "date-fns";
import { IPFS_GATEWAY_URL_PREFIX } from "../constants";

export const makeRateLimiter = (rps = 60, threads: number | null = null) =>
	new Bottleneck({ minTime: 1000 / rps, maxConcurrent: threads });

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
const RAW_CODEC = 0x55;
const DAG_PB_CODEC = 0x70;
const DAG_CBOR_CODEC = 0x71;
export function getCIDFromReserveAddr(url: string, reserveAddr: string): CID {
	// get 32 bytes Uint8Array reserve address - treating it as 32-byte sha2-256 hash
	const addr = decodeAddress(reserveAddr);
	const mhdigest = digest.create(sha2.sha256.code, addr.publicKey);
	const resolvedCodec = url.includes("raw") ? RAW_CODEC : url.includes("dag-cbor") ? DAG_CBOR_CODEC : DAG_PB_CODEC;
	const cid = CID.create(1, resolvedCodec, mhdigest);
	return cid;
}

export function getReserveAddrFromCID(url: string, cidString: string): string {
	const cid = CID.parse(cidString);
	const reserveAddr = encodeAddress(cid.multihash.digest);
	const cidTest = getCIDFromReserveAddr(url, reserveAddr);
	const cidCheck = cid.toString() === cidTest.toString();
	if (!cidCheck) throw new Error(`Cid check failed: ${cid} !== ${cidTest}`);
	return reserveAddr;
}

// IPFS
export const resolveIpfsGatewayUrl = (cid: string | CID) => `${IPFS_GATEWAY_URL_PREFIX}${cid}?optimizer=image`;
