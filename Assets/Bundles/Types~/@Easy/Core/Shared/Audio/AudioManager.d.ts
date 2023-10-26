/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
export interface PlaySoundConfig {
    volumeScale?: number;
    loop?: boolean;
    pitch?: number;
    maxDistance?: number;
    rollOffMode?: AudioRolloffMode;
}
export declare class AudioManager {
    static SoundFolderPath: string;
    private static soundFolderIndex;
    private static audioSourceTemplate;
    private static globalAudioSources;
    static Init(): void;
    private static CacheAudioSources;
    static PlayGlobal(sound: string, config?: PlaySoundConfig): AudioSource | undefined;
    static PlayFullPathGlobal(fullPath: string, config?: PlaySoundConfig): AudioSource | undefined;
    static PlayClipGlobal(clip: AudioClip, config?: PlaySoundConfig): AudioSource | undefined;
    static StopGlobalAudio(): void;
    static PlayAtPosition(sound: string, position: Vector3, config?: PlaySoundConfig): AudioSource | undefined;
    static PlayFullPathAtPosition(fullPath: string, position: Vector3, config?: PlaySoundConfig): AudioSource | undefined;
    static PlayClipAtPosition(clip: AudioClip, position: Vector3, config?: PlaySoundConfig): AudioSource | undefined;
    private static GetAudioSource;
    private static FriendlyPath;
    static LoadAudioClip(sound: string): AudioClip | undefined;
    static LoadFullPathAudioClip(fullPath: string): AudioClip | undefined;
    static GetLocalPathFromFullPath(fullPath: string): string;
}
