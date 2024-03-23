import CONTRACT_BACKENDS from "../../contracts/index.js";
const deployContract = async (deployer, backend, participant, waitUntilCompletion = false) => {
    const deploy = deployer.contract(backend).p.Deployer;
    if (waitUntilCompletion) {
        let ctcId;
        let ctcAddr;
        await deploy({
            ...participant,
            deployed: (id, addr) => {
                ctcId = id;
                ctcAddr = addr;
            },
        });
        return [ctcId, ctcAddr];
    }
    return new Promise((resolve) => {
        deploy({
            ...participant,
            deployed: (ctcId, ctcAddr) => {
                resolve([ctcId, ctcAddr]);
            },
        });
    });
};
const attachContract = async (acc, backend, ctcId, participantName, participant) => {
    const participantAttach = acc.contract(backend, ctcId).p[participantName];
    if (participantAttach)
        return participantAttach(participant);
};
function getContractHandle(wallet, ctcName, ctcId) {
    return wallet.contract(CONTRACT_BACKENDS[ctcName], ctcId);
}
export { deployContract, attachContract, getContractHandle };
