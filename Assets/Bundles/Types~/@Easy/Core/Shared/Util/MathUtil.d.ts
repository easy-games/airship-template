/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
export declare class MathUtil {
    /**
     * An equal chance of returning either -1 or +1
     */
    static RandomSign(): 1 | -1;
    /**
     * Calculates an intermediate value between `a` and `b` given a `t`.
     * @param a Start number.
     * @param b Goal number.
     * @param t A number between 0 and 1.0.
     */
    static Lerp(a: number, b: number, t: number): number;
    /**
     * Remap `n` from range `[oldMin, oldMax]` to `[min, max]`.
     * @param n Number to remap.
     * @param oldMin Old range minimum.
     * @param oldMax Old range maximum.
     * @param min New range minimum.
     * @param max New range maximum.
     */
    static Map(n: number, oldMin: number, oldMax: number, min: number, max: number): number;
    /**
     * Floor all components of a Vector3.
     * @param vec A Vector3.
     * @returns `vec` with all components floored.
     */
    static FloorVec(vec: Vector3): Vector3;
    /**
     * Round all components of a Vector3.
     * @param vec A Vector3.
     * @returns `vec` with all components rounded.
     */
    static RoundVec(vec: Vector3): Vector3;
    /**
     * Calculates how far along `v` is between `a` and `b`.
     * @param a Start number.
     * @param b Goal number.
     * @param v A number between `a` and `b`.
     */
    static InvLerp(a: number, b: number, v: number): number;
    static Clamp(value: number, min?: number, max?: number): number;
    static ClampAngle(angle: number, min: number, max: number): number;
    static Inverse(value: Quaternion): Quaternion;
}
