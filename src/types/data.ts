import { AsaIdT } from "./network";

interface Cids {
	potr: string;
	coin: string;
}

interface AsaIds {
	potr: AsaIdT[];
	coin: AsaIdT[];
}

export { Cids, AsaIds };
