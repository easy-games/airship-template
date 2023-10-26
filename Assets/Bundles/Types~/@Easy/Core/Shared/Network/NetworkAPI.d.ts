/// <reference types="@easy-games/compiler-types" />
export declare enum NetworkChannel {
    Reliable = 0,
    Unreliable = 1
}
export declare function InitNet(): void;
declare function fireServer(id: number, args: unknown[], channel: NetworkChannel): void;
declare function fireAllClients(id: number, args: unknown[], channel: NetworkChannel): void;
declare function fireClient(id: number, clientId: number, args: unknown[], channel: NetworkChannel): void;
declare function fireExcept(id: number, ignoredClientId: number, args: unknown[], channel: NetworkChannel): void;
declare function fireClients(id: number, clientIds: number[], args: unknown[], channel: NetworkChannel): void;
declare function connect(id: number, callback: Callback): () => void;
declare const NetworkAPI: {
    fireServer: typeof fireServer;
    fireAllClients: typeof fireAllClients;
    fireClient: typeof fireClient;
    fireClients: typeof fireClients;
    fireExcept: typeof fireExcept;
    connect: typeof connect;
};
export default NetworkAPI;
