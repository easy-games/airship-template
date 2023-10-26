/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/types" />
interface ConnectionLike {
    Disconnect(this: ConnectionLike): void;
}
interface SignalLike<T extends Callback = Callback> {
    Connect(this: SignalLike, callback: T): () => void;
}
type Trackable = GameObject | ConnectionLike | Promise<unknown> | thread | ((...args: unknown[]) => unknown) | {
    destroy: () => void;
} | {
    disconnect: () => void;
} | {
    Destroy: () => void;
} | {
    Disconnect: () => void;
};
/**
 * Class for tracking and cleaning up resources.
 */
export declare class Bin {
    private objects;
    private cleaning;
    /** Add an object to the bin. */
    Add<T extends Trackable>(obj: T, cleanupMethod?: string): T;
    /** Connect a callback to a given signal. */
    Connect<T extends Callback>(signal: SignalLike<T>, handler: (...args: Parameters<T>) => void): ReturnType<typeof signal.Connect>;
    /** Create a new Bin which will be immediately added to this bin. */
    Extend(): Bin;
    /** Clean up all tracked objects. */
    Clean(): void;
    /** Alias for `Bin.Clean()`. */
    Destroy(): void;
    private cleanupObj;
}
export {};
