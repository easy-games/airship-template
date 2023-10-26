/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/compiler-types" />
export declare class SpringTween {
    private readonly minDuration;
    private readonly spring;
    private elapsedTime;
    constructor(position: Vector3, angularFrequency: number, minDuration: number);
    setGoal(goal: Vector3): void;
    impulse(impulse: Vector3): void;
    resetTo(position: Vector3): void;
    update(deltaTime: number): LuaTuple<[position: Vector3, isDone: boolean]>;
}
