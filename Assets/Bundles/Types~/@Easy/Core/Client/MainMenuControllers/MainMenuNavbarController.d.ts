import { OnStart } from "../../../node_modules/@easy-games/flamework-core";
import { AuthController } from "./Auth/AuthController";
import { MainMenuController } from "./MainMenuController";
import { UserController } from "./User/UserController";
export declare class MainMenuNavbarController implements OnStart {
    private readonly mainMenuController;
    private readonly userController;
    private readonly authController;
    constructor(mainMenuController: MainMenuController, userController: UserController, authController: AuthController);
    OnStart(): void;
    Setup(): void;
    UpdateProfileSection(): void;
    private UpdateNavButton;
    private Disconnect;
}
