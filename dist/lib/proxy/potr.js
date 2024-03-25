import { BASE_CLASSES } from "../../constants";
import { getCIDFromReserveAddr, getReserveAddrFromCID, resolveIpfsGatewayUrl } from "../utils";
import Algo from "./algorand";
export async function getMetadata(asaId) {
    const [assetMetadata, arc69Metadata] = await Promise.all([
        Algo.getAssetMetadata(asaId),
        Algo.getArc69Metadata(asaId),
    ]);
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
function getBaseClass(potrClass) {
    const potrBaseClass = potrClass;
    return !BASE_CLASSES.includes(potrBaseClass) ? "Humanoid" : potrBaseClass;
}
const Potr = {
    getBaseClass,
    getMetadata,
};
export default Potr;
