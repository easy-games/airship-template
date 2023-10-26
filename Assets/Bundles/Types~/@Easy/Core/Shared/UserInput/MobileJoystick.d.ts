/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../Util/Signal";
export declare class MobileJoystick {
    private readonly bin;
    private readonly mobileJoystickDriver;
    /** Fires when the position of the joystick changes, including when it's released. */
    readonly Changed: Signal<[position: Vector3, phase: MobileJoystickPhase]>;
    /** Returns `true` if the mobile joystick is visible. */
    IsVisible(): boolean;
    /** Set the visibility of the mobile joystick. */
    SetVisible(visible: boolean): void;
    constructor();
    /** Cleans up the mobile joystick listener. */
    Destroy(): void;
}
