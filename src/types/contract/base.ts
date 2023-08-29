import { Participant } from "../../constants/index.js";
import { BigNumberT, NetworkAddressT } from "../network.js";

/*

    BASE CONTRACT TYPES

*/
// can be extended by any contract participant interface to enable logging
type LoggerT = {
	// for console logger
	log?: any;
};

// interface used by deployer to deploy contract (each contract can extend this type)
type DeployerT = {
	// function that gets called when contract is deployed
	deployed: (ctcId: BigNumberT, ctcAddr: NetworkAddressT) => void;
} & LoggerT;

type Maybe<T> = ["Some" | "None", T];

type BaseHandleT = {
	p: Partial<Record<Participant, () => Promise<void>>>;
	getInfo: () => Promise<BigNumberT>;
};

export { DeployerT, LoggerT, Maybe, BaseHandleT };
