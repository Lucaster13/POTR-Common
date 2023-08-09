import { Time } from "@reach-sh/stdlib/dist/types/shared_impl";

type BigNumberT = Time;
type AsaIdT = number;
type ContractIdT = number;
type NetworkAddressT = string;
type NetworkAccountT = {
	addr?: NetworkAddressT;
	address?: NetworkAddressT;
	sk?: string;
};

export { BigNumberT, AsaIdT, ContractIdT, NetworkAddressT, NetworkAccountT };
