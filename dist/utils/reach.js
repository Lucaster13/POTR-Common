import { loadStdlib } from "@reach-sh/stdlib";
import { OPT_IN_FEE, REACH_NETWORK, REACH_STDLIB_ENV, TXN_FEE } from "../constants";
const makeReach = (dev = true) => {
    if (dev)
        return loadStdlib("ALGO-devnet");
    const reach = loadStdlib(REACH_STDLIB_ENV);
    reach.setProviderByName(REACH_NETWORK);
    return reach;
};
const bigNumberify = (x) => makeReach().bigNumberify(x);
const bigNumberifyAll = (x) => x.map((num) => bigNumberify(num));
const padString = (str, maxLen) => str.padEnd(maxLen, "\u0000");
const unPadString = (str) => str.replace(/\0/g, "");
const parseCurrency = (x) => makeReach().parseCurrency(x);
const parseCurrencies = (x) => x.map((num) => parseCurrency(num));
const parsePrices = (x) => parseCurrencies(x);
const getFees = (txns, optIns) => {
    const optInFees = bigNumberify(optIns * OPT_IN_FEE);
    const txnFees = bigNumberify(txns * TXN_FEE);
    return txnFees.add(optInFees);
};
const fromMaybe = async (mp) => mp.then((m) => m[1]);
const shortenAddress = (addr) => {
    if (!addr)
        return "????...????";
    const start = addr.substring(0, 4);
    const end = addr.substring(addr.length - 4);
    return `${start}...${end}`;
};
export { makeReach, bigNumberify, bigNumberifyAll, padString, unPadString, shortenAddress, parsePrices, getFees, fromMaybe, };
