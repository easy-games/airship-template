import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { PlayerController } from "../Player/PlayerController";
import { TeamController } from "../Team/TeamController";
import { CoreUIController } from "../UI/CoreUIController";
export declare class TabListController implements OnStart {
    private readonly playerController;
    private readonly coreUIController;
    private readonly teamController;
    private tablistGO;
    private tablistCanvas;
    private tablistRefs;
    private tablistContentGO;
    private tablistEntryPrefab;
    private cellsPerRow;
    private rowCount;
    private maxSlots;
    private shown;
    private dirty;
    constructor(playerController: PlayerController, coreUIController: CoreUIController, teamController: TeamController);
    OnStart(): void;
    FullUpdate(): void;
    private UpdateEntry;
    SetTitleText(title: string): void;
    Show(): void;
    Hide(force?: boolean): void;
    IsShown(): boolean;
}
