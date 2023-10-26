/// <reference types="@easy-games/types" />
/// <reference types="@easy-games/types" />
import { AllBundleItems, BundleData, BundleGroup, BundleGroupNames } from "../Util/ReferenceManagerResources";
export declare class EffectsManager {
    static SpawnPrefabEffect(path: string, worldPosition: Vector3, worldRotation: Vector3, destroyInSeconds?: number): GameObject;
    static SpawnBundleEffectById(bundleId: AllBundleItems, worldPosition: Vector3, worldRotation: Vector3, destroyInSeconds?: number): GameObject | undefined;
    static SpawnBundleEffect(bundleGroupId: BundleGroupNames, bundleId: number, effectId: number, worldPosition: Vector3, worldRotation: Vector3, destroyInSeconds?: number): GameObject | undefined;
    static SpawnBundleGroupEffect(bundleGroup: BundleGroup, bundleId: number, effectId: number, worldPosition: Vector3, worldRotation: Vector3, destroyInSeconds?: number): GameObject | undefined;
    static SpawnBundleDataEffect(bundle: BundleData, effectId: number, hitTransform: Transform | undefined, destroyInSeconds?: number): GameObject | undefined;
    static SpawnGameObjectAtPosition(template: GameObject, worldPosition: Vector3, worldEuler?: Vector3, destroyInSeconds?: number): GameObject;
    static SpawnGameObject(template: GameObject, parent?: Transform, destroyInSeconds?: number): GameObject;
    static ReleaseGameObject(go: GameObject): void;
    static SetParticleToBlockMaterial(particles: ParticleSystemRenderer, blockId: number): void;
}
