import { Signal } from "../Util/Signal";
export type ControlScheme = "MouseKeyboard" | "Touch";
/** Utility class for observing the player's currently-used control scheme. */
export declare class Preferred {
    private readonly bin;
    private readonly preferredDriver;
    /** A signal that fires every time the currently-used control scheme changes. */
    readonly ControlSchemeChanged: Signal<[controlScheme: ControlScheme]>;
    private controlScheme;
    constructor();
    /** Get the currently-used control scheme. */
    GetControlScheme(): ControlScheme;
    /**
     * Observe the currently-used control scheme. Fires the `observer` function immediately,
     * as well as every time the control scheme changes.
     *
     * The returned function can be called to stop the observation process.
     *
     * The observer function also returns a function which is called when the control scheme
     * is changed (or the observation process is stopped). This is useful for disconnecting
     * any inputs regarding the last-observed control scheme.
     *
     * ```ts
     * let stopObserving = preferred.ObserveControlScheme((preferred) => {
     * 	const bin = new Bin();
     * 	if (preferred === "MouseKeyboard") {
     * 		// User last used a mouse or keyboard input, thus listen to relevant devices:
     * 		const keyboard = bin.Add(new Keyboard());
     * 		keyboard.GetKeyDownSignal(Key.Space).Connect(() => {
     * 			print("Space pressed");
     * 		});
     * 	}
     * 	return () => {
     * 		// Clean up any connections once the preferred scheme changes:
     * 		bin.Destroy();
     * 	};
     * });
     * ```
     */
    ObserveControlScheme(observer: (preferred: ControlScheme) => CleanupFunc): () => void;
    /** Cleans up any connections/observers. */
    Destroy(): void;
}
