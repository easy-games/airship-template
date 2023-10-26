import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { RightClickMenuController } from "../UI/RightClickMenu/RightClickMenuController";
import { Signal } from "../../../Shared/Util/Signal";
import { AuthController } from "../Auth/AuthController";
import { MainMenuController } from "../MainMenuController";
import { SocketController } from "../Socket/SocketController";
import { User } from "../User/User";
import { FriendStatus } from "./SocketAPI";
export declare class FriendsController implements OnStart {
    private readonly authController;
    private readonly socketController;
    private readonly mainMenuController;
    private readonly rightClickMenuController;
    friends: User[];
    incomingFriendRequests: User[];
    outgoingFriendRequests: User[];
    friendStatuses: FriendStatus[];
    private renderedFriendUids;
    private statusText;
    private friendBinMap;
    friendStatusChanged: Signal<FriendStatus>;
    constructor(authController: AuthController, socketController: SocketController, mainMenuController: MainMenuController, rightClickMenuController: RightClickMenuController);
    OnStart(): void;
    Setup(): void;
    FuzzySearchFriend(name: string): User | undefined;
    GetFriendByUsername(username: string): User | undefined;
    SetStatusText(text: string): void;
    GetStatusText(): string;
    SendStatusUpdate(): void;
    FetchFriends(): void;
    GetFriendGo(uid: string): GameObject | undefined;
    UpdateFriendsList(): void;
    GetFriendStatus(uid: string): FriendStatus | undefined;
    UpdateFriendStatusUI(friend: FriendStatus, refs: GameObjectReferences, config: {
        loadImage: boolean;
        includeTag?: boolean;
    }): void;
}
