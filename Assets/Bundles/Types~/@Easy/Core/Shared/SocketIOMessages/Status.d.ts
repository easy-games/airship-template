export declare enum UserStatus {
    OFFLINE = "offline",
    ONLINE = "online",
    IN_GAME = "in_game"
}
interface BaseUserData {
    userId: string;
    username: string;
    discriminator: string;
    discriminatedUsername: string;
}
interface BaseUserStatus<S extends UserStatus> extends BaseUserData {
    status: S;
    metadata?: any;
}
type UserOfflineStatus = BaseUserStatus<UserStatus.OFFLINE>;
type UserOnlineStatus = BaseUserStatus<UserStatus.ONLINE>;
interface UserInGameStatus extends BaseUserStatus<UserStatus.IN_GAME> {
    game: string;
}
export type UserStatusData = UserOfflineStatus | UserOnlineStatus | UserInGameStatus;
export {};
