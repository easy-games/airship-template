/**
 * Set of utilities for working with `Array` types.
 */
export declare class ArrayUtil {
    /**
     * Add arrayB to arrayA
     * @param arrayA.
     * @param arrayB.
     * @returns A native Typescript array.
     */
    static Combine<T extends any[]>(arrayA: T, arrayB: T): T;
}
