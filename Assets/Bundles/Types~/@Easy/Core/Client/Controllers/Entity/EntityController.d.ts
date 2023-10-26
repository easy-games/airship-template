/// <reference types="@easy-games/compiler-types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Entity } from "../../../Shared/Entity/Entity";
import { InventoryController } from "../Inventory/InventoryController";
import { PlayerController } from "../Player/PlayerController";
export declare class EntityController implements OnStart {
    private readonly invController;
    private readonly playerController;
    private entities;
    entityHealthbarPrefab: Object;
    constructor(invController: InventoryController, playerController: PlayerController);
    OnStart(): void;
    private DespawnEntity;
    private AddEntity;
    GetEntityById(entityId: number): Entity | undefined;
    WaitForId(entityId: number): Promise<Entity | undefined>;
    GetEntityByClientId(clientId: number): Entity | undefined;
    GetEntityByPlayerId(playerId: number): Entity | undefined;
    /** Yields until entity that corresponds to `playerId` exists. */
    WaitForEntityByPlayerId(playerId: number): Entity;
    GetEntities(): Entity[];
}
