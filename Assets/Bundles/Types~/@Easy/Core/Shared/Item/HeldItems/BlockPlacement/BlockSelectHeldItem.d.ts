/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { BlockSelectController } from "../../../../Client/Controllers/BlockInteractions/BlockSelectController";
import { HeldItem } from "../HeldItem";
export declare class BlockSelectHeldItem extends HeldItem {
    private bin;
    protected blockSelect?: BlockSelectController;
    OnEquip(): void;
    OnUnEquip(): void;
    protected OnBlockSelect(selectedPos: Vector3 | undefined, placedPos: Vector3 | undefined, highlightedPos: Vector3 | undefined): void;
    protected CanUseBlock(selectedPos: Vector3 | undefined, placedPos: Vector3 | undefined, highlightedPos: Vector3 | undefined): boolean;
}
