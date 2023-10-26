/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../Entity/Entity";
import { ItemMeta } from "../Item/ItemMeta";
import { ItemType } from "../Item/ItemType";
export declare class BlockPlaceSignal {
    readonly pos: Vector3;
    readonly itemType: ItemType;
    readonly voxel: number;
    /** Will always be undefined on client. */
    readonly entity?: Entity | undefined;
    readonly itemMeta: ItemMeta;
    constructor(pos: Vector3, itemType: ItemType, voxel: number, 
    /** Will always be undefined on client. */
    entity?: Entity | undefined);
}
export declare class BlockGroupPlaceSignal {
    readonly positions: Vector3[];
    readonly itemTypes: ItemType[];
    readonly voxel: number[];
    /** Will always be undefined on client. */
    readonly entity?: Entity | undefined;
    constructor(positions: Vector3[], itemTypes: ItemType[], voxel: number[], 
    /** Will always be undefined on client. */
    entity?: Entity | undefined);
}
