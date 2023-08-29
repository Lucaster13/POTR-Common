import { AsaIdT } from "./network.js";
interface Cids {
    potr: string;
    coin: string;
}
interface AsaIds {
    potr: AsaIdT[];
    coin: AsaIdT[];
}
export { Cids, AsaIds };
