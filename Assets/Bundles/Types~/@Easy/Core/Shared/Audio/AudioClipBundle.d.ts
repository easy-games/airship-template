/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { PlaySoundConfig } from "./AudioManager";
export declare enum AudioBundlePlayMode {
    MANUAL = 0,
    SEQUENCE = 1,
    RANDOM = 2,
    RANDOM_NO_REPEAT = 3,
    LOOP = 4,
    RANDOM_TO_LOOP = 5
}
export declare enum AudioBundleSpacialMode {
    GLOBAL = 0,
    SPACIAL = 1
}
export declare class AudioClipBundle {
    playMode: AudioBundlePlayMode;
    spacialMode: AudioBundleSpacialMode;
    spacialPosition: Vector3;
    volumeScale: number;
    useFullPath: boolean;
    soundOptions: PlaySoundConfig;
    private clipPaths;
    private possibleRandomIndex;
    private lastIndexPlayed;
    private lastAudioSource;
    constructor(clipPaths: string[]);
    UpdatePaths(newPaths: string[]): void;
    private tweeningStop;
    Stop(fadeOutDuration?: number): void;
    PlayManual(index: number, fadeInDuration?: number): void;
    PlayNext(): void;
    private StepIndex;
    private RefreshPossibleRandomIndex;
    private GetRandomIndex;
}
