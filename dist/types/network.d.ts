import { Time } from "@reach-sh/stdlib/dist/types/shared_impl";
import { ContractHandleT, ParticipantInterfaceT } from "./contract";
type BigNumber = Time;
type AsaId = number;
type ContractId = number;
type NetworkAddress = string;
interface NetworkAccount {
    addr?: string;
    address?: NetworkAddress;
}
interface ReachAccount {
    networkAccount: NetworkAccount;
    contract: <I extends ParticipantInterfaceT>(b: any, info?: ContractId | BigNumber) => ContractHandleT<I>;
    balanceOf: (asa?: AsaId) => Promise<BigNumber>;
    acceptToken: (asa: AsaId) => Promise<void>;
    tokenAccepted: (asa: AsaId) => Promise<boolean>;
}
export { BigNumber, AsaId, ContractId, NetworkAddress, NetworkAccount, ReachAccount, };
