import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { PlayerService } from "../Player/PlayerService";
export declare class ShutdownService implements OnStart {
    private readonly playerService;
    private playerConnected;
    private timeWithNoPlayers;
    private static SHUTDOWN_TIME_NOBODY_CONNECTED;
    private static SHUTDOWN_TIME_ALL_PLAYERS_LEFT;
    constructor(playerService: PlayerService);
    OnStart(): void;
    Shutdown(): void;
}
