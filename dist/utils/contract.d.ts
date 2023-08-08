import { type Participant } from "../constants/contract";
import { type BigNumber, type ContractId, type NetworkAddress, type ParticipantInterfaceT, type ReachAccount } from "../types";
declare const padString: (str: string, maxLen: number) => string;
declare const unPadString: (str: string) => string;
declare const deployContract: <T>(deployer: ReachAccount, backend: any, participantInterface: T, waitUntilCompletion?: boolean) => Promise<[BigNumber, NetworkAddress]>;
declare const attachContract: (acc: ReachAccount, backend: any, ctcId: ContractId | BigNumber, participantName: Participant, participantInterface: ParticipantInterfaceT) => Promise<void>;
export { deployContract, attachContract };
export { padString, unPadString };
