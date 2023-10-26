import { Player } from "../Player/Player";
export declare abstract class ChatCommand {
    commandLabel: string;
    aliases: string[];
    usage: string;
    description: string;
    constructor(commandLabel: string, aliases?: string[], usage?: string, description?: string);
    abstract Execute(player: Player, args: string[]): void;
}
