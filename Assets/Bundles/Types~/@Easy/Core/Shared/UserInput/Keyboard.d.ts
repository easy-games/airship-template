import { Signal, SignalPriority } from "../Util/Signal";
import { KeySignal } from "./Drivers/Signals/KeySignal";
export declare class Keyboard {
    private readonly bin;
    private readonly keyboardDriver;
    private readonly keyUpDownDisconnects;
    /**
     * The `AnyKeyDown` signal will fire when any already-registered key is pressed. This means that
     * it will only fire for keys that are already being listened for via `OnKeyDown`.
     */
    readonly AnyKeyDown: Signal<[event: KeySignal]>;
    /**
     * The `AnyKeyDown` signal will fire when any already-registered key is released. This means that
     * it will only fire for keys that are already being listened for via `OnKeyUp`.
     */
    readonly AnyKeyUp: Signal<[event: KeySignal]>;
    constructor();
    private TrackDisconnect;
    OnKeyDown(key: KeyCode, callback: (event: KeySignal) => void, priority?: SignalPriority): () => void;
    OnKeyUp(key: KeyCode, callback: (event: KeySignal) => void, priority?: SignalPriority): () => void;
    /** Returns `true` if the given key is down. */
    IsKeyDown(key: KeyCode): boolean;
    /** Returns `true` if either of the given keys are down. */
    IsEitherKeyDown(key1: KeyCode, key2: KeyCode): boolean;
    /** Returns `true` if both keys are down. */
    AreBothKeysDown(key1: KeyCode, key2: KeyCode): boolean;
    Destroy(): void;
}
