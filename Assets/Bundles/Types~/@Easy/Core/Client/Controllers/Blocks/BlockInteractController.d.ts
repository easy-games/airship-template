/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../../../Shared/Entity/Entity";
import { BreakBlockMeta } from "../../../Shared/Item/ItemMeta";
import { BlockHealthController } from "../BlockInteractions/BlockHealthController";
import { LocalEntityController } from "../Character/LocalEntityController";
export declare class BlockInteractController {
    private readonly blockHealth;
    private readonly localEntity;
    constructor(blockHealth: BlockHealthController, localEntity: LocalEntityController);
    PerformBlockHit(entity: Entity, breakBlock: BreakBlockMeta | undefined, voxelPos: Vector3, showHealthbars: boolean): void;
}
