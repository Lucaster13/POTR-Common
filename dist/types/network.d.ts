import { Time } from "@reach-sh/stdlib/dist/types/shared_impl";
import { BaseHandleT } from "./contract";
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
    contract: <T extends BaseHandleT>(b: any, info?: ContractId | BigNumber) => T;
    balanceOf: (asa?: AsaId) => Promise<BigNumber>;
    balancesOf: (asas: AsaId[]) => Promise<BigNumber[]>;
    tokenAccept: (asa: AsaId) => Promise<void>;
    tokenAccepted: (asa: AsaId) => Promise<boolean>;
    getAddress: () => NetworkAddress;
}
export { BigNumber, AsaId, ContractId, NetworkAddress, NetworkAccount, ReachAccount };
