import { BASE_CLASSES } from "../constants/index.js";
import { getLatestAssetConfigTransactions } from "./proxy/algorand.js";
export const getArc69MetadataForAsaId = (asaId) => getLatestAssetConfigTransactions(asaId).then((txn) => getJsonFromNote(txn.note));
function getJsonFromNote(noteBase64) {
    const noteString = Buffer.from(noteBase64, "base64")
        .toLocaleString()
        .trim()
        .replace(/[^ -~]+/g, "");
    const noteObject = JSON.parse(noteString);
    return noteObject;
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
