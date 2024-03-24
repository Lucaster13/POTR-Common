import { BASE_CLASSES, PotrBaseClass, PotrClass } from "../constants";
import { Arc69Metadata, PotrMetadata } from "../types";
import { Algo } from "./proxy";
import { getCIDFromReserveAddr, resolveIpfsGatewayUrl } from "./utils";

// NFT RELATED UTILS
export const getArc69MetadataForAsaId = (asaId: number): Promise<Arc69Metadata> =>
	Algo.getLatestAssetConfigTransaction(asaId).then((txn) => getJsonFromNote(txn.note));

export function getJsonFromNote(noteBase64: string): Arc69Metadata {
	const noteString = Buffer.from(noteBase64, "base64")
		.toLocaleString()
		.trim()
		.replace(/[^ -~]+/g, "");
	const noteObject = JSON.parse(noteString);
	return noteObject;
}

// takes the asset metadata and the most recent asset config transaction and creates PotrMetadata
export async function getPotrMetadataFromAsaId(asaId: number): Promise<PotrMetadata> {
	const [assetMetadata, arc69Metadata] = await Promise.all([
		Algo.getAssetMetadata(asaId),
		getArc69MetadataForAsaId(asaId),
	]);
	// merge asaMd and traits to create metadata
	const { description, properties: traits } = arc69Metadata;
	const { params, index } = assetMetadata;
	return {
		name: params.name,
		url: resolveIpfsGatewayUrl(getCIDFromReserveAddr(params.reserve)),
		unitName: params["unit-name"],
		id: index,
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
