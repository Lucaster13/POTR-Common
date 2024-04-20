import { BASE_CLASSES, PotrBaseClass, PotrClass } from "../../constants";
import { AssetMetadata, PotrAssetMetadata, PotrMetadata } from "../../types";
import { getCIDFromReserveAddr, resolveIpfsGatewayUrl } from "../utils";
import Algo from "./algorand";

// takes the asset metadata and the most recent asset config transaction and creates PotrMetadata
async function getMetadata(asaId: number): Promise<PotrMetadata> {
	const [assetMetadata, arc69Metadata] = await Promise.all([
		Algo.getAsaMetadata(asaId),
		Algo.getArc69Metadata(asaId),
	]);
	// merge asaMd and traits to create metadata
	const { description, properties: traits } = arc69Metadata;
	const { params, index } = assetMetadata;

	return {
		name: params.name,
		url: resolveIpfsGatewayUrl(getCIDFromReserveAddr(params.url, params.reserve)),
		unitName: params["unit-name"],
		id: index,
		balance: 1,
		description,
		baseClass: getBaseClass(traits.Class),
		traits,
	};
}

function getBaseClass(potrClass: PotrClass): PotrBaseClass {
	// if the class is not part of [base classes] then it must be humanoid
	const potrBaseClass = potrClass as unknown as PotrBaseClass;
	return !BASE_CLASSES.includes(potrBaseClass) ? PotrBaseClass.HUMANOID : potrBaseClass;
}

// fast lookup to get all potr metadata without their ARC-69 traits
async function getAllMetadatasWithoutTraits(): Promise<PotrAssetMetadata[]> {
	// get all admin asset metadatas
	const assets: AssetMetadata[] = [];

	let nextToken;
	do {
		await Algo.getAllAsaMetadata({ addr: Algo.getAdminAddr(), nextToken }).then((res) =>
			assets.push(...res.assets),
		);
	} while (nextToken);

	// transform assets
	return assets.map(({ params, index }) => ({
		name: params.name,
		url: resolveIpfsGatewayUrl(getCIDFromReserveAddr(params.url, params.reserve)),
		unitName: params["unit-name"],
		id: index,
		balance: 1,
	}));
}

// EXPORT PROXYS
const Potr = {
	getBaseClass,
	getMetadata,
	getAllMetadatasWithoutTraits,
};

export default Potr;
