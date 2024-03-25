import { BASE_CLASSES } from "../../constants";
import { getCIDFromReserveAddr, resolveIpfsGatewayUrl } from "../utils";
import Algo from "./algorand";
async function getMetadata(asaId) {
    const [assetMetadata, arc69Metadata] = await Promise.all([
        Algo.getAssetMetadata(asaId),
        Algo.getArc69Metadata(asaId),
    ]);
    const { description, properties: traits } = arc69Metadata;
    const { params, index } = assetMetadata;
    return {
        name: params.name,
        url: resolveIpfsGatewayUrl(getCIDFromReserveAddr(params.url, params.reserve)),
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
