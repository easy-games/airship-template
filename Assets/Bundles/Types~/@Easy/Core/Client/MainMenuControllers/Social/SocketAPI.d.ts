import { PublicUser } from "../../../Shared/SocketIOMessages/PublicUser";
export interface GameServer {
    serverId: string;
    ip: string;
    port: number;
}
export declare enum PartyStatus {
    IN_GAME = "in_game",
    QUEUED = "queued",
    IDLE = "idle"
}
export declare enum PartyMode {
    /** Invite only */
    CLOSED = "closed",
    /** Open to all */
    OPEN = "open",
    /** Friends can join */
    FRIENDS_ONLY = "friends_only"
}
interface BaseStateData<T extends PartyStatus> {
    status: T;
}
type PartyIdleStateData = BaseStateData<PartyStatus.IDLE>;
interface PartyQueuedStateData extends BaseStateData<PartyStatus.QUEUED> {
    queue: string;
    regions: string[];
    startTime: number;
    ticketId: string;
}
interface PartyInGameStateData extends BaseStateData<PartyStatus.IN_GAME> {
    queue: string;
    matchId: string;
    startTime: number;
    gameServer: GameServer;
}
export type PartyStateData = PartyIdleStateData | PartyQueuedStateData | PartyInGameStateData;
/** Party data should be immutable, use the party service to modify it */
export type Party = {
    /** Party leader uid */
    leader: string;
    partyId: string;
    /** Members includes the leader */
    members: PublicUser[];
    invited: string[];
    data: PartyStateData;
    mode: PartyMode;
    lastUpdated: number;
};
export type FriendStatus = {
    status: "offline" | "online" | "in_game";
    userId: string;
    username: string;
    discriminator: string;
    discriminatedUsername: string;
    metadata?: {
        statusText: string;
    };
    game?: string;
};
export {};
