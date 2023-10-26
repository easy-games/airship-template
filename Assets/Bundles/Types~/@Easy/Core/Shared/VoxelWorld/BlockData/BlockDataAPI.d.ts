/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/compiler-types" />
export declare enum CoreBlockMetaKeys {
    CAN_BREAK = "canBreak",
    CURRENT_HEALTH = "health"
}
export declare class BlockDataAPI {
    private static blockDataMap;
    /**
     * Some prefab blocks take up more than 1x1x1 space (for example: a bed.)
     * This map is a child fake block that points to the source block position.
     */
    private static childBlockRedirectMap;
    private static parentToChildrenMap;
    static Init(): void;
    static SetBlockData(blockPos: Vector3, key: string, data: unknown, notifyClient?: boolean): void;
    static PrintAllBlockData(): void;
    static SetBlockGroupData(blockPositions: Vector3[], key: string, data: unknown[]): void;
    static ClearBlockData(blockPos: Vector3): void;
    static GetBlockData<T>(blockPos: Vector3, key: string): T | undefined;
    static GetParentBlockPos(childPos: Vector3): Vector3 | undefined;
    static GetChildrenBlockPos(parentPos: Vector3): Set<Vector3>;
    static SetChildOfParent(childPos: Vector3, parentPos: Vector3): void;
}
