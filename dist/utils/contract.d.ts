import { ContractName, type Participant } from "../constants/contract/index.js";
import { type BigNumberT, type ContractIdT, type NetworkAddressT, type ParticipantT, BaseHandleT } from "../types/index.js";
import { ReachAccountT } from "../types/wallet.js";
declare const deployContract: <T extends object>(deployer: ReachAccountT, backend: any, participant: T, waitUntilCompletion?: boolean) => Promise<[BigNumberT, NetworkAddressT]>;
declare const attachContract: (acc: ReachAccountT, backend: any, ctcId: ContractIdT | BigNumberT, participantName: Participant, participant: ParticipantT) => Promise<void>;
declare function getContractHandle<T extends BaseHandleT>(wallet: ReachAccountT, ctcName: ContractName, ctcId: ContractIdT): T;
export { deployContract, attachContract, getContractHandle };
