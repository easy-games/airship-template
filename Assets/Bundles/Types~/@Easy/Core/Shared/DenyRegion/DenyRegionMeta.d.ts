/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/** Describes the location and size of a deny region. */
export interface DenyRegionDto {
    /** Deny region id. */
    id: string;
    /** Deny region origin. */
    origin: Vector3;
    /** Deny region size. */
    size: Vector3;
}
