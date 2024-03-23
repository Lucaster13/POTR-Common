import { BaseHandleT, DeployerT, LoggerT } from "./base.js";
import { Participant } from "../../constants/index.js";

/*

    SUMMON CONTRACT TYPES

*/

// interface for running contract as admin
type SummonAdminT = {
	// determines which potr to send based on coin type
	get_potr: (coin: number) => Promise<number> | number;
	// the asa id of the payment coin
	coin: number;
} & LoggerT;

// interface for connecting as a summoner
type SummonSummonerT = {
	// does opt in and returns status of opt-in
	opt_in: (potrId: number) => Promise<boolean>;
};

type SummonHandleT = {
	e: {
		status: any;
		result: any;
	};
	p: {
		[Participant.ADMIN]: (int: SummonAdminT) => Promise<void>;
		[Participant.DEPLOYER]: (int: DeployerT) => Promise<void>;
		[Participant.SUMMONER]: (int: SummonSummonerT) => Promise<void>;
	};
} & BaseHandleT;

export { SummonAdminT, SummonSummonerT, SummonHandleT };
