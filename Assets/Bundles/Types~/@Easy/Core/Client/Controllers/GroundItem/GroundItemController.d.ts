import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { EntityAccessoryController } from "../Accessory/EntityAccessoryController";
import { PlayerController } from "../Player/PlayerController";
export declare class GroundItemController implements OnStart {
    private readonly playerController;
    private readonly entityAccessoryController;
    private groundItemPrefab;
    private fallbackDisplayObj;
    private groundItems;
    private itemTypeToDisplayObjMap;
    private groundItemsFolder;
    constructor(playerController: PlayerController, entityAccessoryController: EntityAccessoryController);
    private CreateDisplayGO;
    OnStart(): void;
}
