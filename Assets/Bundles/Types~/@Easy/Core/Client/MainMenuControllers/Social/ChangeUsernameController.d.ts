import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { AuthController } from "../Auth/AuthController";
export declare class ChangeUsernameController implements OnStart {
    private readonly authController;
    private canvas;
    private responseText;
    private submitButton;
    private inputField;
    private inputFieldSelected;
    constructor(authController: AuthController);
    TestAvailability(): void;
    SubmitNameChange(): void;
    SetResponseText(color: "success" | "error", text: string): void;
    OnStart(): void;
    Open(): void;
}
