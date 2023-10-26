import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { ChatCommand } from "../../../Shared/Commands/ChatCommand";
import { PlayerService } from "../Player/PlayerService";
export declare class ChatService implements OnStart {
    private readonly playerService;
    private commands;
    constructor(playerService: PlayerService);
    RegisterCommand(command: ChatCommand): void;
    OnStart(): void;
    GetCommands(): ChatCommand[];
}
