/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Signal } from "../../../Shared/Util/Signal";
import { EntityController } from "../Entity/EntityController";
export declare class BlockSelectController implements OnStart {
    private readonly entityController;
    private highlightGO;
    SelectedBlockPosition?: Vector3;
    HighlightBlockPosition?: Vector3;
    PlaceBlockPosition?: Vector3;
    IsVoidPlacement: boolean;
    highlightOnPlacement: boolean;
    private voidPlane;
    private enabledCount;
    private lastVoidPlaceTime;
    private highlightEnabled;
    private isHighlighting;
    OnNewBlockSelected: Signal<{
        selectedPos: Vector3 | undefined;
        placedPos: Vector3 | undefined;
        highlightedPos: Vector3 | undefined;
    }>;
    constructor(entityController: EntityController);
    OnStart(): void;
    ToggleHighlight(enable: boolean): void;
    private Highlight;
    private CalcSelectedBlock;
    private TryMouseSelect;
    private TryVoidSelect;
    private UpdatePositions;
    private ResetVariables;
    Enable(): void;
    private DisableAll;
    Disable(): void;
    PlacedVoidBridgeBlock(): void;
}
