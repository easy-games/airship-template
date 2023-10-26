/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { DamageType } from "../../Damage/DamageType";
import { ItemMeta } from "../../Item/ItemMeta";
import { Bin } from "../../Util/Bin";
import { Entity, EntityReferences } from "../Entity";
export declare abstract class EntityAnimator {
    protected entity: Entity;
    private readonly flashTransitionDuration;
    private readonly flashOnTime;
    readonly anim: AnimancerComponent;
    readonly defaultTransitionTime: number;
    protected readonly entityRef: EntityReferences;
    protected bin: Bin;
    private flinchClipFPS?;
    private deathClipFPS?;
    private flinchClipTP?;
    private deathClipTP?;
    private damageEffectTemplate?;
    private deathEffectTemplate?;
    private deathEffectVoidTemplate?;
    private isFlashing;
    protected isFirstPerson: boolean;
    private footstepAudioBundle;
    private slideAudioBundle;
    private steppedOnBlockType;
    private lastFootstepSoundTime;
    private deathVfx?;
    baseFootstepVolumeScale: number;
    constructor(entity: Entity, anim: AnimancerComponent, entityRef: EntityReferences);
    Destroy(): void;
    PlayAnimationOnLayer(clip: AnimationClip, layer: number, wrapMode?: WrapMode, transitionTime?: number, onEnd?: Callback): AnimancerState;
    StartIdleAnim(instantTransition: boolean): void;
    PlayUseAnim(useIndex?: number): void;
    EquipItem(itemMeta: ItemMeta | undefined): void;
    abstract PlayAnimation(clip: AnimationClip, layer: number, onEnd?: Callback, config?: {
        fadeMode?: FadeMode;
        wrapMode?: WrapMode;
        transitionTime?: number;
        pauseOnEnd?: boolean;
        autoFade?: boolean;
    }): AnimancerState;
    SetFirstPerson(isFirstPerson: boolean): void;
    PlayTakeDamage(damageAmount: number, damageType: DamageType, position: Vector3, entityModel: GameObject | undefined): void;
    PlayDeath(damageType: DamageType): void;
    private PlayDamageFlash;
    SetFresnelColor(color: Color, power: number, strength: number): void;
    PlayFootstepSound(volumeScale: number): void;
    private OnAnimationEvent;
    IsFirstPerson(): boolean;
}
