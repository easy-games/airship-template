import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { CameraMode, CameraModeTransition } from ".";
import { CameraSystem } from "./CameraSystem";
export declare class CameraController implements OnStart {
    static readonly CameraReferenceKey: string;
    /** The underlying camera system for the game. */
    readonly cameraSystem: CameraSystem;
    constructor();
    /**
     * Proxy for `cameraSystem.SetMode()`.
     *
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
     * Proxy for `cameraSystem.ClearMode()`.
     *
     * Sets the camera to a static view.
     *
     * @param transition Optional transition configuration.
     */
    ClearMode(transition?: CameraModeTransition): void;
    /**
     * Proxy for `cameraSystem.SetFOV()`.
     *
     * Set the camera's field-of-view.
     * @param fieldOfView Field of view.
     * @param immediate If `true`, goes directly to the FOV without springing towards it.
     */
    SetFOV(fieldOfView: number, immediate?: boolean): void;
    OnStart(): void;
}
