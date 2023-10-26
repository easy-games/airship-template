/// <reference types="@easy-games/compiler-types" />
import { ItemMeta } from "../../Item/ItemMeta";
import { Entity, EntityReferences } from "../Entity";
import { EntityAnimator } from "./EntityAnimator";
export declare enum ItemAnimationId {
    IDLE = "Idle",
    EQUIP = "Equip",
    UN_EQUIP = "UnEquip",
    USE = "Use"
}
export declare enum ItemPlayMode {
    DEFAULT = 0,
    LOOP = 1,
    HOLD = 2
}
export declare class CharacterEntityAnimator extends EntityAnimator {
    private currentItemClipMap;
    private currentItemMeta;
    private currentItemState;
    private currentEndEventConnection;
    private defaultIdleAnimFP;
    private defaultIdleAnimTP;
    constructor(entity: Entity, anim: AnimancerComponent, ref: EntityReferences);
    private Log;
    SetFirstPerson(isFirstPerson: boolean): void;
    PlayAnimation(clip: AnimationClip, layer: number, onEnd?: Callback, config?: {
        fadeMode?: FadeMode;
        wrapMode?: WrapMode;
        transitionTime?: number;
        noAutoFadeOut?: boolean;
    }): AnimancerState;
    private LoadNewItemResources;
    private TriggerEvent;
    EquipItem(itemMeta: ItemMeta | undefined): void;
    StartIdleAnim(instantTransition: boolean): void;
    PlayUseAnim(useIndex?: number): void;
}
