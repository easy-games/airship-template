import { Signal, SignalCallback, SignalPriority } from "./Signal";
export declare class SignalProxy<T extends unknown | unknown[]> extends Signal<T> {
    private readonly source;
    private readonly proxyConnections;
    constructor(source: Signal<T>);
    Connect(callback: SignalCallback<T>): () => void;
    ConnectWithPriority(priority: SignalPriority, callback: SignalCallback<T>): () => void;
    DisconnectAll(): void;
    Destroy(): void;
}
