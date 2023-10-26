import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Team } from "../../../Shared/Team/Team";
import { PlayerController } from "../Player/PlayerController";
export declare class TeamController implements OnStart {
    private readonly playerController;
    private teams;
    constructor(playerController: PlayerController);
    OnStart(): void;
    GetTeam(teamId: string): Team | undefined;
    GetTeams(): Team[];
}
