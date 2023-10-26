import { EntityReferences } from "../../../Shared/Entity/Entity";
import { CameraReferences } from "./CameraReferences";
export declare class FirstPersonCameraSystem {
    cameras: CameraReferences;
    private manualSpineOffset;
    private entityReferences;
    private cameraVars;
    private trackedHeadRotation;
    private inFirstPerson;
    private bin;
    constructor(entityReferences: EntityReferences, startInFirstPerson: boolean);
    Destroy(): void;
    private LateUpdate;
    OnFirstPersonChanged(isFirstPerson: boolean): void;
}
