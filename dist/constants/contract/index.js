var Participants;
(function (Participants) {
    Participants["ADMIN"] = "Admin";
    Participants["SUMMONER"] = "Summoner";
    Participants["DEPLOYER"] = "Deployer";
})(Participants || (Participants = {}));
var Result;
(function (Result) {
    Result["SUCCESS"] = "SUCCESS";
    Result["FAILURE"] = "FAILURE";
})(Result || (Result = {}));
var ContractName;
(function (ContractName) {
    ContractName["COIN_SHOP"] = "coin_shop";
    ContractName["SUMMON"] = "summon";
})(ContractName || (ContractName = {}));
export { Participants, Result, ContractName };
export * from "./coin_shop";
export * from "./summon";
//# sourceMappingURL=index.js.map