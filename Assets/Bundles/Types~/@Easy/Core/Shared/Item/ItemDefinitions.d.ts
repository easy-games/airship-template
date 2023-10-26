/// <reference types="@easy-games/compiler-types" />
import { ItemMeta } from "./ItemMeta";
import { ItemType } from "./ItemType";
export declare const items: {
    [key in ItemType]: Omit<ItemMeta, "id" | "itemType">;
};
