/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Player } from "../../Shared/Player/Player";
export declare class BeforeEntitySpawnServerEvent {
    readonly entityId: number;
    readonly player: Player | undefined;
    spawnPosition: Vector3;
    constructor(entityId: number, player: Player | undefined, spawnPosition: Vector3);
}
