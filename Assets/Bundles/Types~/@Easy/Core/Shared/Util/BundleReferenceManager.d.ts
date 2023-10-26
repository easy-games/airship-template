/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
import { AllBundleItems, BundleData, BundleGroupNames } from "./ReferenceManagerResources";
export declare class BundleReferenceManager {
    static LoadResources<T>(groupId: BundleGroupNames, bundleIndex?: number): Array<T>;
    static GetPathForResource(groupId: BundleGroupNames, bundleIndex: number, itemKey: number): string;
    static LoadResource<T>(groupId: BundleGroupNames, bundleIndex: number, itemKey: number): T | undefined;
    static LoadResourcesFromBundle<T>(group: BundleData | undefined): Array<T>;
    static LoadResourceFromBundle<T>(group: BundleData | undefined, itemKey: number): T | undefined;
    static LoadResourcesFromMap<T>(filePaths: Map<number, string> | undefined): Array<T>;
    static LoadResourceFromMap<T>(filePaths: Map<number, string> | undefined, itemKey: number): T | undefined;
    static GetDirectPath(bundleId: AllBundleItems): string;
    static LoadDirectResource<T>(bundleId: AllBundleItems): T | undefined;
}
