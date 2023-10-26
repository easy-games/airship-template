/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../../../../Shared/Entity/Entity";
import { Player } from "../../../../Shared/Player/Player";
import { Block } from "../../../../Shared/VoxelWorld/Block";
export declare class BeforeBlockHitSignal {
    readonly block: Block;
    readonly blockPos: Vector3;
    readonly entity: Entity | undefined;
    /**
     * To modify the damage you must edit BlockHitDamageCalc()
     */
    readonly damage: number;
    readonly isGroupEvent: boolean;
    constructor(block: Block, blockPos: Vector3, entity: Entity | undefined, 
    /**
     * To modify the damage you must edit BlockHitDamageCalc()
     */
    damage: number, isGroupEvent: boolean);
}
export declare class BeforeBlockGroupHitSignal {
    readonly blocks: Block[];
    readonly blockPositions: Vector3[];
    readonly player: Player;
    /**
     * To modify the damage you must edit BlockHitDamageCalc()
     */
    readonly damage: number;
    constructor(blocks: Block[], blockPositions: Vector3[], player: Player, 
    /**
     * To modify the damage you must edit BlockHitDamageCalc()
     */
    damage: number);
}
