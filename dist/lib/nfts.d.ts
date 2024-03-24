import { PotrBaseClass, PotrClass } from "../constants";
import { Arc69Metadata, PotrMetadata } from "../types";
export declare const getArc69MetadataForAsaId: (asaId: number) => Promise<Arc69Metadata>;
export declare function getJsonFromNote(noteBase64: string): Arc69Metadata;
export declare function getPotrMetadataFromAsaId(asaId: number): Promise<PotrMetadata>;
export declare function getBaseClass(potrClass: PotrClass): PotrBaseClass;
