import { loadStdlib } from "@reach-sh/stdlib";
import { OPT_IN_FEE, REACH_NETWORK, REACH_STDLIB_ENV, TXN_FEE } from "../constants";
import { BigNumberT, Maybe, NetworkAddressT } from "../types";

const makeReach = (dev = true) => {
	if (dev) return loadStdlib("ALGO-devnet");
	const reach = loadStdlib(REACH_STDLIB_ENV);
	reach.setProviderByName(REACH_NETWORK);
	return reach;
};
const bigNumberify = (x: number | BigNumberT) => makeReach().bigNumberify(x);
const bigNumberifyAll = (x: number[] | BigNumberT[]) => x.map((num) => bigNumberify(num));
const padString = (str: string, maxLen: number) => str.padEnd(maxLen, "\u0000");
const unPadString = (str: string) => str.replace(/\0/g, ""); // replace all null characters with ""
const parseCurrency = (x: number | BigNumberT) => makeReach().parseCurrency(x);
const parseCurrencies = (x: number[] | BigNumberT[]) => x.map((num) => parseCurrency(num));
const getFees = (txns: number, optIns: number) => {
	const optInFees: BigNumberT = bigNumberify(optIns * OPT_IN_FEE);
	const txnFees: BigNumberT = bigNumberify(txns * TXN_FEE);
	return txnFees.add(optInFees);
};
const fromMaybe = async <T>(mp: Promise<Maybe<T>>): Promise<T> => mp.then((m) => m[1]);
const shortenAddress = (addr?: NetworkAddressT) => {
	if (!addr) return "????...????";
	const start = addr.substring(0, 4);
	const end = addr.substring(addr.length - 4);
	return `${start}...${end}`;
};

export {
	makeReach,
	bigNumberify,
	bigNumberifyAll,
	padString,
	unPadString,
	shortenAddress,
	parseCurrency,
	parseCurrencies,
	getFees,
	fromMaybe,
};
