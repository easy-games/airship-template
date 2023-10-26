import { BodyAttachment } from "./Accessory/BodyAttachment";
import { CharacterDefinition } from "./CharacterDefinition";
export declare class CharacterBuilder {
    private readonly clientId;
    private readonly characterGameObject;
    private readonly characterDef;
    private static readonly prefabCache;
    constructor(clientId: number | undefined, characterGameObject: GameObject, characterDef: CharacterDefinition);
    Build(): void;
    AddAttachment(bodyAttachment: BodyAttachment): void;
}
