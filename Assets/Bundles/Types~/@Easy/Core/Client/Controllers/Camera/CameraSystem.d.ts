import { Signal } from "../../../Shared/Util/Signal";
import { CameraMode } from "./CameraMode";
import { CameraModeTransition } from "./CameraModeTransition";
/**
 * Drives the camera modes.
 */
export declare class CameraSystem {
    private currentMode;
    private readonly transform;
    private readonly camera;
    private readonly allCameras;
    private onClearCallback?;
    private modeCleared;
    private readonly fovSpring;
    private fovSpringMoving;
    private fovSpringMovingStart;
    readonly ModeChangedBegin: Signal<[newMode: CameraMode, oldMode: CameraMode]>;
    readonly ModeChangedEnd: Signal<[newMode: CameraMode, oldMode: CameraMode]>;
    GetActiveCamera(): Camera;
    constructor();
    /**
     * Gets a reference to the current camera mode object.
     * @returns Camera mode.
     */
    GetMode(): CameraMode;
    /**
     * Set the current camera mode. If `transition` is provided, then the new
     * mode will be interpolated from the old mode based on the configuration
     * provided within `transition`. Otherwise, the camera will snap immediately
     * to the new mode.
     *
     * @param mode New mode.
     * @param transition Optional transition configuration.
     */
    SetMode(mode: CameraMode, transition?: CameraModeTransition): void;
    /**
     * Sets the camera to a static view.
     *
     * @param transition Optional transition configuration.
     */
    ClearMode(transition?: CameraModeTransition): void;
    /**
     * Sets a callback function that is called when the camera mode is cleared. This
     * is useful for defaulting the camera system to a specific camera mode. Only
     * one callback can be set.
     *
     * Leaving out the `onClearCallback` parameter will clear the callback.
     *
     * @param onClearCallback Callback.
     */
    SetOnClearCallback(onClearCallback?: () => CameraMode): void;
    /**
     * Set the camera's field-of-view.
     * @param fieldOfView Field of view.
     * @param immediate If `true`, goes directly to the FOV without springing towards it.
     */
    SetFOV(fieldOfView: number, immediate?: boolean): void;
    private UpdateFOVSpring;
    private UpdateFOV;
}
