/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { OnStart } from "../../../../../node_modules/@easy-games/flamework-core";
import { RightClickMenuButton } from "./RightClickMenuButton";
export declare class RightClickMenuController implements OnStart {
    private currentBin;
    private openedTime;
    constructor();
    OnStart(): void;
    OpenRightClickMenu(canvas: Canvas, position: Vector3, buttons: RightClickMenuButton[]): () => void;
}
