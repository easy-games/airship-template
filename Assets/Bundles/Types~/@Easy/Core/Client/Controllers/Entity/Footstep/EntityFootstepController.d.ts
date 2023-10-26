import { OnStart } from "../../../../../node_modules/@easy-games/flamework-core";
import { EntityController } from "../EntityController";
export declare class EntityFootstepController implements OnStart {
    private readonly entityController;
    private entityLastFootstepTime;
    constructor(entityController: EntityController);
    OnStart(): void;
}
