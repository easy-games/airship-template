/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../../Util/Signal";
export declare class TouchscreenDriver {
    private static inst;
    readonly Touch: Signal<[touchIndex: number, position: Vector3, phase: TouchPhase]>;
    readonly TouchTap: Signal<[touchIndex: number, position: Vector3, phase: InputActionPhase]>;
    private constructor();
    /** **NOTE:** Internal only. Use `Touchscreen` class instead. */
    static instance(): TouchscreenDriver;
}
