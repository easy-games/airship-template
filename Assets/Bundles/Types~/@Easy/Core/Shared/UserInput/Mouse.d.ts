/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../Util/Signal";
export declare class Mouse {
    private readonly bin;
    private readonly mouseDriver;
    readonly LeftDown: Signal<void>;
    readonly LeftUp: Signal<void>;
    readonly RightDown: Signal<void>;
    readonly RightUp: Signal<void>;
    readonly MiddleDown: Signal<void>;
    readonly MiddleUp: Signal<void>;
    readonly Scrolled: Signal<[delta: number]>;
    readonly Moved: Signal<[location: Vector3]>;
    private isLeftDown;
    private isRightDown;
    private isMiddleDown;
    private location;
    constructor();
    /** Returns `true` if the left mouse button is down. */
    IsLeftButtonDown(): boolean;
    /** Returns `true` if the right mouse button is down. */
    IsRightButtonDown(): boolean;
    /** Returns `true` if the middle mouse button is down. */
    IsMiddleButtonDown(): boolean;
    /** Gets the position of the mouse on-screen. */
    GetLocation(): Vector3;
    /** Sets the position of the mouse on-screen. */
    SetLocation(position: Vector3): void;
    /** Gets the mouse's change in position on-screen over the last frame. */
    GetDelta(): Vector3;
    /**
     * Locks the mouse.
     * Returns an ID that can be used to unlock the mouse.
     */
    AddUnlocker(): number;
    RemoveUnlocker(id: number): void;
    ClearAllLockers(): void;
    /** Check if the mouse is locked. */
    IsLocked(): boolean;
    /** Cleans up the mouse. */
    Destroy(): void;
}
