import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { MainMenuController } from "../MainMenuController";
import { SocketController } from "../Socket/SocketController";
export declare class MainMenuPartyController implements OnStart {
    private readonly mainMenuController;
    private readonly socketController;
    private party;
    private partyMemberPrefab;
    constructor(mainMenuController: MainMenuController, socketController: SocketController);
    OnStart(): void;
    private Setup;
    private UpdateParty;
}
