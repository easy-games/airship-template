/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../../Shared/Entity/Entity";
import { Block } from "../../Shared/VoxelWorld/Block";
export declare class BlockPlaceClientSignal {
    readonly pos: Vector3;
    readonly block: Block;
    readonly placer: Entity | undefined;
    readonly isGroupEvent: boolean;
    constructor(pos: Vector3, block: Block, placer: Entity | undefined, isGroupEvent: boolean);
}
