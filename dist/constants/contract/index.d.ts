declare const enum Participant {
    ADMIN = "Admin",
    SUMMONER = "Summoner",
    DEPLOYER = "Deployer"
}
declare const enum Result {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
declare const enum ContractName {
    COIN_SHOP = "coin_shop",
    SUMMON = "summon"
}
export { Participant, Result, ContractName };
export * from "./coin_shop.js";
export * from "./summon.js";
