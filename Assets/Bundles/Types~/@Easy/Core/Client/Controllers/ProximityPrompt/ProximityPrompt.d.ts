/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../../../Shared/Util/Signal";
export interface ProximityPromptData {
    /** Proximity prompt position. */
    promptPosition: Vector3;
    /** Key that activates proximity prompt. */
    activationKey: KeyCode;
    /** Activation key string that displays on prompt. */
    activationKeyString: string;
    /** How close local player must be to activate proximity prompt. */
    activationRange: number;
    /** Proximity prompt top text. */
    topText: string;
    /** Proximity prompt bottom text. */
    bottomText: string;
}
/** Proximity Prompt. */
export declare class ProximityPrompt {
    /** Global, incrementing id counter. */
    static idCounter: number;
    /** Proximity prompt prefab. */
    private promptPrefab;
    /** Proximity prompt id. */
    id: string;
    /** Proximity prompt data. */
    data: ProximityPromptData;
    /** Proximity prompt gameobject. */
    promptGameObject: GameObject | undefined;
    /** On activated signal. */
    OnActivated: Signal<void>;
    /** On activated signal. */
    OnRequestActivated: Signal<void>;
    private canActivate;
    private readonly canActivateBin;
    constructor(promptData: ProximityPromptData);
    /** Creates prompt from prompt data. */
    private CreatePrompt;
    SetCanActivate(canActivate: boolean): void;
    /** Called when prompt activates. */
    ActivatePrompt(): void;
}
