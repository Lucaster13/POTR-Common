import { Participant } from "../../constants";
import { BigNumber, ContractId, NetworkAddress } from "../network";
type ParticipantInterfaceT = {
    log?: any;
};
type DeployerInterfaceT = {
    deployed: (ctcId: BigNumber, ctcAddr: NetworkAddress) => void;
} & ParticipantInterfaceT;
type ContractHandleT<I> = {
    p: Record<Participant, (i: I) => Promise<void>>;
    participants: Record<Participant, (i: I) => void>;
    getInfo: () => Promise<ContractId>;
};
type Maybe<T> = ["Some" | "None", T];
export { DeployerInterfaceT, ParticipantInterfaceT, ContractHandleT, Maybe };
