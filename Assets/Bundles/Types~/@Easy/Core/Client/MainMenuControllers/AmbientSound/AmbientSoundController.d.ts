import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { ClientSettingsController } from "../Settings/ClientSettingsController";
export declare class AmbientSoundController implements OnStart {
    private clientSettingsController;
    ambientSource: AudioSource;
    musicSource: AudioSource;
    constructor(clientSettingsController: ClientSettingsController);
    OnStart(): void;
    SetAmbientVolume(val: number): void;
    SetMusicVolume(val: number): void;
}
