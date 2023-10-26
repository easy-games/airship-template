/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
import { DamageType } from "./Damage/DamageType";
import { DenyRegionDto } from "./DenyRegion/DenyRegionMeta";
import { AccessorySlot } from "./Entity/Character/Accessory/AccessorySlot";
import { EntityDto } from "./Entity/Entity";
import { GeneratorDto } from "./Generator/GeneratorMeta";
import { InventoryDto } from "./Inventory/Inventory";
import { ItemStackDto } from "./Inventory/ItemStack";
import { HeldItemState } from "./Item/HeldItems/HeldItemState";
import { ItemType } from "./Item/ItemType";
import { RemoteEvent } from "./Network/RemoteEvent";
import { RemoteFunction } from "./Network/RemoteFunction";
import { PlayerDto } from "./Player/Player";
import { ProjectileDto } from "./Projectile/Projectile";
import { TeamDto } from "./Team/Team";
export declare const CoreNetwork: {
    ClientToServer: {
        Ready: RemoteEvent<[]>;
        SetHeldSlot: RemoteEvent<[slot: number]>;
        PlaceBlock: RemoteEvent<[pos: Vector3, itemType: ItemType, rotation?: number | undefined]>;
        HitBlock: RemoteEvent<[pos: Vector3]>;
        LaunchProjectile: RemoteEvent<[nobId: number, isInFirstPerson: boolean, direction: Vector3, chargeSec: number]>;
        SwordAttack: RemoteEvent<[targetEntityId?: number | undefined, hitDirection?: Vector3 | undefined]>;
        DropItemInSlot: RemoteEvent<[slot: number, amount: number]>;
        PickupGroundItem: RemoteEvent<[groundItemId: number]>;
        Inventory: {
            SwapSlots: RemoteEvent<[fromInvId: number, fromSlot: number, toInvId: number, toSlot: number]>;
            QuickMoveSlot: RemoteEvent<[fromInvId: number, fromSlot: number, toInvId: number]>;
            MoveToSlot: RemoteEvent<[fromInvId: number, fromSlot: number, toInvId: number, toSlot: number, amount: number]>;
            CheckOutOfSync: RemoteEvent<[invDto: InventoryDto]>;
        };
        SendChatMessage: RemoteEvent<[text: string]>;
        SetHeldItemState: RemoteEvent<[entityId: number, heldItemState: HeldItemState]>;
        TEST_LATENCY: RemoteFunction<void, number>;
        TestKnockback2: RemoteEvent<[]>;
        LibonatiTest: RemoteEvent<[]>;
    };
    ServerToClient: {
        UpdateInventory: RemoteEvent<InventoryDto>;
        /** Creates a new instance of an `ItemStack`. */
        SetInventorySlot: RemoteEvent<[invId: number, slot: number, itemStack: ItemStackDto | undefined, clientPredicted: boolean]>;
        RevertBlockPlace: RemoteEvent<[pos: Vector3]>;
        /** Updates properties of an `ItemStack` without creating a new instance of an `ItemStack`. */
        UpdateInventorySlot: RemoteEvent<[invId: number, slot: number, itemType?: ItemType | undefined, amount?: number | undefined]>;
        SetHeldInventorySlot: RemoteEvent<[invId: number, slot: number, clientPredicted: boolean]>;
        SpawnEntities: RemoteEvent<[entities: EntityDto[]]>;
        DespawnEntity: RemoteEvent<[entityId: number]>;
        BlockHit: RemoteEvent<[blockPos: Vector3, blockId: number, entityId: number | undefined]>;
        BlockDestroyed: RemoteEvent<[blockPos: Vector3, blockId: number]>;
        BlockGroupDestroyed: RemoteEvent<[blockPositions: Vector3[], blockIds: number[]]>;
        ProjectileSpawn: RemoteEvent<[projectileDto: ProjectileDto]>;
        EntityDamage: RemoteEvent<[entityId: number, amount: number, damageType: DamageType, fromEntityId: number | undefined]>;
        ProjectileHit: RemoteEvent<[hitPoint: Vector3, hitEntityId: number | undefined]>;
        Entity: {
            SetHealth: RemoteEvent<[entityId: number, health: number]>;
            SetDisplayName: RemoteEvent<[entityId: number, displayName: string]>;
            AddHealthbar: RemoteEvent<[entityId: number]>;
        };
        EntityDeath: RemoteEvent<[entityId: number, damageType: DamageType, killerEntityId: number | undefined, respawnTime: number]>;
        GroundItem: {
            Add: RemoteEvent<[dtos: {
                id: number;
                itemStack: ItemStackDto;
                pos: Vector3;
                velocity: Vector3;
                pickupTime: number;
                data: Record<string, unknown>;
            }[]]>;
            UpdatePosition: RemoteEvent<[{
                id: number;
                pos: Vector3;
                vel: Vector3;
            }[]]>;
        };
        CharacterModelChanged: RemoteEvent<[characterModelId: number]>;
        ChatMessage: RemoteEvent<[text: string]>;
        SetAccessory: RemoteEvent<[entityId: number, slot: AccessorySlot, accessoryPath: string]>;
        RemoveAccessory: RemoteEvent<[entityId: number, slot: AccessorySlot]>;
        AddPlayer: RemoteEvent<[player: PlayerDto]>;
        RemovePlayer: RemoteEvent<[clientId: number]>;
        AllPlayers: RemoteEvent<[players: PlayerDto[]]>;
        PlayEntityItemAnimation: RemoteEvent<[entityId: number, useIndex?: number | undefined, modeIndex?: number | undefined]>;
        /** Fired when a generator is created. */
        GeneratorCreated: RemoteEvent<[generatorStateDto: GeneratorDto]>;
        /** Fired when a generator is looted. */
        GeneratorLooted: RemoteEvent<[generatorId: string]>;
        /** Fired when a generator's spawn rate changes. */
        GeneratorSpawnRateChanged: RemoteEvent<[generatorId: string, newSpawnRate: number]>;
        /** Fired when a user joins late. Sends full generator state snapshot. */
        GeneratorSnapshot: RemoteEvent<[generatorStateDtos: GeneratorDto[]]>;
        /** Fired when a **tagged** GameObject is spawned on the server. */
        NetGameObjectReplicating: RemoteEvent<[networkObjectId: number, tag: string]>;
        /** Fired when a player joins. Sends `CollectionManager` replicated set state. */
        CollectionManagerState: RemoteEvent<[state: Map<string, Set<number>>]>;
        /** Fired when client first joins to send existing teams and when new teams are created. */
        AddTeams: RemoteEvent<[teams: TeamDto[]]>;
        AddPlayerToTeam: RemoteEvent<[teamId: string, userId: string]>;
        RemovePlayerFromTeam: RemoteEvent<[teamId: string, userId: string]>;
        RemoveTeams: RemoteEvent<[teamIds: string[]]>;
        SetBlockData: RemoteEvent<[voxelPos: Vector3, key: string, data: unknown]>;
        SetBlockGroupData: RemoteEvent<[voxelPositions: Vector3[], key: string, data: unknown[]]>;
        SyncPrefabBlocks: RemoteEvent<[blockPositions: Vector3[]]>;
        /** Fired when a player is eliminated. */
        PlayerEliminated: RemoteEvent<[clientId: number]>;
        /** Fired when a deny region is created. */
        DenyRegionCreated: RemoteEvent<[denyRegion: DenyRegionDto]>;
        /** Fired when a player joins. Sends entire deny region state. */
        DenyRegionSnapshot: RemoteEvent<[denyRegions: DenyRegionDto[]]>;
        /** Fired when the current selected items state changes on an entity*/
        HeldItemStateChanged: RemoteEvent<[entityId: number, state: HeldItemState]>;
        BlockPlace: RemoteEvent<[pos: Vector3, voxel: number, entityId?: number | undefined]>;
        BlockGroupPlace: RemoteEvent<[positions: Vector3[], voxels: number[], entityId?: number | undefined]>;
        EntityPickedUpGroundItem: RemoteEvent<[entityId: number, groundItemId: number]>;
        GroundItemDestroyed: RemoteEvent<[groundItemId: number]>;
        /** Fired when a generator item spawns. */
        GeneratorItemSpawn: RemoteEvent<[generatorStateDto: GeneratorDto]>;
    };
};
