import { ContractName, type Participant } from "../../constants/contract/index.js";
import CONTRACT_BACKENDS from "../../contracts/index.js";
import { type ParticipantT, BaseHandleT } from "../../types/index.js";

// turn contract deployment into promise that resolves when "deployed" interact fn is called
const deployContract = async <T extends object>(
	deployer: any,
	backend: any,
	participant: T,
	waitUntilCompletion = false,
): Promise<[number, string]> => {
	const deploy = deployer.contract(backend).p.Deployer;

	if (waitUntilCompletion) {
		let ctcId: any;
		let ctcAddr: any;
		await deploy({
			...participant,
			// when deployed is called, call the response callback with the contract info
			deployed: (id: number, addr: string) => {
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
			deployed: (ctcId: number, ctcAddr: string) => {
				resolve([ctcId, ctcAddr]);
			},
		});
	});
};

// attach user account to the given contract and provide interact, caller can await contract completion if they choose
const attachContract = async (
	acc: any,
	backend: any,
	ctcId: string | number,
	participantName: Participant,
	participant: ParticipantT,
) => {
	const participantAttach = acc.contract(backend, ctcId).p[participantName];

	if (participantAttach) return participantAttach(participant as any);
};

function getContractHandle<T extends BaseHandleT>(wallet: any, ctcName: ContractName, ctcId: string): T {
	return wallet.contract(CONTRACT_BACKENDS[ctcName], ctcId);
}
export { deployContract, attachContract, getContractHandle };
