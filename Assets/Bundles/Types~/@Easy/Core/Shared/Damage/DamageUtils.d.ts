export declare class DamageUtils {
    static readonly minDamageFallSpeed = 35;
    static readonly maxDamageFallSpeed = 60;
    static readonly minFallDamage = 10;
    static readonly maxFallDamage = 50;
    static GetFallDamage(verticalSpeed: number): number;
    static GetFallDelta(verticalSpeed: number): number;
}
