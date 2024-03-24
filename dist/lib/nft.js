import { algorandConfig } from "../config/index.js";
import { BASE_CLASSES } from "../constants/index.js";
import { algod, getLatestAssetConfigTransactions, indexer } from "./proxy/algorand.js";
import { getCIDFromReserveAddr, resolveIpfsGatewayUrl } from "./utils.js";
export const getArc69MetadataForAsaId = (asaId) => getLatestAssetConfigTransactions(asaId).then((txn) => getJsonFromNote(txn.note));
function getJsonFromNote(noteBase64) {
    const noteString = Buffer.from(noteBase64, "base64")
        .toLocaleString()
        .trim()
        .replace(/[^ -~]+/g, "");
    const noteObject = JSON.parse(noteString);
    return noteObject;
}
export async function getPotrAssetMetadata(asaId) {
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
export function makePotrMetadata(potrAssetMetadata, potrArc69Metadata) {
    const { description, properties: traits } = potrArc69Metadata;
    return {
        ...potrAssetMetadata,
        balance: 1,
        description,
        baseClass: getBaseClass(traits.Class),
        traits,
    };
}
export function getBaseClass(className) {
    return !BASE_CLASSES.includes(className) ? "Humanoid" : className;
}
