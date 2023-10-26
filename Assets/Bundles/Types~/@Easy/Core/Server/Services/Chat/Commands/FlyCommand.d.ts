import { ChatCommand } from "../../../../Shared/Commands/ChatCommand";
import { Player } from "../../../../Shared/Player/Player";
export declare class FlyCommand extends ChatCommand {
    constructor();
    Execute(player: Player, args: string[]): void;
}
