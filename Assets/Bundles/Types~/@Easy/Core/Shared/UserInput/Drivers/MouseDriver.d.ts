/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../../Util/Signal";
export declare class MouseDriver {
    private static inst;
    readonly LeftButtonChanged: Signal<[isDown: boolean]>;
    readonly RightButtonChanged: Signal<[isDown: boolean]>;
    readonly MiddleButtonChanged: Signal<[isDown: boolean]>;
    readonly Scrolled: Signal<[delta: number]>;
    readonly Moved: Signal<[location: Vector3]>;
    private readonly inputProxy;
    private constructor();
    IsLeftDown(): boolean;
    IsRightDown(): boolean;
    IsMiddleDown(): boolean;
    GetLocation(): Vector3;
    GetDelta(): Vector3;
    SetLocation(position: Vector3): void;
    IsLocked(): boolean;
    SetLocked(locked: boolean): void;
    /** **NOTE:** Internal only. Use `Mouse` class instead. */
    static instance(): MouseDriver;
}
