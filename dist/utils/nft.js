import { ASA_IDS, BASE_CLASSES, IPFS_URL_PREFIX, RARITIES, RARITY_POWER_CUTOFFS, RAW_IPFS_URL_PREFIX, REACH_NETWORK, } from "../constants";
import { getAllAssetConfigTransactions, getAllAssetMetadata, makeAlgodV2AndIndexer } from "./algo";
async function getOwnedPotrAsaIds(addr) {
    const { algodClient } = await makeAlgodV2AndIndexer();
    const accountInfo = (await algodClient.accountInformation(addr).do());
    return accountInfo.assets
        .filter(({ amount }) => amount > 0)
        .map((md) => md["asset-id"])
        .filter((asaId) => ASA_IDS[REACH_NETWORK].potr.includes(Number(asaId)));
}
async function getAllPotrMetadataByAsaId() {
    const arc69MetadataByAsaId = await getPotrArc69ByAsaId();
    const potrAssetMetadata = await getAllPotrAssetMetadata();
    return potrAssetMetadata.reduce((potrMetadataByAsaId, assetMetadata) => {
        const { id } = assetMetadata;
        const arc69Metadata = arc69MetadataByAsaId.get(id);
        if (!arc69Metadata)
            return potrMetadataByAsaId;
        return potrMetadataByAsaId.set(assetMetadata.id, makePotrMetadata(assetMetadata, arc69Metadata));
    }, new Map());
}
async function getPotrArc69ByAsaId() {
    const acfgTxns = await getAllAssetConfigTransactions();
    const arc69ByAsaId = acfgTxns
        .filter((txn) => Boolean(txn.note))
        .map((txn) => {
        const isCreateTxn = txn["asset-config-transaction"]["asset-id"] === 0;
        const asaId = isCreateTxn ? txn["created-asset-index"] : txn["asset-config-transaction"]["asset-id"];
        const { note } = txn;
        return { asaId, note };
    })
        .filter(({ asaId }) => ASA_IDS[REACH_NETWORK].potr.includes(asaId))
        .reduce((arc69ById, { asaId, note }) => arc69ById.set(asaId, getJsonFromNote(note)), new Map());
    return arc69ByAsaId;
}
function getJsonFromNote(noteBase64) {
    const noteString = Buffer.from(noteBase64, "base64")
        .toLocaleString()
        .trim()
        .replace(/[^ -~]+/g, "");
    const noteObject = JSON.parse(noteString);
    return noteObject;
}
async function getAllPotrAssetMetadata() {
    const assetMetadata = await getAllAssetMetadata();
    return assetMetadata
        .filter((md) => ASA_IDS[REACH_NETWORK].potr.includes(md.index))
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
function makePotrMetadata(potrAssetMetadata, potrArc69Metadata) {
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
function getBaseClass(className) {
    return !BASE_CLASSES.includes(className) ? "Humanoid" : className;
}
function getPortRarity(power) {
    return [...RARITIES].reverse().find((r) => power >= RARITY_POWER_CUTOFFS[r]) ?? "common";
}
export { getOwnedPotrAsaIds, getBaseClass, getPortRarity, getAllPotrMetadataByAsaId };
