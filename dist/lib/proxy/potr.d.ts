import { PotrBaseClass, PotrClass } from "../../constants";
import { PotrAssetMetadata, PotrMetadata } from "../../types";
declare function getMetadata(asaId: number): Promise<PotrMetadata>;
declare function getBaseClass(potrClass: PotrClass): PotrBaseClass;
declare function getAllMetadatasWithoutTraits(): Promise<PotrAssetMetadata[]>;
declare const Potr: {
    getBaseClass: typeof getBaseClass;
    getMetadata: typeof getMetadata;
    getAllMetadatasWithoutTraits: typeof getAllMetadatasWithoutTraits;
};
export default Potr;
