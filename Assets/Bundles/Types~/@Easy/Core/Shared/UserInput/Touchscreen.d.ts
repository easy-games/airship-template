/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../Util/Signal";
export declare class Touchscreen {
    private readonly bin;
    private readonly touchscreenDriver;
    private readonly gestureDriver;
    readonly Touch: Signal<[touchIndex: number, position: Vector3, phase: TouchPhase]>;
    readonly TouchTap: Signal<[touchIndex: number, position: Vector3, phase: InputActionPhase]>;
    readonly PrimaryTouch: Signal<[position: Vector3, phase: TouchPhase]>;
    readonly PrimaryTouchTap: Signal<[position: Vector3, phase: InputActionPhase]>;
    readonly Pan: Signal<[position: Vector3, phase: TouchPhase]>;
    readonly Pinch: Signal<[distance: number, scale: number, phase: TouchPhase]>;
    constructor();
    /**
     * Cleans up the touchscreen listener.
     */
    Destroy(): void;
}
