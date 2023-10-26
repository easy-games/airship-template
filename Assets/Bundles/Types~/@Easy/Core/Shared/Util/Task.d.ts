/** Wrapper around the `coroutine` module to emulate Roblox's task module. */
export declare class Task {
    /**
     * Calls/resumes a function immediately through the engine scheduler.
     * @param callback A function.
     */
    static Spawn(callback: () => void): void;
    /**
     * Schedules a function to be called/resumed after the given duration (in seconds) has passed,
     * without throttling.
     * @param duration A delay duration in seconds.
     * @param callback A function.
     */
    static Delay(duration: number, callback: () => void): void;
    /**
     * Schedules a function to be called after every interval (in seconds) has passed,
     * without throttling.
     * @param duration A interval duration in seconds.
     * @param callback A function.
     * @returns A cancellation function.
     */
    static Repeat(interval: number, callback: () => void): () => void;
    /**
     * Yields the current thread until the given duration (in seconds) has passed, without throttling.
     * @param duration A wait duration in seconds.
     */
    static Wait(duration: number): void;
    /**
     * Yields execution until next frame.
     */
    static WaitFrame(): void;
    /**
     * Calls/resumes a function on the next resumption cycle.
     * @param callback A function.
     */
    static Defer(callback: () => void): void;
}
