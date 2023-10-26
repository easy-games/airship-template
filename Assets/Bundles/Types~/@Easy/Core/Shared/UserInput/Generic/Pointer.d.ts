/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Signal } from "../../Util/Signal";
export declare class Pointer {
    private readonly bin;
    private readonly touchscreen;
    private readonly mouse;
    readonly Down: Signal<void>;
    readonly Up: Signal<void>;
    readonly Moved: Signal<[location: Vector3]>;
    constructor();
    /**
     * Cleans up the pointer listeners.
     */
    Destroy(): void;
}
