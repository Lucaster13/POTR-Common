import { BaseHandleT } from "./contract/index.js";
import { AsaIdT, BigNumberT, ContractIdT, NetworkAccountT } from "./network.js";
type ReachAccountT = {
    networkAccount: NetworkAccountT;
    contract: <T extends BaseHandleT>(b: any, info?: ContractIdT | BigNumberT) => T;
    balanceOf: (asa?: AsaIdT) => Promise<BigNumberT>;
    balancesOf: (asas: AsaIdT[]) => Promise<BigNumberT[]>;
    tokenAccept: (asa: AsaIdT) => Promise<void>;
    tokenAccepted: (asa: AsaIdT) => Promise<boolean>;
    getAddress: () => NetworkAccountT;
};
export { ReachAccountT };
