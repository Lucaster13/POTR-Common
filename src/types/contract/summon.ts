import { EventStream } from "./events";
import { AsaIdT, BigNumberT } from "../network";
import { BaseHandleT, DeployerT, LoggerT } from "./base";
import { Participant, Result, SummonStatus } from "../../constants";

/*

    SUMMON CONTRACT TYPES

*/

// interface for running contract as admin
type SummonAdminT = {
	// determines which potr to send based on coin type
	get_potr: (coin: BigNumberT) => Promise<AsaIdT> | AsaIdT;
	// the asa id of the payment coin
	coin: AsaIdT;
} & LoggerT;

// interface for connecting as a summoner
type SummonSummonerT = {
	// does opt in and returns status of opt-in
	opt_in: (potrId: BigNumberT) => Promise<boolean>;
};

type SummonHandleT = {
	e: {
		status: EventStream<SummonStatus>;
		result: EventStream<Result>;
	};
	p: {
		[Participant.ADMIN]: (int: SummonAdminT) => Promise<void>;
		[Participant.DEPLOYER]: (int: DeployerT) => Promise<void>;
		[Participant.SUMMONER]: (int: SummonSummonerT) => Promise<void>;
	};
} & BaseHandleT;

export { SummonAdminT, SummonSummonerT, SummonHandleT };
