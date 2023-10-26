import { Inventory } from "../../Inventory/Inventory";
import { Entity, EntityDto } from "../Entity";
export interface CharacterEntityDto extends EntityDto {
    invId: number;
}
export declare class CharacterEntity extends Entity {
    private inventory;
    private armor;
    constructor(id: number, networkObject: NetworkObject, clientId: number | undefined, inventory: Inventory);
    GetInventory(): Inventory;
    Encode(): CharacterEntityDto;
    private CalcArmor;
    GetArmor(): number;
}
