/// <reference types="@easy-games/compiler-types" />
import { Player } from "../Player/Player";
import { Signal } from "../Util/Signal";
export interface TeamDto {
    name: string;
    id: string;
    userIds: string[];
    color: [r: number, g: number, b: number, a: number];
}
export declare class Team {
    readonly name: string;
    readonly id: string;
    readonly color: Color;
    private players;
    readonly onPlayerAdded: Signal<Player>;
    readonly onPlayerRemoved: Signal<Player>;
    constructor(name: string, id: string, color: Color);
    GetPlayers(): Set<Player>;
    AddPlayer(player: Player): void;
    RemovePlayer(player: Player): void;
    Encode(): TeamDto;
    HasLocalPlayer(): boolean;
    SendMessage(message: string): void;
}
