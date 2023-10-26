import { Entity } from "../../../Shared/Entity/Entity";
export declare class EntityInput {
    private readonly entity;
    private readonly bin;
    private readonly entityDriver;
    private disablers;
    private disablerCounter;
    private jumping;
    private enabled;
    private autoSprinting;
    constructor(entity: Entity);
    /**
     * Sets whether or not the Humanoid Driver is enabled. If disabled, then the
     * character will not move from user input.
     * @param enabled Enabled state.
     */
    private SetEnabled;
    /** Returns `true` if the Humanoid Driver is enabled. */
    IsEnabled(): boolean;
    IsSprinting(): boolean;
    AddDisabler(): () => void;
    private InitControls;
    Destroy(): void;
}
