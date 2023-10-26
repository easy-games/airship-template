import { AccessoryType } from "./Accessory/AccessoryType";
import { baseCharacters } from "./BaseCharacters";
export interface CharacterDefinition {
    BaseCharacter: keyof typeof baseCharacters;
    Accessories: AccessoryType[];
}
