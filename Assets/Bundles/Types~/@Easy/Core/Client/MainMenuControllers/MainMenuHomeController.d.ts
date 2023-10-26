import { OnStart } from "../../../node_modules/@easy-games/flamework-core";
import { MainMenuController } from "./MainMenuController";
export declare class MainMenuHomeController implements OnStart {
    private readonly mainMenuController;
    gameCoordinatorUrl: string;
    private errorMessageText;
    private errorMessageWrapper;
    private errorCloseButton;
    private createServerButton;
    private createLobbyButton;
    private localBundlesToggle;
    constructor(mainMenuController: MainMenuController);
    OnStart(): void;
    Setup(): void;
    ConnectToWithCode(code: string): void;
    private SetButtonLoadingState;
    private UpdateCrossSceneState;
    SetError(errorMessage: string): void;
    CloseError(): void;
}
