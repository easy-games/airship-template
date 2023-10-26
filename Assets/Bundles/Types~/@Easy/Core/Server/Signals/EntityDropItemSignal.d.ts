import { Entity } from "../../Shared/Entity/Entity";
import { GroundItem } from "../../Shared/GroundItem/GroundItem";
import { ItemStack } from "../../Shared/Inventory/ItemStack";
export declare class EntityDropItemSignal {
    readonly entity: Entity;
    readonly itemStack: ItemStack;
    readonly groundItem: GroundItem;
    constructor(entity: Entity, itemStack: ItemStack, groundItem: GroundItem);
}
