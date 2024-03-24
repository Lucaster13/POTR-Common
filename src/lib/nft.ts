import { BASE_CLASSES, BaseClass, Class } from "../constants/index.js";
import { Arc69Metadata, PotrAssetMetadata, PotrMetadata } from "../types/index.js";
import { getLatestAssetConfigTransactions } from "./proxy/algorand.js";

export const getArc69MetadataForAsaId = (asaId: number): Promise<Arc69Metadata> =>
	getLatestAssetConfigTransactions(asaId).then((txn) => getJsonFromNote(txn.note));

function getJsonFromNote(noteBase64: string): Arc69Metadata {
	const noteString = Buffer.from(noteBase64, "base64")
		.toLocaleString()
		.trim()
		.replace(/[^ -~]+/g, "");
	const noteObject = JSON.parse(noteString);
	return noteObject;
}

// // gets asset metadata for ALL potrs
// async function getPotrAssetMetadata(asaId: number): Promise<PotrAssetMetadata> {
// 	// transform into mapping, filter only potrs
// 	const md = (await algod.getAssetByID(asaId).do()) as AssetMetadataResponse;
// 	const { index, params } = md;
// 	const { name, url } = params;
// 	const unitName = params["unit-name"];
// 	return {
// 		id: index,
// 		name,
// 		url: url.replace(RAW_IPFS_URL_PREFIX, IPFS_GATEWAY_URL_PREFIX),
// 		unitName,
// 	};
// }

// takes the asset metadata and the most recent asset config transaction and creates PotrMetadata
export function makePotrMetadata(potrAssetMetadata: PotrAssetMetadata, potrArc69Metadata: Arc69Metadata): PotrMetadata {
	// merge asaMd and traits to create metadata
	const { description, properties: traits } = potrArc69Metadata;
	return {
		...potrAssetMetadata,
		balance: 1,
		description,
		baseClass: getBaseClass(traits.Class),
		traits,
	};
}

export function getBaseClass(className: Class): BaseClass {
	return !BASE_CLASSES.includes(className as any) ? BaseClass.HUMANOID : (className as any);
}
