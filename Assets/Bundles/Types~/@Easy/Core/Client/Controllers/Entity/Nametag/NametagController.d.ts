import { OnStart } from "../../../../../node_modules/@easy-games/flamework-core";
import { Entity } from "../../../../Shared/Entity/Entity";
import { PlayerController } from "../../Player/PlayerController";
import { EntityController } from "../EntityController";
export declare class NametagController implements OnStart {
    private readonly playerController;
    private readonly entityController;
    private readonly nameTageId;
    private readonly graphicsBundleName;
    private showSelfNametag;
    constructor(playerController: PlayerController, entityController: EntityController);
    OnStart(): void;
    CreateNametag(entity: Entity): GameObject;
    private UpdateNametag;
}
