import { algorandConfig } from "../config/index.js";
import { BASE_CLASSES, BaseClass, Class } from "../constants/index.js";
import { Arc69Metadata, PotrAssetMetadata, PotrMetadata } from "../types/index.js";
import { algod, getLatestAssetConfigTransactions, indexer } from "./proxy/algorand.js";
import { getCIDFromReserveAddr, resolveIpfsGatewayUrl } from "./utils.js";

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

// gets asset metadata for ALL potrs
export async function getPotrAssetMetadata(asaId: number): Promise<PotrAssetMetadata> {
	// transform into mapping, filter only potrs
	const md = await algod.getAssetByID(asaId).do();
	const test = await algod.accountAssetInformation(algorandConfig.wallets.TestNet.ADMIN, asaId).do();
	const t = await indexer.lookupAssetByID(asaId).do();
	console.log(md);
	console.log(test);
	console.log(t);

	const { index, params } = md;
	const { name } = params;
	const unitName = params["unit-name"];
	return {
		id: index,
		name,
		url: resolveIpfsGatewayUrl(getCIDFromReserveAddr(params.reserve)),
		unitName,
	};
}

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
