import axios from "axios";
import Bottleneck from "bottleneck";
const makeRateLimiter = (rps = 60, threads = null) => new Bottleneck({ minTime: 1000 / rps, maxConcurrent: threads });
const rateLimitedAxiosGET = () => makeRateLimiter(60, 3).wrap(async (url, config) => axios.get(url, config));
export { rateLimitedAxiosGET };
