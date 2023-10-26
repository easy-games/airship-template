/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { EntityController } from "../Entity/EntityController";
import { InventoryController } from "../Inventory/InventoryController";
import { BlockSelectController } from "./BlockSelectController";
export declare class BlockHealthController implements OnStart {
    private readonly invController;
    private readonly blockSelectController;
    private readonly entityController;
    private blockHealthBars;
    HEALTHBAR_EXPIRE_TIME: number;
    constructor(invController: InventoryController, blockSelectController: BlockSelectController, entityController: EntityController);
    OnStart(): void;
    VisualizeBlockHealth(blockPos: Vector3, showHealthbar?: boolean): number | undefined;
    VisualizeBlockBreak(blockPos: Vector3, blockId: number, showHealthbars?: boolean): void;
    SetParticlesToBlockMaterial(blockId: number, effect: GameObject): void;
    private GetBlockHealth;
    private AddHealthBar;
    private RemoveHealthBar;
    private DeleteHealthBar;
}
