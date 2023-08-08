import { Participant } from "../../constants";
import { BigNumber, NetworkAddress } from "../network";

/*

    BASE CONTRACT TYPES

*/
// can be extended by any contract participant interface to enable logging
type LoggerInterfaceT = {
  // for console logger
  log?: any;
};

// interface used by deployer to deploy contract (each contract can extend this type)
type DeployerInterfaceT = {
  // function that gets called when contract is deployed
  deployed: (ctcId: BigNumber, ctcAddr: NetworkAddress) => void;
} & LoggerInterfaceT;

type Maybe<T> = ["Some" | "None", T];

type BaseHandleT = {
  p: Partial<Record<Participant, () => Promise<void>>>;
  getInfo: () => Promise<BigNumber>;
};

export { DeployerInterfaceT, LoggerInterfaceT, Maybe, BaseHandleT };
