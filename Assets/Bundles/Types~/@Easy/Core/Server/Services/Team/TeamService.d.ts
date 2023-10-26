import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Team } from "../../../Shared/Team/Team";
export declare class TeamService implements OnStart {
    private teams;
    OnStart(): void;
    RegisterTeam(team: Team): void;
    /**
     * Deletes provided team.
     * @param team A team.
     */
    RemoveTeam(team: Team): void;
    /**
     * Fetch all teams.
     * @returns All teams.
     */
    GetTeams(): Team[];
    /**
     * Fetch a team by name.
     * @param teamName A team name.
     * @returns Team that corresponds to name, if it exists.
     */
    GetTeamByName(teamName: string): Team | undefined;
    /**
     * Fetch a team by id.
     * @param teamId A team id.
     * @returns Team that corresponds to id, if it exists.
     */
    GetTeamById(teamId: string): Team | undefined;
}
