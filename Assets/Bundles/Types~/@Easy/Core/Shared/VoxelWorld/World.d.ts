/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/compiler-types" />
import { ItemType } from "../Item/ItemType";
import { Signal } from "../Util/Signal";
import { BlockMeta } from "../Item/ItemMeta";
import { Block } from "./Block";
export interface PlaceBlockConfig {
    placedByEntityId?: number;
    /** True if should update collisions instantly.
     *
     * Defaults to true. */
    priority?: boolean;
    blockData?: {
        [key: string]: unknown;
    };
}
export declare class World {
    readonly voxelWorld: VoxelWorld;
    static SKYBOX: string;
    OnVoxelPlaced: Signal<[pos: Vector3, voxel: number]>;
    OnFinishedLoading: Signal<void>;
    OnFinishedReplicatingChunksFromServer: Signal<void>;
    private finishedLoading;
    private finishedReplicatingChunksFromServer;
    constructor(voxelWorld: VoxelWorld);
    IsFinishedLoading(): boolean;
    WaitForFinishedLoading(): Promise<void>;
    IsFinishedReplicatingChunksFromServer(): boolean;
    WaitForFinishedReplicatingChunksFromServer(): Promise<void>;
    /**
     *
     * @param pos
     * @returns Raw voxel data.
     * @deprecated Use `GetVoxelAt()` instead.
     */
    GetRawVoxelDataAt(pos: Vector3): number;
    /**
     * A more convenient version of ReadVoxelAt.
     * @param pos
     * @returns VoxelBlock at position.
     */
    GetBlockAt(pos: Vector3): Block;
    /**
     * A way to find block data below a target. Used to know what a character is standing on
     * @param pos
     * @returns BlockMeta under the position.
     */
    GetBlockBelowMeta(pos: Vector3): BlockMeta | undefined;
    RaycastBlockBelow(startPos: Vector3, maxDistance?: number): BlockMeta | undefined;
    PlaceBlock(pos: Vector3, itemType: ItemType, config?: PlaceBlockConfig): void;
    PlaceBlockById(pos: Vector3, blockId: number, config?: PlaceBlockConfig): void;
    PlaceBlockGroupById(positions: Vector3[], blockIds: number[], config?: PlaceBlockConfig): void;
    LoadWorldFromVoxelBinaryFile(binaryFile: VoxelBinaryFile): void;
    LoadEmptyWorld(cubeMapPath: string): void;
    RaycastVoxel(pos: Vector3, direction: Vector3, maxDistance: number): VoxelRaycastResult;
    GetBlockDefinition(blockId: number): BlockDefinition | undefined;
    GetBlockAverageColor(blockId: number): Color | undefined;
}
