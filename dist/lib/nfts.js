import { BASE_CLASSES } from "../constants";
import { Algo } from "./proxy";
import { getCIDFromReserveAddr, resolveIpfsGatewayUrl } from "./utils";
export const getArc69MetadataForAsaId = (asaId) =>
	Algo.getLatestAssetConfigTransaction(asaId).then((txn) => getJsonFromNote(txn.note));
export function getJsonFromNote(noteBase64) {
	const noteString = Buffer.from(noteBase64, "base64")
		.toLocaleString()
		.trim()
		.replace(/[^ -~]+/g, "");
	const noteObject = JSON.parse(noteString);
	return noteObject;
}
export async function getPotrMetadataFromAsaId(asaId) {
	const [assetMetadata, arc69Metadata] = await Promise.all([
		Algo.getAsaMetadata(asaId),
		getArc69MetadataForAsaId(asaId),
	]);
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
export function getBaseClass(potrClass) {
	const potrBaseClass = potrClass;
	return !BASE_CLASSES.includes(potrBaseClass) ? "Humanoid" : potrBaseClass;
}
