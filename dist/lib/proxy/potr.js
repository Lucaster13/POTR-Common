import { BASE_CLASSES, PotrBaseClass } from "../../constants";
import { getCIDFromReserveAddr, resolveIpfsGatewayUrl } from "../utils";
import Algo from "./algorand";
async function getMetadata(asaId) {
    const [assetMetadata, arc69Metadata] = await Promise.all([
        Algo.getAsaMetadata(asaId),
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
        baseClass: getBaseClass(traits.Class),
        traits,
    };
}
function getBaseClass(potrClass) {
    const potrBaseClass = potrClass;
    return !BASE_CLASSES.includes(potrBaseClass) ? PotrBaseClass.HUMANOID : potrBaseClass;
}
async function getAllMetadatasWithoutTraits() {
    const assets = [];
    let nextToken;
    do {
        await Algo.getAllAsaMetadata({ addr: Algo.getAdminAddr(), nextToken }).then((res) => assets.push(...res.assets));
    } while (nextToken);
    return assets
        .filter((a) => a.params["unit-name"].startsWith("POTR"))
        .map(({ params, index }) => ({
        name: params.name,
        url: resolveIpfsGatewayUrl(getCIDFromReserveAddr(params.url, params.reserve)),
        unitName: params["unit-name"],
        id: index,
        balance: 1,
    }));
}
const Potr = {
    getBaseClass,
    getMetadata,
    getAllMetadatasWithoutTraits,
};
export default Potr;
