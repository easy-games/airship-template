/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Player } from "../../../Shared/Player/Player";
import { Signal, SignalPriority } from "../../../Shared/Util/Signal";
export declare class PlayerService implements OnStart {
    /** Fires when a player first connects to the server. */
    readonly PlayerPreReady: Signal<[player: Player]>;
    readonly PlayerAdded: Signal<[player: Player]>;
    /** Fires when a player is removed from the game. */
    readonly PlayerRemoved: Signal<[player: Player]>;
    private playerManager;
    private readonly players;
    private playersPendingReady;
    private botCounter;
    constructor();
    HandlePlayerReady(player: Player): void;
    AddBotPlayer(): void;
    /** Get all players. */
    GetPlayers(): Readonly<Array<Player>>;
    /** Attempt to retrieve a player by `clientId`. */
    GetPlayerFromClientId(clientId: number): Player | undefined;
    /** Attempt to retrieve a player by username. */
    GetPlayerFromUsername(name: string): Player | undefined;
    /**
     * Observe every player entering/leaving the game. The returned function can be
     * called to stop observing.
     *
     * The `observer` function is fired for every player currently in the game and
     * every future player that joins. The `observer` function must return another
     * function which is called when said player leaves (_or_ the top-level observer
     * function was called to stop the observation process).
     *
     * ```ts
     * playersService.ObservePlayers((player) => {
     * 	print(`${player.name} entered`);
     * 	return () => {
     * 		print(`${player.name} left`);
     * 	};
     * });
     * ```
     */
    ObservePlayers(observer: (player: Player) => (() => void) | void, signalPriority?: SignalPriority): () => void;
    OnStart(): void;
}
