import { Entity } from "../Shared/Entity/Entity";
import { GroundItem } from "../Shared/GroundItem/GroundItem";
import { ItemType } from "../Shared/Item/ItemType";
import { Player } from "../Shared/Player/Player";
import { BeforeBlockPlacedSignal } from "../Shared/Signals/BeforeBlockPlacedSignal";
import { ChangeTeamSignal } from "../Shared/Team/TeamJoinSignal";
import { Signal } from "../Shared/Util/Signal";
import { ProjectileCollideClientSignal } from "./Controllers/Damage/Projectile/ProjectileCollideClientSignal";
import { ProjectileLaunchedClientSignal } from "./Controllers/Damage/Projectile/ProjectileLaunchedClientSignal";
import { BeforeBlockHitSignal } from "./Controllers/BlockInteractions/Signal/BeforeBlockHitSignal";
import { BlockPlaceClientSignal } from "./Signals/BlockPlaceClientSignal";
import { AfterBlockHitClientSignal } from "./Signals/AfterBlockHitClientSignal";
import { EntityDamageClientSignal } from "./Signals/EntityDamageClientSignal";
import { EntityDeathClientSignal } from "./Signals/EntityDeathClientSignal";
import { EntitySpawnClientSignal } from "./Signals/EntitySpawnClientEvent";
export declare const CoreClientSignals: {
    EntitySpawn: Signal<EntitySpawnClientSignal>;
    EntityDamage: Signal<EntityDamageClientSignal>;
    EntityDeath: Signal<EntityDeathClientSignal>;
    EntityDespawn: Signal<Entity>;
    PlayerJoin: Signal<Player>;
    PlayerLeave: Signal<Player>;
    /** Fired before a block is hit. */
    BeforeBlockHit: Signal<BeforeBlockHitSignal>;
    AfterBlockHit: Signal<AfterBlockHitClientSignal>;
    /** Fired before a client-predicted block is placed. */
    BeforeBlockPlaced: Signal<BeforeBlockPlacedSignal>;
    /** Fired when a client-predicted block is placed. */
    BlockPlace: Signal<BlockPlaceClientSignal>;
    PlayerChangeTeam: Signal<ChangeTeamSignal>;
    /** Fired when local player swings melee weapon. */
    WeaponSwing: Signal<{
        weapon: ItemType;
    }>;
    /** Fired when local player's melee weapon hits. */
    WeaponHit: Signal<{
        weapon: ItemType;
        hitEntity: Entity;
    }>;
    /** Fired when local player fires a projectile. */
    ProjectileLaunched: Signal<ProjectileLaunchedClientSignal>;
    ProjectileCollide: Signal<ProjectileCollideClientSignal>;
    /** Fired when a player is eliminated. */
    PlayerEliminated: Signal<{
        player: Player;
    }>;
    SpectatorTargetChanged: Signal<{
        entity: Entity;
    }>;
    EntityPickupItem: Signal<{
        entity: Entity;
        groundItem: GroundItem;
    }>;
};
