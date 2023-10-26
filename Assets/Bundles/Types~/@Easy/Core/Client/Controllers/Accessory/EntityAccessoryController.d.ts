import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { LocalEntityController } from "../Character/LocalEntityController";
export declare class EntityAccessoryController implements OnStart {
    private readonly localController;
    private isFirstPerson;
    constructor(localController: LocalEntityController);
    private AutoEquipArmor;
    OnStart(): void;
    private SetFirstPersonLayer;
}
