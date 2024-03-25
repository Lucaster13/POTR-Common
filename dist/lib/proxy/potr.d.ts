import { PotrBaseClass, PotrClass } from "../../constants";
import { PotrMetadata } from "../../types";
declare function getMetadata(asaId: number): Promise<PotrMetadata>;
declare function getBaseClass(potrClass: PotrClass): PotrBaseClass;
declare const Potr: {
    getBaseClass: typeof getBaseClass;
    getMetadata: typeof getMetadata;
};
export default Potr;
