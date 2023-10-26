import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { EntityService } from "../Entity/EntityService";
export declare class HealthRegenService implements OnStart {
    private readonly entityService;
    constructor(entityService: EntityService);
    OnStart(): void;
}
