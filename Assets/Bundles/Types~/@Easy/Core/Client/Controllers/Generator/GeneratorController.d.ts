import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { GeneratorDto } from "../../../Shared/Generator/GeneratorMeta";
export declare class GeneratorController implements OnStart {
    /** Generator label prefab. */
    private generatorLabelPrefab;
    /** Mapping of generator id to `GeneratorStateDto`. */
    private generatorMap;
    /**
     * Map of generators to stack root GameObject. Indicates whether or not client should delete
     * generator dropped items.
     */
    private stackedGenerators;
    /** Map of generators to text label components. */
    private generatorGameObjectMap;
    private generatorBins;
    constructor();
    OnStart(): void;
    /** Creates a generator label in world space. */
    private CreateGeneratorLabel;
    /** Update a generator text label. */
    private UpdateGeneratorTextLabel;
    /**
     * @returns All `GeneratorStateDto`s on client.
     */
    GetAllGenerators(): GeneratorDto[];
}
