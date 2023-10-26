export declare class Bootstrap {
    static PrepareVoxelWorld(skybox?: string): void;
    /**
     * This is the final prepare method.
     * Call once you have done the following:
     * - Register all ItemTypes and ItemHandlers
     * - Called {@link Bootstrap.PrepareVoxelWorld}
     */
    static Prepare(): void;
    /**
     * Call this once your game has completed all setup.
     */
    static FinishedSetup(): void;
}
