const enum Participants {
  ADMIN = "Admin",
  SUMMONER = "Summoner",
  DEPLOYER = "Deployer",
}

const enum Result {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

const enum ContractName {
  COIN_SHOP = "coin_shop",
  SUMMON = "summon",
}

export { Participants, Result, ContractName };
export * from "./coin_shop";
export * from "./summon";
