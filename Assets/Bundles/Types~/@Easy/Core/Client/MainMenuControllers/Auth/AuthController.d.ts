/// <reference types="@easy-games/compiler-types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Signal } from "../../../Shared/Util/Signal";
export declare class AuthController implements OnStart {
    private apiKey;
    private appId;
    private idToken;
    private authenticated;
    readonly onAuthenticated: Signal<void>;
    readonly onSignOut: Signal<void>;
    OnStart(): void;
    WaitForAuthed(): Promise<void>;
    TryAutoLogin(): boolean;
    LoginWithRefreshToken(refreshToken: string): boolean;
    SignUpAnon(): boolean;
    GetAuthHeaders(): string;
    GetAuthToken(): string;
    IsAuthenticated(): boolean;
}
