import { BASE_CLASSES, PotrBaseClass, PotrClass } from "../../constants";
import { PotrMetadata } from "../../types";
import { getCIDFromReserveAddr, getReserveAddrFromCID, resolveIpfsGatewayUrl } from "../utils";
import Algo from "./algorand";

// takes the asset metadata and the most recent asset config transaction and creates PotrMetadata
export async function getMetadata(asaId: number): Promise<PotrMetadata> {
	const [assetMetadata, arc69Metadata] = await Promise.all([
		Algo.getAssetMetadata(asaId),
		Algo.getArc69Metadata(asaId),
	]);
	// merge asaMd and traits to create metadata
	const { description, properties: traits } = arc69Metadata;
	const { params, index } = assetMetadata;

	const cid = getCIDFromReserveAddr(params.url, params.reserve);
	const reserveAddrCheck = getReserveAddrFromCID(cid);
	if (params.reserve.trim() !== reserveAddrCheck.trim()) {
		console.warn(`Reserve Addresses did not match ${params.reserve} !== ${reserveAddrCheck}`);
	}

	return {
		name: params.name,
		url: resolveIpfsGatewayUrl(cid),
		unitName: params["unit-name"],
		id: index,
		balance: 1,
		description,
		baseClass: getBaseClass(traits.PotrClass),
		traits,
	};
}

function getBaseClass(potrClass: PotrClass): PotrBaseClass {
	// if the class is not part of [base classes] then it must be humanoid
	const potrBaseClass = potrClass as unknown as PotrBaseClass;
	return !BASE_CLASSES.includes(potrBaseClass) ? PotrBaseClass.HUMANOID : potrBaseClass;
}

// EXPORT PROXYS
const Potr = {
	getBaseClass,
	getMetadata,
};

export default Potr;
