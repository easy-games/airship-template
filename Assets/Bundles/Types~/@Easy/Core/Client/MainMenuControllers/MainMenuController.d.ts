import { OnStart } from "../../../node_modules/@easy-games/flamework-core";
import { Signal } from "../../Shared/Util/Signal";
import { AuthController } from "./Auth/AuthController";
import { MainMenuPage } from "./MainMenuPageName";
export declare class MainMenuController implements OnStart {
    private readonly authController;
    mainMenuGo: GameObject;
    refs: GameObjectReferences;
    currentPageGo: GameObject | undefined;
    currentPage: MainMenuPage;
    OnCurrentPageChanged: Signal<[page: MainMenuPage, oldPage: MainMenuPage | undefined]>;
    private pageMap;
    private wrapperRect;
    mainContentCanvas: Canvas;
    private rootCanvasGroup;
    socialMenuCanvas: Canvas;
    private open;
    constructor(authController: AuthController);
    OpenFromGame(): void;
    CloseFromGame(): void;
    IsOpen(): boolean;
    OnStart(): void;
    RouteToPage(page: MainMenuPage, force?: boolean, noTween?: boolean): void;
}
