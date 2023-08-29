import { ContractName, type Participant } from "../constants/contract/index.js";
import CONTRACT_BACKENDS from "../contracts/index.js";
import {
	ContractHandleT,
	type BigNumberT,
	type ContractIdT,
	type NetworkAddressT,
	type ParticipantT,
	BaseHandleT,
} from "../types/index.js";
import { ReachAccountT } from "../types/wallet.js";

// turn contract deployment into promise that resolves when "deployed" interact fn is called
const deployContract = async <T extends object>(
	deployer: ReachAccountT,
	backend: any,
	participant: T,
	waitUntilCompletion = false,
): Promise<[BigNumberT, NetworkAddressT]> => {
	const deploy = deployer.contract<ContractHandleT>(backend).p.Deployer;

	if (waitUntilCompletion) {
		let ctcId: any;
		let ctcAddr: any;
		await deploy({
			...participant,
			// when deployed is called, call the response callback with the contract info
			deployed: (id: BigNumberT, addr: NetworkAddressT) => {
				ctcId = id;
				ctcAddr = addr;
			},
		});
		return [ctcId, ctcAddr];
	}

	return new Promise((resolve) => {
		deploy({
			...participant,
			// when deployed is called, call the response callback with the contract info
			deployed: (ctcId: BigNumberT, ctcAddr: NetworkAddressT) => {
				resolve([ctcId, ctcAddr]);
			},
		});
	});
};

// attach user account to the given contract and provide interact, caller can await contract completion if they choose
const attachContract = async (
	acc: ReachAccountT,
	backend: any,
	ctcId: ContractIdT | BigNumberT,
	participantName: Participant,
	participant: ParticipantT,
) => {
	const participantAttach = acc.contract<ContractHandleT>(backend, ctcId).p[participantName];

	if (participantAttach) return participantAttach(participant as any);
};

function getContractHandle<T extends BaseHandleT>(wallet: ReachAccountT, ctcName: ContractName, ctcId: ContractIdT): T {
	return wallet.contract<T>(CONTRACT_BACKENDS[ctcName], ctcId);
}
export { deployContract, attachContract, getContractHandle };
