import { BaseClass, Class, Rarity } from "../constants";
import { AsaIdT, NetworkAddressT, PotrMetadataT } from "../types";
declare function getOwnedPotrAsaIds(addr: NetworkAddressT): Promise<AsaIdT[]>;
declare function getAllPotrMetadataByAsaId(): Promise<Map<AsaIdT, PotrMetadataT>>;
declare function getBaseClass(className: Class): BaseClass;
declare function getPortRarity(power: number): Rarity;
export { getOwnedPotrAsaIds, getBaseClass, getPortRarity, getAllPotrMetadataByAsaId };
