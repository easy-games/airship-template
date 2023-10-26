/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../../Shared/Entity/Entity";
export declare class AfterBlockHitClientSignal {
    readonly pos: Vector3;
    readonly blockId: number;
    readonly entity: Entity | undefined;
    readonly broken: boolean;
    constructor(pos: Vector3, blockId: number, entity: Entity | undefined, broken: boolean);
}
