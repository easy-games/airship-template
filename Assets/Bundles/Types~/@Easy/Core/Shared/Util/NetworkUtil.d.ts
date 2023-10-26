import { Signal } from "./Signal";
export declare const NetworkObjectAdded: Signal<NetworkObject>;
export declare class NetworkUtil {
    /**
     * Replicate a `GameObject` to all clients. `GameObject` **MUST** have a `NetworkObject` component.
     * If a `CollectionTag` `tag` is provided, the `CollectionManager` will capture,
     * emit, and store replicated `GameObject`.
     * @param gameObject The object being replicated.
     * @param tag An optional tag to register `GameObject` with `CollectionManager`.
     */
    static Spawn(gameObject: GameObject): void;
    /**
     * Replicate a `GameObject` to client `clientId`. `GameObject` **MUST** have a `NetworkObject` component.
     * If a `CollectionTag` `tag` is provided, the `CollectionManager` will capture,
     * emit, and store replicated `GameObject`.
     * @param gameObject The object being replicated.
     * @param clientId The client the object is being replicated to.
     * @param tag An optional tag to register `GameObject` with `CollectionManager`.
     */
    static SpawnWithClientOwnership(gameObject: GameObject, clientId: number): void;
    static Despawn(gameObject: GameObject): void;
    static GetNetworkObject(objectId: number): NetworkObject | undefined;
    /**
     * Wait for (`timeout`) and fetch `NetworkObject` that corresponds to `objectId`.
     * @param objectId Corresponds to a replicated `NetworkObject`.
     * @param timeout How long in seconds to wait for `objectId` to exist before timing out.
     * @returns `NetworkObject` that corresponds to `objectId`.
     */
    static WaitForNobIdTimeout(objectId: number, timeout: number): NetworkObject | undefined;
    /**
     * Wait for (`timeout`) and fetch `NetworkObject` that corresponds to `name`.
     * @param objectId Corresponds to a replicated `NetworkObject`.
     * @param timeout How long in seconds to wait for `name` to exist before timing out.
     * @returns `NetworkObject` that corresponds to `name`.
     */
    static WaitForNobTimeout(name: string, timeout: number): NetworkObject | undefined;
    /**
     * Wait for and fetch `NetworkObject` that corresponds to `name`.
     * @param objectId Corresponds to a replicated `NetworkObject`.
     * @returns `NetworkObject` that corresponds to `name`.
     */
    static WaitForNob(name: string): NetworkObject;
    /**
     * Wait for and fetch `NetworkObject` that corresponds to `objectId`.
     * @param objectId Corresponds to a replicated `NetworkObject`.
     * @returns `NetworkObject` that corresponds to `objectId`.
     */
    static WaitForNobId(objectId: number): NetworkObject;
}
