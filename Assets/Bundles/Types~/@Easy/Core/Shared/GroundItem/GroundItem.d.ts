/// <reference types="@easy-games/compiler-types" />
import { ItemStack } from "../Inventory/ItemStack";
export declare class GroundItem {
    readonly id: number;
    readonly itemStack: ItemStack;
    readonly rb: Rigidbody;
    readonly pickupTime: number;
    data: Record<string, unknown>;
    constructor(id: number, itemStack: ItemStack, rb: Rigidbody, pickupTime: number, data: Record<string, unknown>);
    SetData(key: string, value: unknown): void;
    GetData<T>(key: string): T | undefined;
}
