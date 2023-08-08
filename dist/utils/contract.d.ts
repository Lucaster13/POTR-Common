import { type Participant } from "../constants/contract";
import { type BigNumber, type ContractId, type NetworkAddress, type ParticipantInterfaceT, type ReachAccount } from "../types";
declare const padString: (str: string, maxLen: number) => string;
declare const unPadString: (str: string) => string;
declare const deployContract: <T>(deployer: ReachAccount, backend: any, participantName: Participant, participantInterfaceT: T, waitUntilCompletion?: boolean) => Promise<[BigNumber, NetworkAddress]>;
declare const attachContract: <T extends ParticipantInterfaceT>(acc: ReachAccount, backend: any, ctcId: ContractId | BigNumber, participantName: Participant, participantInterfaceT: T) => Promise<void>;
export { deployContract, attachContract };
export { padString, unPadString };
