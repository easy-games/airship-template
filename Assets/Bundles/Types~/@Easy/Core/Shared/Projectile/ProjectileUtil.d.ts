/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../Entity/Entity";
import { ItemMeta } from "../Item/ItemMeta";
export declare class ProjectileUtil {
    static GetLaunchPosition(gos: GameObject[], entity: Entity, isInFirstPerson: boolean): Vector3;
    static GetLaunchForceData(itemMeta: ItemMeta, aimVector: Vector3, chargeSec: number): {
        direction: Vector3;
        initialVelocity: Vector3;
    };
}
