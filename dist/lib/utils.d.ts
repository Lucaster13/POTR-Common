import { CID } from "multiformats";
import Bottleneck from "bottleneck";
export declare const makeRateLimiter: (rps?: number, threads?: number | null) => Bottleneck;
export declare const shortenAddress: (addr?: string) => string;
export declare function formatTimestamp(timestamp: Date): string;
export declare const sleep: (ms: number) => Promise<void>;
export declare function getCIDFromReserveAddr(url: string, reserveAddr: string): CID;
export declare function getReserveAddrFromCID(url: string, cidString: string): string;
export declare const resolveIpfsGatewayUrl: (cid: string | CID) => string;
