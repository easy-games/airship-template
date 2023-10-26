/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/compiler-types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { GroundItem } from "../../../Shared/GroundItem/GroundItem";
import { ItemStack } from "../../../Shared/Inventory/ItemStack";
import { EntityService } from "../Entity/EntityService";
export declare class GroundItemService implements OnStart {
    private readonly entityService;
    private groundItemPrefab;
    private groundItems;
    private idCounter;
    private movingGroundItems;
    private removeMovingGroundItems;
    private idleGroundItemsByPosition;
    private groundItemsFolder;
    constructor(entityService: EntityService);
    OnStart(): void;
    private RemoveGroundItemFromTracking;
    private GetGroundItemPositionKey;
    private IsGroundItemMoving;
    private ScanForIdleItems;
    DestroyGroundItem(groundItem: GroundItem): void;
    SpawnGroundItem(itemStack: ItemStack, pos: Vector3, velocity?: Vector3, data?: Record<string, unknown>): GroundItem;
    private MakeNewID;
}
