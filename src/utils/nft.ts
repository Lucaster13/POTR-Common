import {
	ASA_IDS,
	BASE_CLASSES,
	BaseClass,
	Class,
	IPFS_URL_PREFIX,
	RARITIES,
	RARITY_POWER_CUTOFFS,
	RAW_IPFS_URL_PREFIX,
	REACH_NETWORK,
	Rarity,
} from "../constants";
import {
	AccountInformationResponseT,
	Arc69MetadataT,
	AsaIdT,
	NetworkAddressT,
	PotrAssetMetadataT,
	PotrMetadataT,
} from "../types";
import { getAllAssetConfigTransactions, getAllAssetMetadata, makeAlgodV2AndIndexer } from "./algo";

async function getOwnedPotrAsaIds(addr: NetworkAddressT): Promise<AsaIdT[]> {
	// get all the users owned potr ids
	const { algodClient } = await makeAlgodV2AndIndexer();
	const accountInfo = (await algodClient.accountInformation(addr).do()) as AccountInformationResponseT;
	// filter only potrs with balance > 0 and extract asa Id
	return accountInfo.assets
		.filter(({ amount }) => amount > 0)
		.map((md) => md["asset-id"])
		.filter((asaId: AsaIdT) => ASA_IDS[REACH_NETWORK].potr.includes(Number(asaId)));
}

async function getAllPotrMetadataByAsaId(): Promise<Map<AsaIdT, PotrMetadataT>> {
	const arc69MetadataByAsaId = await getPotrArc69ByAsaId();
	const potrAssetMetadata = await getAllPotrAssetMetadata();

	return potrAssetMetadata.reduce((potrMetadataByAsaId, assetMetadata) => {
		const { id } = assetMetadata;
		const arc69Metadata = arc69MetadataByAsaId.get(id);

		if (!arc69Metadata) return potrMetadataByAsaId;

		return potrMetadataByAsaId.set(assetMetadata.id, makePotrMetadata(assetMetadata, arc69Metadata));
	}, new Map<AsaIdT, PotrMetadataT>());
}

async function getPotrArc69ByAsaId(): Promise<Map<AsaIdT, Arc69MetadataT>> {
	const acfgTxns = await getAllAssetConfigTransactions();

	// create mapping of asaId to most recent txn
	const arc69ByAsaId = acfgTxns
		// filter only valid acfg txns
		.filter((txn) => Boolean(txn.note))
		.map((txn) => {
			// if create transaction then asa id is in a different place
			const isCreateTxn = txn["asset-config-transaction"]["asset-id"] === 0;
			const asaId = isCreateTxn ? txn["created-asset-index"] : txn["asset-config-transaction"]["asset-id"];
			const { note } = txn;
			return { asaId, note };
		})
		.filter(({ asaId }) => ASA_IDS[REACH_NETWORK].potr.includes(asaId)) // filter only potrs
		.reduce(
			(arc69ById, { asaId, note }) => arc69ById.set(asaId, getJsonFromNote(note)),
			new Map<AsaIdT, Arc69MetadataT>(),
		);

	return arc69ByAsaId;
}

function getJsonFromNote(noteBase64: string): Arc69MetadataT {
	const noteString = Buffer.from(noteBase64, "base64")
		.toLocaleString()
		.trim()
		.replace(/[^ -~]+/g, "");
	const noteObject = JSON.parse(noteString);
	return noteObject;
}

// gets asset metadata for ALL potrs
async function getAllPotrAssetMetadata(): Promise<PotrAssetMetadataT[]> {
	const assetMetadata = await getAllAssetMetadata();
	// transform into mapping, filter only potrs
	return assetMetadata
		.filter((md) => ASA_IDS[REACH_NETWORK].potr.includes(md.index)) // filter only potrs
		.map((md) => {
			const { index, params } = md;
			const { name, url } = params;
			const unitName = params["unit-name"];
			return {
				id: index,
				name,
				url: url.replace(RAW_IPFS_URL_PREFIX, IPFS_URL_PREFIX),
				unitName,
			};
		});
}

// takes the asset metadata and the most recent asset config transaction and creates PotrMetadata
function makePotrMetadata(potrAssetMetadata: PotrAssetMetadataT, potrArc69Metadata: Arc69MetadataT): PotrMetadataT {
	// merge asaMd and traits to create metadata
	const { description, properties: traits } = potrArc69Metadata;
	return {
		...potrAssetMetadata,
		balance: 1,
		description,
		baseClass: getBaseClass(traits.Class),
		rarity: getPortRarity(traits.Power),
		traits,
	};
}

function getBaseClass(className: Class): BaseClass {
	return !BASE_CLASSES.includes(className as any) ? BaseClass.HUMANOID : (className as any);
}

function getPortRarity(power: number): Rarity {
	// sort power cutoffs in descending order and find the first one that power is greater than
	return [...RARITIES].reverse().find((r) => power >= RARITY_POWER_CUTOFFS[r]) ?? Rarity.COMMON;
}

export { getOwnedPotrAsaIds, getBaseClass, getPortRarity, getAllPotrMetadataByAsaId };
