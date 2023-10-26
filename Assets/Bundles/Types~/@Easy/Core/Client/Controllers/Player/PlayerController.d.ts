import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Player } from "../../../Shared/Player/Player";
export declare class PlayerController implements OnStart {
    readonly LocalConnection: NetworkConnection;
    private players;
    constructor();
    OnStart(): void;
    GetPlayerFromClientId(clientId: number): Player | undefined;
    GetPlayerFromUserId(userId: string): Player | undefined;
    GetPlayerFromUsername(name: string): Player | undefined;
    private AddPlayer;
    GetPlayers(): Player[];
}
