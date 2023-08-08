const padString = (str, maxLen) => str.padEnd(maxLen, "\u0000");
const unPadString = (str) => str.replace(/\0/g, "");
const deployContract = async (deployer, backend, participantInterface, waitUntilCompletion = false) => {
    const deploy = deployer.contract(backend).p.Deployer;
    if (waitUntilCompletion) {
        let ctcId;
        let ctcAddr;
        await deploy({
            ...participantInterface,
            deployed: (id, addr) => {
                ctcId = id;
                ctcAddr = addr;
            },
        });
        return [ctcId, ctcAddr];
    }
    return new Promise((resolve) => {
        deploy({
            ...participantInterface,
            deployed: (ctcId, ctcAddr) => {
                resolve([ctcId, ctcAddr]);
            },
        });
    });
};
const attachContract = async (acc, backend, ctcId, participantName, participantInterface) => {
    const participantAttach = acc.contract(backend, ctcId).p[participantName];
    if (participantAttach)
        return participantAttach(participantInterface);
};
export { deployContract, attachContract };
export { padString, unPadString };
