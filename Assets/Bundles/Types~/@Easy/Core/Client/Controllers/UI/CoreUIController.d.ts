import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
export declare class CoreUIController implements OnStart {
    readonly coreUIGO: GameObject;
    readonly refs: GameObjectReferences;
    constructor();
    OnStart(): void;
}
