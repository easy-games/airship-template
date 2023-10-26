/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
export declare class Spring {
    /** The position of the spring */
    private position;
    /** The angular frequency of the spring. */
    private angularFrequency;
    /** The goal for the spring. */
    goal: Vector3;
    /** The current velocity of the spring. */
    velocity: Vector3;
    constructor(
    /** The position of the spring */
    position: Vector3, 
    /** The angular frequency of the spring. */
    angularFrequency: number);
    /** Update the spring. */
    update(deltaTime: number): Vector3;
    /** Reset the spring to a specific position. */
    resetTo(position: Vector3): void;
    /** Impulse the spring with a given impulse velocity. */
    impulse(impulse: Vector3): void;
}
