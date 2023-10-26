/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../../Entity/Entity";
import { BreakBlockMeta } from "../../Item/ItemMeta";
import { Block } from "../Block";
export declare class BlockHitDamageSignal {
    damage: number;
    readonly entity: Entity | undefined;
    readonly block: Block;
    readonly blockPos: Vector3;
    readonly breakBlockMeta: BreakBlockMeta | undefined;
    constructor(damage: number, entity: Entity | undefined, block: Block, blockPos: Vector3, breakBlockMeta: BreakBlockMeta | undefined);
}
