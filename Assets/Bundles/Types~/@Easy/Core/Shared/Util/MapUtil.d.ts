/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
type CreateMapEntryFactory<K, V> = (key: K, map: Map<K, V>) => V;
export declare class MapUtil {
    /**
     * Will either get the value at key or if none exists it will set to provided default
     *
     * @returns new entry
     */
    static GetOrCreate<K, V extends defined>(map: Map<K, V>, key: K, initValue: V): V;
    static GetOrCreate<K, V extends defined>(map: Map<K, V>, key: K, createValueFactory: CreateMapEntryFactory<K, V>): V;
    static Values<T extends defined>(map: Map<unknown, T>): T[];
    static Keys<T extends defined>(map: Map<T, unknown>): T[];
    static Entries<T, K>(map: Map<T, K>): [T, K][];
}
export {};
