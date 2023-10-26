import { DamageType } from "../../Shared/Damage/DamageType";
import { Entity } from "../../Shared/Entity/Entity";
import { Cancellable } from "../../Shared/Util/Cancellable";
export declare class EntityDamageServerSignal extends Cancellable {
    readonly entity: Entity;
    amount: number;
    damageType: DamageType;
    fromEntity?: Entity | undefined;
    canDamageAllies?: boolean | undefined;
    constructor(entity: Entity, amount: number, damageType: DamageType, fromEntity?: Entity | undefined, canDamageAllies?: boolean | undefined);
}
