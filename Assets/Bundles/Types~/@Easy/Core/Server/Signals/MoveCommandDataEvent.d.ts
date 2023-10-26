import { DataStreamItems } from "../../Shared/Util/DataStreamTypes";
export declare class MoveCommandDataEvent<T = unknown, K = unknown> {
    /** Client ID. */
    readonly clientId: number;
    /** The server tick in which the event was created. */
    readonly tick: number;
    /** The key. Use `is` to narrow the type. */
    readonly key: K;
    /** The value. Use `is` to narrow the type. */
    readonly value: T;
    constructor(
    /** Client ID. */
    clientId: number, 
    /** The server tick in which the event was created. */
    tick: number, 
    /** The key. Use `is` to narrow the type. */
    key: K, 
    /** The value. Use `is` to narrow the type. */
    value: T);
    /**
     * Type-guard to ensure proper typings for the `key` and `value`.
     *
     * ```ts
     * if (moveCommandDataEvent.is("SomeValidKey")) {
     * 	const value = moveCommandDataEvent.value; // Proper type for `value`.
     * }
     * ```
     */
    is<IsK extends keyof DataStreamItems, IsT extends DataStreamItems[IsK]>(key: IsK): this is MoveCommandDataEvent<IsT, IsK>;
}
