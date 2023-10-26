/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../../Util/Signal";
export declare class MobileJoystickDriver {
    private static inst;
    readonly Changed: Signal<[position: Vector3, phase: MobileJoystickPhase]>;
    private constructor();
    SetVisible(visible: boolean): void;
    IsVisible(): boolean;
    /** **NOTE:** Internal only. Use `Touchscreen` class instead. */
    static instance(): MobileJoystickDriver;
}
