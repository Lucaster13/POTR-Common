import { type Participant } from "../constants/contract";
import {
	ContractHandleT,
	type BigNumber,
	type ContractId,
	type NetworkAddress,
	type ParticipantInterfaceT,
	type ReachAccount,
} from "../types";

const padString = (str: string, maxLen: number) => str.padEnd(maxLen, "\u0000");
const unPadString = (str: string) => str.replace(/\0/g, ""); // replace all null characters with ""

// turn contract deployment into promise that resolves when "deployed" interact fn is called
const deployContract = async <T>(
	deployer: ReachAccount,
	backend: any,
	participantInterface: T,
	waitUntilCompletion = false,
): Promise<[BigNumber, NetworkAddress]> => {
	const deploy = deployer.contract<ContractHandleT>(backend).p.Deployer;

	if (waitUntilCompletion) {
		let ctcId: any;
		let ctcAddr: any;
		await deploy({
			...participantInterface,
			// when deployed is called, call the response callback with the contract info
			deployed: (id: BigNumber, addr: NetworkAddress) => {
				ctcId = id;
				ctcAddr = addr;
			},
		});
		return [ctcId, ctcAddr];
	}

	return new Promise((resolve) => {
		deploy({
			...participantInterface,
			// when deployed is called, call the response callback with the contract info
			deployed: (ctcId: BigNumber, ctcAddr: NetworkAddress) => {
				resolve([ctcId, ctcAddr]);
			},
		});
	});
};

// attach user account to the given contract and provide interact, caller can await contract completion if they choose
const attachContract = async (
	acc: ReachAccount,
	backend: any,
	ctcId: ContractId | BigNumber,
	participantName: Participant,
	participantInterface: ParticipantInterfaceT,
) => {
	const participantAttach = acc.contract<ContractHandleT>(backend, ctcId).p[participantName];

	if (participantAttach) return participantAttach(participantInterface as any);
};

export { deployContract, attachContract };

export { padString, unPadString };
