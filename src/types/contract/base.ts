import { Participant } from "../../constants";
import { BigNumber, ContractId, NetworkAddress } from "../network";

/*

    BASE CONTRACT TYPES

*/
// can be extended by any contract participant interface to enable logging
type ParticipantInterfaceT = {
  // for console logger
  log?: any;
};

// interface used by deployer to deploy contract (each contract can extend this type)
type DeployerInterfaceT = {
  // function that gets called when contract is deployed
  deployed: (ctcId: BigNumber, ctcAddr: NetworkAddress) => void;
} & ParticipantInterfaceT;

type ContractHandleT<I> = {
  p: Record<Participant, (i: I) => Promise<void>>;
  participants: Record<Participant, (i: I) => void>;
  getInfo: () => Promise<ContractId>;
};

type Maybe<T> = ["Some" | "None", T];

export { DeployerInterfaceT, ParticipantInterfaceT, ContractHandleT, Maybe };
