/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { Entity } from "../Entity/Entity";
import { BreakBlockMeta } from "../Item/ItemMeta";
import { Block } from "./Block";
export type BlockHitDamageFunc = (entity: Entity | undefined, block: Block, blockPos: Vector3, breakBlockMeta: BreakBlockMeta) => number;
