/// <reference types="@easy-games/compiler-types" />
import { NetworkChannel } from "./NetworkAPI";
type RemoteParamsToClient<T> = Parameters<T extends unknown[] ? (clientId: number, ...args: T) => void : T extends unknown ? (clientId: number, arg: T) => void : (clientId: number) => void>;
type RemoteParamsToServer<T> = Parameters<T extends unknown[] ? (...args: T) => void : T extends unknown ? (arg: T) => void : () => void>;
type RemoteParamsToAllClients<T> = RemoteParamsToServer<T>;
type RemoteCallbackFromClient<T> = (...args: RemoteParamsToClient<T>) => void;
type RemoteCallbackFromServer<T> = (...args: RemoteParamsToServer<T>) => void;
declare class RemoteEventServer<T extends unknown[] | unknown> {
    private readonly id;
    private readonly channel;
    constructor(id: number, channel?: NetworkChannel);
    FireAllClients(...args: RemoteParamsToAllClients<T>): void;
    FireExcept(ignoredClientId: number, ...args: RemoteParamsToAllClients<T>): void;
    FireClient(clientId: number, ...args: RemoteParamsToAllClients<T>): void;
    FireClients(clientIds: number[], ...args: RemoteParamsToAllClients<T>): void;
    OnClientEvent(callback: RemoteCallbackFromClient<T>): () => void;
}
declare class RemoteEventClient<T extends unknown[] | unknown> {
    private readonly id;
    private readonly channel;
    constructor(id: number, channel?: NetworkChannel);
    FireServer(...args: RemoteParamsToServer<T>): void;
    OnServerEvent(callback: RemoteCallbackFromServer<T>): () => void;
}
export declare class RemoteEvent<T extends unknown[] | unknown> {
    readonly Server: RemoteEventServer<T>;
    readonly Client: RemoteEventClient<T>;
    constructor(channel?: NetworkChannel);
}
export {};
