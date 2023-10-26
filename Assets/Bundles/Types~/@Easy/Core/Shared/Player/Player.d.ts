import { CharacterEntity } from "../Entity/Character/CharacterEntity";
import { Team } from "../Team/Team";
import { Bin } from "../Util/Bin";
import { Signal } from "../Util/Signal";
export interface PlayerDto {
    nobId: number;
    clientId: number;
    userId: string;
    username: string;
    usernameTag: string;
    teamId: string | undefined;
}
export declare class Player {
    /**
     * The GameObject representing the player.
     */
    readonly nob: NetworkObject;
    /**
     * Unique network ID for the player in the given server. This ID
     * is typically given to network requests as a way to identify the
     * player to/from the server.
     *
     * This is not a unique identifier for the player outside of the
     * server. For a completely unique ID, use `BWPlayer.clientId`
     * instead.
     */
    readonly clientId: number;
    /**
     * The player's unique ID. This is unique and unchanging per player.
     *
     * This should _not_ be used in network requests to identify the
     * player. Use `clientId` for network requests.
     */
    userId: string;
    /**
     * The player's username. Non-unique, unless combined with `usernameTag`.
     */
    username: string;
    /**
     * The player's username tag. Append this value onto `username` for a
     * unique username.
     * ```ts
     * const uniqueName = `${player.username}#${player.usernameTag}`;
     * ```
     */
    usernameTag: string;
    /**
     * The player controls this entity.
     */
    Character: CharacterEntity | undefined;
    /** Fired when the player's character changes. */
    readonly CharacterChanged: Signal<CharacterEntity | undefined>;
    /**
     * Fired when the player disconnects from the server.
     * Connections will automatically be disconnected when the player leaves.
     */
    readonly OnLeave: Signal<void>;
    private team;
    readonly OnChangeTeam: Signal<[team: Team | undefined, oldTeam: Team | undefined]>;
    OnUsernameChanged: Signal<[username: string, tag: string]>;
    private bin;
    private connected;
    constructor(
    /**
     * The GameObject representing the player.
     */
    nob: NetworkObject, 
    /**
     * Unique network ID for the player in the given server. This ID
     * is typically given to network requests as a way to identify the
     * player to/from the server.
     *
     * This is not a unique identifier for the player outside of the
     * server. For a completely unique ID, use `BWPlayer.clientId`
     * instead.
     */
    clientId: number, 
    /**
     * The player's unique ID. This is unique and unchanging per player.
     *
     * This should _not_ be used in network requests to identify the
     * player. Use `clientId` for network requests.
     */
    userId: string, 
    /**
     * The player's username. Non-unique, unless combined with `usernameTag`.
     */
    username: string, 
    /**
     * The player's username tag. Append this value onto `username` for a
     * unique username.
     * ```ts
     * const uniqueName = `${player.username}#${player.usernameTag}`;
     * ```
     */
    usernameTag: string);
    SetTeam(team: Team): void;
    GetTeam(): Team | undefined;
    UpdateUsername(username: string, tag: string): void;
    SendMessage(message: string): void;
    /** Is player friends with the local player? */
    IsFriend(): boolean;
    IsBot(): boolean;
    Encode(): PlayerDto;
    SetCharacter(entity: CharacterEntity | undefined): void;
    ObserveCharacter(observer: (entity: CharacterEntity | undefined) => CleanupFunc): Bin;
    /**
     * Is the player connected to the server?
     */
    IsConnected(): boolean;
    Destroy(): void;
    static FindByClientId(clientId: number): Player | undefined;
}
