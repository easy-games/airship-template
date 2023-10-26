/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { OnStart } from "../../../../../node_modules/@easy-games/flamework-core";
import { Projectile } from "../../../../Shared/Projectile/Projectile";
export declare class ProjectileController implements OnStart {
    private prefabInfoByItemType;
    constructor();
    OnStart(): void;
    HandleCollision(projectile: Projectile, collider: Collider, hitPoint: Vector3, normal: Vector3, velocity: Vector3): boolean;
}
