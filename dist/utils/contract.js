const padString = (str, maxLen) => str.padEnd(maxLen, "\u0000");
const unPadString = (str) => str.replace(/\0/g, "");
const deployContract = async (deployer, backend, participantName, participantInterfaceT, waitUntilCompletion = false) => {
    if (waitUntilCompletion) {
        let ctcId;
        let ctcAddr;
        await deployer
            .contract(backend)
            .p[participantName]({
            ...participantInterfaceT,
            deployed: (id, addr) => {
                ctcId = id;
                ctcAddr = addr;
            },
        });
        return [ctcId, ctcAddr];
    }
    return new Promise((resolve) => {
        deployer.contract(backend).p[participantName]({
            ...participantInterfaceT,
            deployed: (ctcId, ctcAddr) => {
                resolve([ctcId, ctcAddr]);
            },
        });
    });
};
const attachContract = async (acc, backend, ctcId, participantName, participantInterfaceT) => acc.contract(backend, ctcId).p[participantName](participantInterfaceT);
export { deployContract, attachContract };
export { padString, unPadString };
