/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../../../Entity/Entity";
import { HeldItem } from "../HeldItem";
export declare class MeleeHeldItem extends HeldItem {
    private gizmoEnabled;
    OnUseClient(useIndex: number): void;
    OnUseServer(useIndex: number): void;
    private ScanForHits;
    private ScanBox;
}
export interface MeleeHit {
    hitEntity: Entity;
    hitDirection: Vector3;
    hitPosition: Vector3;
    hitNormal: Vector3;
    distance: number;
    knockbackDirection: Vector3;
}
