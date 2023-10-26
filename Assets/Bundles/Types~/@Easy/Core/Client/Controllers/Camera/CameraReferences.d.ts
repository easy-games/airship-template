/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/compiler-types" />
export declare class CameraReferences {
    private static _instance;
    static Instance(): CameraReferences;
    private mouse;
    readonly mainCamera: Camera;
    readonly fpsCamera: Camera;
    readonly uiCamera: Camera;
    constructor();
    /**
     *
     * @param distance
     * @returns Will return undefined if a Voxel World doesn't exist.
     */
    RaycastVoxelFromCamera(distance: number): VoxelRaycastResult | undefined;
    RaycastPhysicsFromCamera(distance: number, layerMask?: number): LuaTuple<[hit: true, point: Vector3, normal: Vector3, collider: Collider] | [hit: false, point: undefined, normal: undefined, collider: undefined]>;
    GetRayFromCamera(distance: number): Ray;
}
