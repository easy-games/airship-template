/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/** Wrapper around `Object` functionality. */
export declare class GameObjectUtil {
    /**
     * Instantiate an Object.
     * @param original The object being instantiated.
     * @returns The instantiated GameObject.
     */
    static Instantiate(original: Object): GameObject;
    /**
     * Instantiate an Object positionally.
     * @param original The object being instantiated.
     * @param position The position to instantiate object at.
     * @param rotation The rotation with instantiate object with.
     * @returns The instantiated GameObject.
     */
    static InstantiateAt(original: Object, position: Vector3, rotation: Quaternion): GameObject;
    /**
     * Instantiate an Object as a child of `parent`.
     * @param original The object being instantiated.
     * @param parent The object to instantiate as a child of.
     * @returns The instantiated GameObject.
     */
    static InstantiateIn(original: Object, parent: Transform): GameObject;
    /**
     * Destroys a GameObject.
     * @param gameObject GameObject to destroy.
     * @param delay The optional amount of time to delay before destroying the object.
     */
    static Destroy(gameObject: GameObject, delay?: number): void;
}
