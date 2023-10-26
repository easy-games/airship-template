/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { GeneratorCreationConfig } from "../../../Shared/Generator/GeneratorMeta";
import { GeneratorState } from "./GeneratorState";
export declare class GeneratorService implements OnStart {
    /** Generator id counter. */
    private generatorIdCounter;
    /** Mapping of generator id to `GeneratorStateDto`. */
    private generatorMap;
    /** Mapping of generator id to `ItemStack`. */
    private stackMap;
    constructor();
    OnStart(): void;
    /**
     * Creates a generator at `generatorPosition` based on `generatorConfig`.
     * @param pos The position to create generator at.
     * @param config Generator config.
     * @returns Generator id.
     */
    CreateGenerator(pos: Vector3, config: GeneratorCreationConfig): string;
    /**
     * Fetch a generator by generator id.
     * @param generatorId A generator id.
     * @returns Generator state dto.
     */
    GetGeneratorById(generatorId: string): GeneratorState | undefined;
    /** Generates and returns a unique generator id. */
    private GenerateGeneratorId;
    /** Ticks a generator on server. */
    private TickGenerator;
    /**
     * Set generator spawn rate based on generator id.
     * @param generatorId A generator id.
     * @param newSpawnRate New spawn rate in seconds.
     */
    UpdateGeneratorSpawnRateById(generatorId: string, newSpawnRate: number): void;
    /**
     * @returns All `GeneratorStateDto`s on server.
     */
    GetAllGenerators(): GeneratorState[];
}
