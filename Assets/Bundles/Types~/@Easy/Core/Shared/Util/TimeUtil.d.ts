/**
 * Time synced between server and client.
 */
export declare function SharedTime(): number;
export declare function WaitFrame(): void;
export declare class TimeUtil {
    /**
     * @returns Time elapsed since server/client has started.
     */
    static GetLifetimeSeconds(): number;
    /**
     * @returns Time synchronized between server and client.
     */
    static GetServerTime(): number;
    /**
     * @returns The interval in seconds from the last frame to the current one.
     */
    static GetDeltaTime(): number;
    /**
     * @returns The interval in seconds from the last physics frame to the current one.
     */
    static GetFixedDeltaTime(): number;
}
