import { ItemMeta } from "../Item/ItemMeta";
import { ItemType } from "../Item/ItemType";
import { World } from "./World";
export declare class Block {
    readonly voxel: number;
    readonly world: World;
    readonly blockId: number;
    readonly itemType: ItemType | undefined;
    readonly itemMeta: ItemMeta | undefined;
    constructor(voxel: number, world: World);
    IsAir(): boolean;
    GetBlockDefinition(): BlockDefinition;
    GetAverageColor(): Color;
}
