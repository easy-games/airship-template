import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { EntityService } from "../Entity/EntityService";
import { DamageService } from "./DamageService";
export declare class VoidService implements OnStart {
    private readonly entityService;
    private readonly damageService;
    constructor(entityService: EntityService, damageService: DamageService);
    OnStart(): void;
}
