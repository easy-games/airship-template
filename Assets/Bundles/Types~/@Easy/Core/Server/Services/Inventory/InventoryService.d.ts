/// <reference types="@easy-games/compiler-types" />
import { OnStart } from "../../../../node_modules/@easy-games/flamework-core";
import { Inventory } from "../../../Shared/Inventory/Inventory";
interface InventoryEntry {
    Inv: Inventory;
    Viewers: Set<number>;
    Owners: Set<number>;
}
export declare class InventoryService implements OnStart {
    private inventories;
    private invIdCounter;
    OnStart(): void;
    private SwapSlots;
    GetInvEntry(inventory: Inventory): InventoryEntry;
    GetInventoryFromId(id: number): Inventory | undefined;
    Subscribe(clientId: number, inventory: Inventory, owner: boolean): void;
    Unsubscribe(clientId: number, inventory: Inventory): void;
    MakeInventory(): Inventory;
}
export {};
