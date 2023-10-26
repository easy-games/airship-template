import { CameraMode } from "../CameraMode";
import { CameraTransform } from "../CameraTransform";
export declare class FlyCameraMode implements CameraMode {
    private bin;
    private xRot;
    private yRot;
    private positionSpring;
    private xRotSpring;
    private yRotVelSpring;
    private fovSpring;
    private camera;
    private originalFov;
    private currentFov;
    private keyboard;
    private mouse;
    private readonly keysDown;
    private readonly clientSettingsController;
    OnStart(camera: Camera): void;
    OnStop(): void;
    OnUpdate(dt: number): void;
    OnPostUpdate(): void;
    OnLateUpdate(dt: number): CameraTransform;
    private CalculateDirection;
}
