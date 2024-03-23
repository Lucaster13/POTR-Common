import axios from "axios";
import Bottleneck from "bottleneck";
import { format } from "date-fns";
export * from "./contract.js";
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
