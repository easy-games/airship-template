import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Signal } from "../../../Shared/Util/Signal";
import { AuthController } from "../Auth/AuthController";
import { User } from "./User";
export declare class UserController implements OnStart {
    private readonly authController;
    localUser: User | undefined;
    onLocalUserUpdated: Signal<User>;
    constructor(authController: AuthController);
    OnStart(): void;
    FetchLocalUser(): void;
}
