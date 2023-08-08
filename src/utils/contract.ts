import { type Participant } from "../constants/contract";
import {
  type BigNumber,
  type ContractId,
  type DeployerInterfaceT,
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
  participantName: Participant,
  participantInterfaceT: T,
  waitUntilCompletion = false,
): Promise<[BigNumber, NetworkAddress]> => {
  if (waitUntilCompletion) {
    let ctcId: any;
    let ctcAddr: any;
    await deployer
      .contract<T & DeployerInterfaceT>(backend)
      .p[participantName]({
        ...participantInterfaceT,
        // when deployed is called, call the response callback with the contract info
        deployed: (id: BigNumber, addr: NetworkAddress) => {
          ctcId = id;
          ctcAddr = addr;
        },
      });
    return [ctcId, ctcAddr];
  }

  return new Promise((resolve) => {
    deployer.contract<T & DeployerInterfaceT>(backend).p[participantName]({
      ...participantInterfaceT,
      // when deployed is called, call the response callback with the contract info
      deployed: (ctcId: BigNumber, ctcAddr: NetworkAddress) => {
        resolve([ctcId, ctcAddr]);
      },
    });
  });
};

// attach user account to the given contract and provide interact, caller can await contract completion if they choose
const attachContract = async <T extends ParticipantInterfaceT>(
  acc: ReachAccount,
  backend: any,
  ctcId: ContractId | BigNumber,
  participantName: Participant,
  participantInterfaceT: T,
) => acc.contract<T>(backend, ctcId).p[participantName](participantInterfaceT);

export { deployContract, attachContract };

export { padString, unPadString };
