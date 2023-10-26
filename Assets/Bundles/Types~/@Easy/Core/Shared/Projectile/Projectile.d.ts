/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../Entity/Entity";
import { ItemType } from "../Item/ItemType";
import { Signal } from "../Util/Signal";
export interface ProjectileDto {
    nobId: number;
    itemType: ItemType;
    shooterEntityId?: number;
}
export declare class Projectile {
    private easyProjectile;
    readonly gameObject: GameObject;
    readonly itemType: ItemType;
    readonly shooter: Entity | undefined;
    private destroyed;
    private bin;
    readonly OnDestroy: Signal<void>;
    /**
     * Fired when the projectile hits something that will destroy it.
     *
     * For additional collide information, you should instead listen to either `ClientSignals.ProjectileHit` or `ServerSignals.ProjectileHit`
     */
    readonly OnHit: Signal<[hitPoint: Vector3, collider: Collider]>;
    constructor(easyProjectile: EasyProjectile, itemType: ItemType, shooter: Entity | undefined);
    /**
     * Get the item type of what launched this projectile
     */
    GetLauncherItemType(): ItemType | undefined;
    Destroy(): void;
}
