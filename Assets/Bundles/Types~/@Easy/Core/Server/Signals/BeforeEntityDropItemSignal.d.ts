/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../../Shared/Entity/Entity";
import { ItemStack } from "../../Shared/Inventory/ItemStack";
import { Cancellable } from "../../Shared/Util/Cancellable";
export declare class BeforeEntityDropItemSignal extends Cancellable {
    readonly entity: Entity;
    readonly itemStack: ItemStack;
    velocity: Vector3;
    constructor(entity: Entity, itemStack: ItemStack, velocity: Vector3);
}
