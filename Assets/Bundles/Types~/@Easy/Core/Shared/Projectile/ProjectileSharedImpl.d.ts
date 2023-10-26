/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Projectile } from "./Projectile";
export declare class ProjectileSharedImpl {
    /**
     *
     * @param projectile
     * @param hitPoint
     * @param hitVelocity
     * @param collider
     * @returns true if collision is ignored.
     */
    static ShouldIgnoreCollision(projectile: Projectile, hitPoint: Vector3, velocity: Vector3, collider: Collider): boolean;
}
