import { CameraTransform } from "./CameraTransform";
/**
 * Represents a camera mode that can attached to the camera system.
 */
export interface CameraMode {
    /** Called when the camera mode starts. */
    OnStart(camera: Camera): void;
    /** Called when the camera mode stops. */
    OnStop(): void;
    /** Called every frame. Useful for control logic. */
    OnUpdate(deltaTime: number): void;
    /** Called every frame. Use this method for constructing the `CameraTransform`. */
    OnLateUpdate(deltaTime: number): CameraTransform;
    OnPostUpdate(camera: Camera): void;
}
declare const _default: {};
export default _default;
