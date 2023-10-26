/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
/** Set of utilities for modifying and traversing sets. */
export declare class SetUtil {
    /**
     * Converts a set to an array.
     * @param set A set.
     * @returns An array containing all members of the set `set`.
     */
    static ToArray<T extends defined>(set: Set<T>): T[];
}
