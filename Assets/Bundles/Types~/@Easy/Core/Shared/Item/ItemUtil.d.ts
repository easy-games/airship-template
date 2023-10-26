/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
import { ItemMeta } from "./ItemMeta";
import { ItemType } from "./ItemType";
export interface ItemRegistrationConfig {
    accessoryFolder?: string;
}
/**
 * Set of utilities for working with items.
 */
export declare class ItemUtil {
    static readonly DefaultAccessoryCollectionPath = "@Easy/Core/Shared/Resources/Accessories/Kits/GothGirl/Kit_GothGirl_Collection.asset";
    static readonly DefaultItemPath = "@Easy/Core/Shared/Resources/Accessories/missing_item.asset";
    private static readonly itemAccessories;
    private static readonly blockIdToItemType;
    private static readonly itemIdToItemType;
    static missingItemAccessory: Accessory;
    static defaultKitAccessory: AccessoryCollection | undefined;
    private static itemTypes;
    private static initialized;
    private static onInitialized;
    /**
     * Called by Core.
     */
    static Initialize(): void;
    static WaitForInitialized(): Promise<void>;
    static RegisterItem(itemType: ItemType, itemDefinition: Omit<ItemMeta, "id" | "itemType">, config?: ItemRegistrationConfig): void;
    static GetItemTypeFromBlockId(blockId: number): ItemType | undefined;
    static GetItemTypeFromItemId(itemId: number): ItemType | undefined;
    static GetItemMeta(itemType: ItemType): ItemMeta;
    static GetFirstAccessoryForItemType(itemType: ItemType): Accessory;
    static GetAccessoriesForItemType(itemType: ItemType): Readonly<Accessory[]>;
    static IsItemType(s: string): boolean;
    /**
     * Fetch a render texture for a provided item.
     * @param itemType An item.
     * @returns Render texture that corresponds to item.
     */
    static GetItemRenderTexture(itemType: ItemType): Texture2D;
    /**
     * Fetch an asset bundle item render path for a provided item.
     * @param itemType An item.
     * @returns Render path that corresponds to item.
     */
    static GetItemRenderPath(itemType: ItemType): string;
    /**
     * Checks whether or not an item is a resource.
     * @param itemType An item.
     * @returns Whether or not item is a resource.
     */
    static IsResource(itemType: ItemType): boolean;
    static GetItemTypes(): ItemType[];
}
