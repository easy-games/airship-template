import { Player } from "../Player/Player";
import { ChatCommand } from "./ChatCommand";
export declare class ClearCommand extends ChatCommand {
    constructor();
    Execute(player: Player, args: string[]): void;
}
