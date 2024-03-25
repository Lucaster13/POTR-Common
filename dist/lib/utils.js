import { decodeAddress, encodeAddress } from "algosdk";
import { CID, digest } from "multiformats";
import * as sha2 from "multiformats/hashes/sha2";
import Bottleneck from "bottleneck";
import { format } from "date-fns";
import { IPFS_GATEWAY_URL_PREFIX } from "../constants";
export const makeRateLimiter = (rps = 60, threads = null) => new Bottleneck({ minTime: 1000 / rps, maxConcurrent: threads });
export const shortenAddress = (addr) => {
    if (!addr)
        return "????...????";
    const start = addr.substring(0, 4);
    const end = addr.substring(addr.length - 4);
    return `${start}...${end}`;
};
export function formatTimestamp(timestamp) {
    return format(timestamp, "MMMM dd, yyyy hh:mm a 'UTC'xxx");
}
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const RAW_CODEC = 0x55;
const DAG_PB_CODEC = 0x70;
const DAG_CBOR_CODEC = 0x71;
export function getCIDFromReserveAddr(url, reserveAddr) {
    const addr = decodeAddress(reserveAddr);
    const mhdigest = digest.create(sha2.sha256.code, addr.publicKey);
    const resolvedCodec = url.includes("raw") ? RAW_CODEC : url.includes("dag-cbor") ? DAG_CBOR_CODEC : DAG_PB_CODEC;
    const cid = CID.create(1, resolvedCodec, mhdigest);
    return cid.toString();
}
export function getReserveAddrFromCID(cidString) {
    const cid = CID.parse(cidString);
    return encodeAddress(cid.multihash.digest);
}
export const resolveIpfsGatewayUrl = (cid) => `${IPFS_GATEWAY_URL_PREFIX}${cid}`;
