import { ChatCommand } from "../../../../Shared/Commands/ChatCommand";
import { Player } from "../../../../Shared/Player/Player";
export declare class TeamCommand extends ChatCommand {
    constructor();
    Execute(player: Player, args: string[]): void;
}
