import { type Participant } from "../constants/contract";
import { type BigNumberT, type ContractIdT, type NetworkAddressT, type ParticipantT } from "../types";
import { ReachAccountT } from "../types/wallet";
declare const deployContract: <T>(deployer: ReachAccountT, backend: any, participant: T, waitUntilCompletion?: boolean) => Promise<[BigNumberT, NetworkAddressT]>;
declare const attachContract: (acc: ReachAccountT, backend: any, ctcId: ContractIdT | BigNumberT, participantName: Participant, participant: ParticipantT) => Promise<void>;
export { deployContract, attachContract };
