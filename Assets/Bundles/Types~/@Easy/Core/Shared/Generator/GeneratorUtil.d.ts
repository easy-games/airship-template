/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { GeneratorDto } from "./GeneratorMeta";
/** Set of utilities pertaining to generators. */
export declare class GeneratorUtil {
    /**
     * Check if an entity position is in pick up range of generator stack.
     * @param generatorStateDto A generator state.
     * @param entityPosition Position of entity querying generator.
     * @returns Whether or not entity is close enough to pick up generator stack.
     */
    static CanPickupGeneratorStack(generatorStateDto: GeneratorDto, entityPosition: Vector3): boolean;
}
