import { Signal } from "./Util/Signal";
import { UserStatus } from "./SocketIOMessages/Status";
export declare const CoreSignals: {
    CoreInitialized: Signal<{
        idToken: string;
    }>;
    UserServiceInitialized: Signal<{}>;
    GameCoordinatorMessage: Signal<{
        messageName: string;
        jsonMessage: string;
    }>;
    StatusUpdateRequested: Signal<{}>;
    FriendRequested: Signal<{
        initiatorId: string;
    }>;
    FriendAccepted: Signal<{
        targetId: string;
    }>;
    FriendUserStatusChanged: Signal<{
        friendUid: string;
        status: UserStatus;
        gameName: string | undefined;
    }>;
    PartyInviteReceived: Signal<{}>;
    PartyUpdated: Signal<{}>;
};
