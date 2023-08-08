var Participant;
(function (Participant) {
    Participant["ADMIN"] = "Admin";
    Participant["SUMMONER"] = "Summoner";
    Participant["DEPLOYER"] = "Deployer";
})(Participant || (Participant = {}));
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
export { Participant, Result, ContractName };
export * from "./coin_shop";
export * from "./summon";
