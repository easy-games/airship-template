/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
/**
 * Set of utilities for working with `CSArray` types.
 */
export declare class CSArrayUtil {
    /**
     * Convert a C# array to a native Typescript array.
     * @param array A C# array.
     * @returns A native Typescript array.
     */
    static Convert<T extends defined>(array: CSArray<T>): Array<T>;
}
