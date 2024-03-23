import { ContractName, type Participant } from "../../constants/contract/index.js";
import { type ParticipantT, BaseHandleT } from "../../types/index.js";
declare const deployContract: <T extends object>(deployer: any, backend: any, participant: T, waitUntilCompletion?: boolean) => Promise<[number, string]>;
declare const attachContract: (acc: any, backend: any, ctcId: string | number, participantName: Participant, participant: ParticipantT) => Promise<any>;
declare function getContractHandle<T extends BaseHandleT>(wallet: any, ctcName: ContractName, ctcId: string): T;
export { deployContract, attachContract, getContractHandle };
