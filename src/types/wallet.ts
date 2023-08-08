import { BaseHandleT } from "./contract";
import { AsaIdT, BigNumberT, ContractIdT, NetworkAccountT } from "./network";

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
