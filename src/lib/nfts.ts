import { BASE_CLASSES, PotrBaseClass, PotrClass } from "../constants";
import { Arc69Metadata, PotrAssetMetadata, PotrMetadata } from "../types";
import { getLatestAssetConfigTransaction } from "./proxy";

// NFT RELATED UTILS
export const getArc69MetadataForAsaId = (asaId: number): Promise<Arc69Metadata> =>
	getLatestAssetConfigTransaction(asaId).then((txn) => getJsonFromNote(txn.note));

export function getJsonFromNote(noteBase64: string): Arc69Metadata {
	const noteString = Buffer.from(noteBase64, "base64")
		.toLocaleString()
		.trim()
		.replace(/[^ -~]+/g, "");
	const noteObject = JSON.parse(noteString);
	return noteObject;
}

// takes the asset metadata and the most recent asset config transaction and creates PotrMetadata
export function makePotrMetadata(potrAssetMetadata: PotrAssetMetadata, potrArc69Metadata: Arc69Metadata): PotrMetadata {
	// merge asaMd and traits to create metadata
	const { description, properties: traits } = potrArc69Metadata;
	return {
		...potrAssetMetadata,
		balance: 1,
		description,
		baseClass: getBaseClass(traits.PotrClass),
		traits,
	};
}

export function getBaseClass(potrClass: PotrClass): PotrBaseClass {
	// if the class is not part of [base classes] then it must be humanoid
	const potrBaseClass = potrClass as unknown as PotrBaseClass;
	return !BASE_CLASSES.includes(potrBaseClass) ? PotrBaseClass.HUMANOID : potrBaseClass;
}
