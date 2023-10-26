/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { ItemType } from "../Item/ItemType";
/** Generator pickup range. */
export declare const GENERATOR_PICKUP_RANGE = 1.5;
/** Describes a generator. */
export interface GeneratorCreationConfig {
    /** The type of item a generator produces. */
    item: ItemType;
    /** How many `GeneratorConfig.item`s can accumulate on generator before production ceases. */
    stackLimit: number;
    /** Spawn rate in seconds. How often a generator produces `GeneratorConfig.item`. */
    spawnRate: number;
    /**
     * If this field is set, all players _near_ (see `GeneratorConfig.split.splitRange`)
     * a generator will recieve loot.
     */
    split?: {
        /** How far away a player can be from a generator to recieve loot. */
        range: number;
    };
    /** If this field is set, generator will have a world-space label above it. */
    nameLabel?: boolean;
    spawnTimeLabel?: boolean;
}
/** Describes a generator's state. */
export interface GeneratorDto {
    /** Generator position. */
    readonly pos: Vector3;
    /** Generator id. */
    readonly id: string;
    /** The type of item a generator produces. */
    readonly item: ItemType;
    /** If this field is set, generator will have a world-space label above it. */
    readonly nameLabel?: boolean;
    readonly spawnTimeLabel?: boolean;
    startSpawnTime: number;
    spawnRate: number;
}
