import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { ProximityPrompt } from "./ProximityPrompt";
export declare class ProximityPromptController implements OnStart {
    /** Keyboard instance. */
    private keyboard;
    /** All active proximity prompts in world. */
    private proximityPrompts;
    /** Proximity prompts in activation range. */
    private activatableProximityPrompts;
    OnStart(): void;
    RegisterProximityPrompt(prompt: ProximityPrompt): void;
    /** Returns distance between local player and a proximity prompt. */
    private GetDistanceToPrompt;
    /** Displays and hides prompts based on `activationRange`. */
    private FindActivatablePrompts;
    /** Shows a proximity prompt. */
    private ShowPrompt;
    /** Hides a proximity prompt. */
    private HidePrompt;
    /**
     * Returns an active proximity prompt's index.
     * @param promptId An active proximity prompt id.
     * @returns Index that corresponds to active prompt with `promptId`. If prompt is _not_ active, the function returns -1.
     */
    private GetActivePromptIndexById;
}
