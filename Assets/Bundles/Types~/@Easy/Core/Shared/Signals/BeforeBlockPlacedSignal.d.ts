/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../Entity/Entity";
import { ItemType } from "../Item/ItemType";
import { Cancellable } from "../Util/Cancellable";
export declare class BeforeBlockPlacedSignal extends Cancellable {
    readonly pos: Vector3;
    readonly itemType: ItemType;
    readonly voxel: number;
    /** Will always be undefined on client. */
    readonly entity?: Entity | undefined;
    constructor(pos: Vector3, itemType: ItemType, voxel: number, 
    /** Will always be undefined on client. */
    entity?: Entity | undefined);
}
