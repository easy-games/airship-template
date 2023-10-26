/// <reference types="@easy-games/compiler-types" />
import { Signal } from "./Signal";
export declare const OnUpdate: Signal<[deltaTime: number]>;
export declare const OnLateUpdate: Signal<[deltaTime: number]>;
export declare const OnFixedUpdate: Signal<[fixedDeltaTime: number]>;
export declare const OnTick: Signal<void>;
export declare function SetTimeout<T extends unknown[]>(duration: number, callback: (...args: T) => void, ...args: T): () => void;
export declare function SetInterval(interval: number, callback: Callback, immediate?: boolean): () => void;
