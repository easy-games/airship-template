import { Entity } from "../../Entity/Entity";
import { CharacterEntity } from "../../Entity/Character/CharacterEntity";
import { ItemMeta } from "../ItemMeta";
import { HeldItem } from "./HeldItem";
import { HeldItemState } from "./HeldItemState";
export type HeldItemCondition = (itemMeta: ItemMeta) => boolean;
export type HeldItemFactory = (entity: Entity, itemMeta: ItemMeta) => HeldItem;
export type HeldItemEntry = {
    condition: HeldItemCondition;
    factory: HeldItemFactory;
};
export declare class HeldItemManager {
    private entity;
    private heldItemMap;
    private emptyHeldItem;
    private currentHeldItem;
    private currentItemState;
    private static heldItemClasses;
    static RegisterHeldItem(condition: HeldItemCondition, factory: HeldItemFactory): void;
    GetLabel(): number;
    private Log;
    private GetOrCreateHeldItem;
    constructor(entity: CharacterEntity);
    TriggerNewState(itemState: HeldItemState): void;
    OnNewState(itemState: HeldItemState): void;
}
