import { CharacterEntity } from "../../Entity/Character/CharacterEntity";
import { HeldItemManager } from "./HeldItemManager";
export declare class EntityItemManager {
    private static instance;
    static Get(): EntityItemManager;
    private entityItems;
    private localEntity?;
    private mouseIsDownLeft;
    private mouseIsDownRight;
    private Log;
    constructor();
    private InitializeClient;
    private InitializeServer;
    GetOrCreateItemManager(entity: CharacterEntity): HeldItemManager;
    private DestroyItemManager;
}
