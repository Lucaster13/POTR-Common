const enum Participant {
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

export { Participant, Result, ContractName };
export * from "./coin_shop.js";
export * from "./summon.js";
