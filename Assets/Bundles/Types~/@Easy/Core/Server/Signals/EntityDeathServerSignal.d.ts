import { Entity } from "../../Shared/Entity/Entity";
import { EntityDamageServerSignal } from "./EntityDamageServerSignal";
export declare class EntityDeathServerSignal {
    readonly entity: Entity;
    killer: Entity | undefined;
    readonly damageEvent: EntityDamageServerSignal;
    respawnTime: number;
    constructor(entity: Entity, killer: Entity | undefined, damageEvent: EntityDamageServerSignal, respawnTime: number);
}
