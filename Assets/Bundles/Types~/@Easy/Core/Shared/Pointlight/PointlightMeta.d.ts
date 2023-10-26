/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/** Pointlight DTO. */
export interface PointlightDto {
    /** Pointlight color. Unwrapped `Color` struct. */
    color: [r: number, g: number, b: number, a: number];
    /** Pointlight position. */
    position: Vector3;
    /** Pointlight rotation. */
    rotation: Quaternion;
    /** Pointlight range. */
    range: number;
    /** Pointlight intensity. */
    intensity: number;
    /** Whether or not pointlight casts shadows. */
    castShadows: boolean;
    /** Whether or not pointlight is a high quality light. */
    highQualityLight: boolean;
}
/** Converts a `SavePointlight` to a `PointlightDTO`. */
export declare function SavePointlightToDto(pointlight: SavePointLight): PointlightDto;
