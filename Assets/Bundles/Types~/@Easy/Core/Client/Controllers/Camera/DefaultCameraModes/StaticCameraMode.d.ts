/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { CameraMode } from "../CameraMode";
import { CameraTransform } from "../CameraTransform";
export declare class StaticCameraMode implements CameraMode {
    private transform;
    constructor(position: Vector3, rotation: Quaternion);
    OnStart(): void;
    OnStop(): void;
    OnUpdate(dt: number): void;
    OnPostUpdate(): void;
    OnLateUpdate(): CameraTransform;
}
