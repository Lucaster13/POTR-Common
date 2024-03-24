import { BaseClass, Class } from "../constants/index.js";
import { Arc69Metadata, PotrAssetMetadata, PotrMetadata } from "../types/index.js";
export declare const getArc69MetadataForAsaId: (asaId: number) => Promise<Arc69Metadata>;
export declare function makePotrMetadata(potrAssetMetadata: PotrAssetMetadata, potrArc69Metadata: Arc69Metadata): PotrMetadata;
export declare function getBaseClass(className: Class): BaseClass;
