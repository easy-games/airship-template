/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
type SignalParams<T> = Parameters<T extends unknown[] ? (...args: T) => never : T extends unknown ? (arg: T) => never : () => never>;
export type SignalCallback<T> = (...args: SignalParams<T>) => unknown;
type SignalWait<T> = T extends unknown[] ? LuaTuple<T> : T;
export declare const enum SignalPriority {
    HIGHEST = 0,
    HIGH = 100,
    NORMAL = 200,
    LOW = 300,
    LOWEST = 400,
    /**
     * The very last priority to get fired.
     */
    MONITOR = 500
}
export declare class Signal<T extends unknown[] | unknown> {
    private debugLogging;
    private trackYielding;
    private readonly connections;
    debugGameObject: boolean;
    /**
     * Connect a callback function to the signal.
     *
     * The returned function can be called to disconnect the callback.
     */
    Connect(callback: SignalCallback<T>): () => void;
    /**
     * Connect a callback function to the signal.
     * Highest SignalPriority is called first.
     *
     * The returned function can be called to disconnect the callback.
     */
    ConnectWithPriority(priority: SignalPriority, callback: SignalCallback<T>): () => void;
    /**
     * Connects a callback function to the signal. The connection is
     * automatically disconnected after the first invocation.
     *
     * The returned function can be called to disconnect the callback.
     */
    Once(callback: SignalCallback<T>): () => void;
    /**
     * Invokes all callback functions with the given arguments.
     */
    Fire(...args: SignalParams<T>): T;
    /**
     * Yields the current thread until the next invocation of the
     * signal occurs. The invoked arguments will be returned.
     */
    Wait(): SignalWait<T>;
    /**
     * Fires the given signal any time this signal is fired.
     *
     * The returned function can be called to disconnect the proxy.
     */
    Proxy(signal: Signal<T>): () => void;
    /**
     * Clears all connections.
     */
    DisconnectAll(): void;
    /**
     * Returns `true` if there are any connections.
     */
    HasConnections(): boolean;
    /**
     * Alias for `DisconnectAll()`.
     */
    Destroy(): void;
    SetDebug(value: boolean): Signal<T>;
    WithYieldTracking(value: boolean): Signal<T>;
}
export {};
