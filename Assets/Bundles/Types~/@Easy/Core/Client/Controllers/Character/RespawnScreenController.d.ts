import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { EntityDeathClientSignal } from "../../Signals/EntityDeathClientSignal";
export declare class RespawnScreenController implements OnStart {
    private respawnBin;
    OnStart(): void;
    ShowRespawnScreen(deathSignal: EntityDeathClientSignal): void;
    HideRespawnScreen(): void;
}
