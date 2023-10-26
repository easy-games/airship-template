/// <reference types="@easy-games/compiler-types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
export declare class ClientSettingsController implements OnStart {
    private data;
    private unsavedChanges;
    private settingsLoaded;
    private onSettingsLoaded;
    constructor();
    OnStart(): void;
    WaitForSettingsLoaded(): Promise<void>;
    SaveSettings(): void;
    GetMouseSensitivity(): number;
    SetMouseSensitivity(value: number): void;
    GetTouchSensitivity(): number;
    SetTouchSensitivity(value: number): void;
    GetAmbientVolume(): number;
    SetAmbientVolume(val: number): void;
    GetMusicVolume(): number;
    SetMusicVolume(val: number): void;
    SetGlobalVolume(volume: number): void;
    SetScreenshotShowUI(showUI: boolean): void;
    SetScreenshotRenderHD(renderHd: boolean): void;
    GetGlobalVolume(): number;
    GetFirstPersonFov(): number;
    GetThirdPersonFov(): number;
    GetScreenshotShowUI(): boolean;
    GetScreenshotRenderHD(): boolean;
}
