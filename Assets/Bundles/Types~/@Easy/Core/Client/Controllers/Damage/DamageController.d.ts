import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { EntityController } from "../Entity/EntityController";
export declare class DamageController implements OnStart {
    private readonly entityController;
    constructor(entityController: EntityController);
    OnStart(): void;
}
