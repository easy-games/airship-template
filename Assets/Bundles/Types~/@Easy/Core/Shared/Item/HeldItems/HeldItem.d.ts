import { Entity } from "../../Entity/Entity";
import { ItemMeta } from "../ItemMeta";
export declare class HeldItem {
    private serverOffsetMargin;
    /** Undefined when holding nothing */
    protected readonly itemMeta: ItemMeta | undefined;
    protected clickBufferMargin: number;
    protected readonly entity: Entity;
    private lastUsedTime;
    private chargeStartTime;
    protected isCharging: boolean;
    protected currentItemGOs: GameObject[];
    protected currentItemAnimations: Animator[];
    private holdingDownBin;
    private holdingDown;
    private bufferingUse;
    constructor(entity: Entity, newMeta: ItemMeta | undefined);
    protected Log(message: string): void;
    OnEquip(): void;
    /**
     * Called when the HeldItem's art assets (such as animations) should be loaded.
     */
    OnLoadAssets(): void;
    OnUnEquip(): void;
    OnCallToActionStart(): void;
    private HoldDownAction;
    OnCallToActionEnd(): void;
    OnSecondaryActionStart(): void;
    OnSecondaryActionEnd(): void;
    OnInspect(): void;
    protected OnChargeStart(): void;
    protected OnChargeEnd(): void;
    protected TryUse(): boolean;
    protected TryChargeUse(): boolean;
    protected TriggerUse(useIndex: number): void;
    private OnCooldownReset;
    /** Runs when an item is used. Runs on every client.*/
    protected OnUseClient(useIndex: number): void;
    protected SetItemAnimationPauseOnEndFrame(pauseOnEndFrame: boolean): void;
    /** Runs when an item is used, server authorized
     * return true if you can use the item */
    protected OnUseServer(useIndex: number): void;
    GetRemainingCooldownTime(): number;
    IsChargedUp(): boolean;
    HasChargeTime(): boolean;
}
