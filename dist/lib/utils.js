import axios from "axios";
import { decodeAddress, encodeAddress } from "algosdk";
import { CID, digest } from "multiformats";
import sha2 from "multiformats/hashes/sha2";
import Bottleneck from "bottleneck";
import { format } from "date-fns";
import { BASE_CLASSES, IPFS_GATEWAY_URL_PREFIX } from "../constants";
import { getLatestAssetConfigTransaction } from "./proxy";
export const makeRateLimiter = (rps = 60, threads = null) => new Bottleneck({ minTime: 1000 / rps, maxConcurrent: threads });
export const rateLimitedAxiosGET = () => makeRateLimiter(60, 3).wrap(async (url, config) => axios.get(url, config));
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
export function getCIDFromReserveAddr(reserveAddr) {
    const addr = decodeAddress(reserveAddr);
    const mhdigest = digest.create(sha2.sha256.code, addr.publicKey);
    const cid = CID.create(1, 0x55, mhdigest);
    return cid.toString();
}
export function getReserveAddrFromCID(cidString) {
    const cid = CID.parse(cidString);
    const reserveAddr = encodeAddress(cid.multihash.digest);
    const cidCheck = getCIDFromReserveAddr(reserveAddr);
    if (cid.toString() !== cidCheck) {
        throw new Error(`CIDs did not match ${cid.toString()} !== ${cidCheck}`);
    }
    return reserveAddr;
}
export const resolveIpfsGatewayUrl = (cid) => `${IPFS_GATEWAY_URL_PREFIX}${cid}`;
export const getArc69MetadataForAsaId = (asaId) => getLatestAssetConfigTransaction(asaId).then((txn) => getJsonFromNote(txn.note));
function getJsonFromNote(noteBase64) {
    const noteString = Buffer.from(noteBase64, "base64")
        .toLocaleString()
        .trim()
        .replace(/[^ -~]+/g, "");
    const noteObject = JSON.parse(noteString);
    return noteObject;
}
export function makePotrMetadata(potrAssetMetadata, potrArc69Metadata) {
    const { description, properties: traits } = potrArc69Metadata;
    return {
        ...potrAssetMetadata,
        balance: 1,
        description,
        baseClass: getBaseClass(traits.PotrClass),
        traits,
    };
}
export function getBaseClass(potrClass) {
    const potrBaseClass = potrClass;
    return !BASE_CLASSES.includes(potrBaseClass) ? "Humanoid" : potrBaseClass;
}
