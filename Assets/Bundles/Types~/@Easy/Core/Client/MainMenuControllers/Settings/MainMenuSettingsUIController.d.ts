import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { ClientSettingsController } from "./ClientSettingsController";
import { MainMenuController } from "../MainMenuController";
export declare class MainMenuSettingsUIController implements OnStart {
    private readonly clientSettingsController;
    private readonly mainMenuController;
    constructor(clientSettingsController: ClientSettingsController, mainMenuController: MainMenuController);
    OnStart(): void;
    Setup(): void;
    private SetupSlider;
    private SetupToggle;
    private PlaySelectSound;
}
