/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
export declare class DenyRegionController implements OnStart {
    /** Set of processed deny region ids. */
    private processedDenyRegionIds;
    /** Deny voxel positions. */
    private denyVoxelPositions;
    OnStart(): void;
    /** Creates a deny region from an incoming Dto. */
    private CreateDenyRegionFromDto;
    /**
     * Checks whether or not `position` is inside of a deny region.
     * @param position A voxel position.
     * @returns Whether or not `position` is inside of a deny region.
     */
    InDenyRegion(position: Vector3): boolean;
}
