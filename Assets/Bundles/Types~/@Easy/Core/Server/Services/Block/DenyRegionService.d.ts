/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
export declare class DenyRegionService implements OnStart {
    /** Sequential deny region id counter. */
    private denyRegionIdCounter;
    /** Tracked deny regions for recreation on client. */
    private trackedDenyRegions;
    /** Deny voxel positions. */
    private denyVoxelPositions;
    OnStart(): void;
    /**
     * Creates a deny region at `origin` of size `size`.
     * @param origin The deny region origin.
     * @param size The deny region size.
     */
    CreateDenyRegion(origin: Vector3, size: Vector3): void;
    /**
     * Checks whether or not `position` is inside of a deny region.
     * @param position A voxel position.
     * @returns Whether or not `position` is inside of a deny region.
     */
    InDenyRegion(position: Vector3): boolean;
}
