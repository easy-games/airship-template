/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../Entity/Entity";
import { BreakBlockMeta } from "../Item/ItemMeta";
import { Signal } from "../Util/Signal";
import { Block } from "./Block";
import { BlockHitDamageSignal } from "./Signal/BlockHitDamageSignal";
import { World } from "./World";
export declare class WorldAPI {
    private static world;
    static DefaultVoxelHealth: number;
    static ChildVoxelId: number;
    static OnBlockHitDamageCalc: Signal<BlockHitDamageSignal>;
    static GetMainWorld(): World | undefined;
    static GetVoxelPosition(worldPosition: Vector3): Vector3;
    static CalculateBlockHitDamageFromBreakBlockMeta(entity: Entity | undefined, block: Block, blockPos: Vector3, breakBlockMeta: BreakBlockMeta): number;
    static CalculateBlockHitDamage(entity: Entity | undefined, block: Block, blockPos: Vector3, damage: number): number;
}
