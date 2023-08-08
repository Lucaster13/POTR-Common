import { AsaId } from "./network";

interface Cids {
    potr: string;
    coin: string;
}

interface AsaIds {
    potr: AsaId[];
    coin: AsaId[];
}

export { Cids, AsaIds };
