/// <reference types="@easy-games/compiler-types" />
/// <reference types="@easy-games/compiler-types" />
export interface BundleGroup {
    id: BundleGroupNames;
    bundles: Map<number, BundleData>;
}
export interface BundleData {
    id: Number;
    filePaths: Map<number, string>;
}
export declare enum Bundle_Blocks_UI {
    NONE = -1,
    HealthBar = 0
}
export declare enum Bundle_Blocks_VFX {
    NONE = -1,
    OnHit = 0,
    OnDeath = 1,
    OnHitFire = 2
}
export declare enum Bundle_Blocks {
    NONE = -1,
    UI = 0,
    VFX = 1
}
export declare enum Bundle_Entity_OnHit {
    NONE = -1,
    GenericVFX = 0,
    DeathVFX = 1,
    DeathVoidVFX = 2,
    FlinchAnimFPS = 3,
    DeathAnimFPS = 4,
    FlinchAnimTP = 5,
    DeathAnimTP = 6
}
export declare enum Bundle_Entity_Movement {
    NONE = -1,
    SprintTrail = 0,
    LandVFX = 1,
    JumpSFX = 2,
    LandSFX = 3,
    SlideSFX0 = 4,
    SlideSFX1 = 5,
    SlideSFX2 = 6,
    SlideSFX3 = 7,
    SlideSFXLoop = 8
}
export declare enum Bundle_Entity {
    NONE = -1,
    OnHit = 0,
    Movement = 1
}
export declare enum Bundle_ItemBlock_FirstPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use01 = 3
}
export declare enum Bundle_ItemBlock_ThirdPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use = 3
}
export declare enum Bundle_ItemBlock_Prefabs {
    NONE = -1
}
export declare enum Bundle_ItemBlock_SFX {
    NONE = -1,
    Equip = 0
}
export declare enum Bundle_ItemBlock {
    NONE = -1,
    FirstPerson = 0,
    ThirdPerson = 1,
    Prefabs = 2,
    SFX = 3
}
export declare enum Bundle_ItemBow_FirstPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Charge = 3,
    Shoot = 4
}
export declare enum Bundle_ItemBow_ThirdPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Charge = 3,
    Shoot = 4
}
export declare enum Bundle_ItemBow_Prefabs {
    NONE = -1
}
export declare enum Bundle_ItemBow_SFX {
    NONE = -1,
    Equip = 0,
    Charge = 1
}
export declare enum Bundle_ItemBow {
    NONE = -1,
    FirstPerson = 0,
    ThirdPerson = 1,
    Prefabs = 2,
    SFX = 3
}
export declare enum Bundle_ItemPickaxe_FirstPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use01 = 3
}
export declare enum Bundle_ItemPickaxe_ThirdPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use = 3
}
export declare enum Bundle_ItemPickaxe_Prefabs {
    NONE = -1,
    OnUse = 0,
    OnHit = 1
}
export declare enum Bundle_ItemPickaxe {
    NONE = -1,
    FirstPerson = 0,
    ThirdPerson = 1,
    Prefabs = 2
}
export declare enum Bundle_ItemSword_FirstPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use01 = 3
}
export declare enum Bundle_ItemSword_ThirdPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use = 3
}
export declare enum Bundle_ItemSword_Prefabs {
    NONE = -1,
    OnUse = 0,
    OnHit = 1
}
export declare enum Bundle_ItemSword_SFX {
    NONE = -1,
    Equip = 0
}
export declare enum Bundle_ItemSword {
    NONE = -1,
    FirstPerson = 0,
    ThirdPerson = 1,
    Prefabs = 2,
    SFX = 3
}
export declare enum Bundle_ItemThrowable_FirstPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Charge = 3,
    Throw = 4
}
export declare enum Bundle_ItemThrowable_ThirdPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Charge = 3,
    Throw = 4
}
export declare enum Bundle_ItemThrowable {
    NONE = -1,
    FirstPerson = 0,
    ThirdPerson = 1
}
export declare enum Bundle_ItemUnarmed_FirstPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use01 = 3
}
export declare enum Bundle_ItemUnarmed_ThirdPerson {
    NONE = -1,
    Idle = 0,
    Equip = 1,
    UnEquip = 2,
    Use = 3
}
export declare enum Bundle_ItemUnarmed_Prefabs {
    NONE = -1
}
export declare enum Bundle_ItemUnarmed_SFX {
    NONE = -1,
    Equip = 0
}
export declare enum Bundle_ItemUnarmed {
    NONE = -1,
    FirstPerson = 0,
    ThirdPerson = 1,
    Prefabs = 2,
    SFX = 3
}
export declare enum Bundle_HeldItem_OnUse {
    NONE = -1,
    SwordSwing = 0
}
export declare enum Bundle_HeldItem_OnHit {
    NONE = -1,
    SwordHit = 0
}
export declare enum Bundle_HeldItem {
    NONE = -1,
    OnUse = 0,
    OnHit = 1
}
export declare enum Bundle_Projectiles_OnHitVFX {
    NONE = -1,
    ArrowHit = 0,
    FireballExplosion = 1
}
export declare enum Bundle_Projectiles {
    NONE = -1,
    OnHitVFX = 0
}
export declare enum AllBundleItems {
    NONE = -1,
    Blocks_UI_HealthBar = "@Easy/Core/Client/Resources/Prefabs/BlockHealthbarCanvas.prefab",
    Blocks_VFX_OnHit = "@Easy/Core/Shared/Resources/Prefabs/VFX/Blocks/OnBlockHitVFX.prefab",
    Blocks_VFX_OnDeath = "@Easy/Core/Shared/Resources/Prefabs/VFX/Blocks/OnBlockDeathVFX.prefab",
    Blocks_VFX_OnHitFire = "@Easy/Core/Shared/Resources/Prefabs/VFX/Blocks/OnBlockHitFireVFX.prefab",
    Entity_OnHit_GenericVFX = "@Easy/Core/Shared/Resources/Prefabs/VFX/Entity/OnHit/EntityOnHitVFX.prefab",
    Entity_OnHit_DeathVFX = "@Easy/Core/Shared/Resources/Prefabs/VFX/Entity/OnHit/EntityOnDeathVFX.prefab",
    Entity_OnHit_DeathVoidVFX = "@Easy/Core/Shared/Resources/Prefabs/VFX/Entity/OnHit/EntityOnDeathVoidVFX.prefab",
    Entity_OnHit_FlinchAnimFPS = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/OnHit/Armature_FPS_Flinch.anim",
    Entity_OnHit_DeathAnimFPS = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/OnHit/Armature_FPS_Death.anim",
    Entity_OnHit_FlinchAnimTP = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/OnHit/Armature_TP_Flinch.anim",
    Entity_OnHit_DeathAnimTP = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/OnHit/Armature_TP_Death.anim",
    Entity_Movement_SprintTrail = "@Easy/Core/Shared/Resources/Prefabs/VFX/Entity/Movement/SprintVFX.prefab",
    Entity_Movement_LandVFX = "@Easy/Core/Shared/Resources/Prefabs/VFX/Entity/Movement/LandingVFX.prefab",
    Entity_Movement_JumpSFX = "@Easy/Core/Shared/Resources/Sound/Movement/JumpStart.ogg",
    Entity_Movement_LandSFX = "@Easy/Core/Shared/Resources/Sound/Movement/JumpLand.ogg",
    Entity_Movement_SlideSFX0 = "@Easy/Core/Shared/Resources/Sound/Movement/s_Movement_Slide_Start_01.wav",
    Entity_Movement_SlideSFX1 = "@Easy/Core/Shared/Resources/Sound/Movement/s_Movement_Slide_Start_02.wav",
    Entity_Movement_SlideSFX2 = "@Easy/Core/Shared/Resources/Sound/Movement/s_Movement_Slide_Start_03.wav",
    Entity_Movement_SlideSFX3 = "@Easy/Core/Shared/Resources/Sound/Movement/s_Movement_Slide_Start_04.wav",
    Entity_Movement_SlideSFXLoop = "@Easy/Core/Shared/Resources/Sound/Movement/s_Movement_Slide_Loop.wav",
    ItemBlock_FirstPerson_Idle = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Idle.anim",
    ItemBlock_FirstPerson_Equip = "",
    ItemBlock_FirstPerson_UnEquip = "",
    ItemBlock_FirstPerson_Use01 = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Use.anim",
    ItemBlock_ThirdPerson_Idle = "",
    ItemBlock_ThirdPerson_Equip = "",
    ItemBlock_ThirdPerson_UnEquip = "",
    ItemBlock_ThirdPerson_Use = "",
    ItemBlock_SFX_Equip = "@Easy/Core/Shared/Resources/Sound/Items/Equip/Equip_Generic.ogg",
    ItemBow_FirstPerson_Idle = "",
    ItemBow_FirstPerson_Equip = "",
    ItemBow_FirstPerson_UnEquip = "",
    ItemBow_FirstPerson_Charge = "",
    ItemBow_FirstPerson_Shoot = "",
    ItemBow_ThirdPerson_Idle = "",
    ItemBow_ThirdPerson_Equip = "",
    ItemBow_ThirdPerson_UnEquip = "",
    ItemBow_ThirdPerson_Charge = "",
    ItemBow_ThirdPerson_Shoot = "",
    ItemBow_SFX_Equip = "@Easy/Core/Shared/Resources/Sound/Items/Equip/Equip_Bow.ogg",
    ItemBow_SFX_Charge = "@Easy/Core/Shared/Resources/Sound/Items/Bow/Bow_Charge.ogg",
    ItemPickaxe_FirstPerson_Idle = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Idle.anim",
    ItemPickaxe_FirstPerson_Equip = "",
    ItemPickaxe_FirstPerson_UnEquip = "",
    ItemPickaxe_FirstPerson_Use01 = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Use.anim",
    ItemPickaxe_ThirdPerson_Idle = "",
    ItemPickaxe_ThirdPerson_Equip = "",
    ItemPickaxe_ThirdPerson_UnEquip = "",
    ItemPickaxe_ThirdPerson_Use = "",
    ItemPickaxe_Prefabs_OnUse = "@Easy/Core/Shared/Resources/Prefabs/VFX/Items/Sword/SwordSwingFX.prefab",
    ItemPickaxe_Prefabs_OnHit = "@Easy/Core/Shared/Resources/Prefabs/VFX/Items/Sword/SwordHitFX.prefab",
    ItemSword_FirstPerson_Idle = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Idle.anim",
    ItemSword_FirstPerson_Equip = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Idle.anim",
    ItemSword_FirstPerson_UnEquip = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Idle.anim",
    ItemSword_FirstPerson_Use01 = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Use.anim",
    ItemSword_ThirdPerson_Idle = "",
    ItemSword_ThirdPerson_Equip = "",
    ItemSword_ThirdPerson_UnEquip = "",
    ItemSword_ThirdPerson_Use = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/FP_Sword_Use.anim",
    ItemSword_Prefabs_OnUse = "@Easy/Core/Shared/Resources/Prefabs/VFX/Items/Sword/SwordSwingFX.prefab",
    ItemSword_Prefabs_OnHit = "@Easy/Core/Shared/Resources/Prefabs/VFX/Items/Sword/SwordHitFX.prefab",
    ItemSword_SFX_Equip = "@Easy/Core/Shared/Resources/Sound/Items/Equip/Equip_Sword.ogg",
    ItemThrowable_FirstPerson_Idle = "",
    ItemThrowable_FirstPerson_Equip = "",
    ItemThrowable_FirstPerson_UnEquip = "",
    ItemThrowable_FirstPerson_Charge = "",
    ItemThrowable_FirstPerson_Throw = "",
    ItemThrowable_ThirdPerson_Idle = "",
    ItemThrowable_ThirdPerson_Equip = "",
    ItemThrowable_ThirdPerson_UnEquip = "",
    ItemThrowable_ThirdPerson_Charge = "",
    ItemThrowable_ThirdPerson_Throw = "",
    ItemUnarmed_FirstPerson_Idle = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/FPS_HIdden.anim",
    ItemUnarmed_FirstPerson_Equip = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/FPS_HIdden.anim",
    ItemUnarmed_FirstPerson_UnEquip = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/FPS_HIdden.anim",
    ItemUnarmed_FirstPerson_Use01 = "@Easy/Core/Shared/Resources/Entity/HumanEntity/HumanAnimations/Root/FPS_HIdden.anim",
    ItemUnarmed_ThirdPerson_Idle = "",
    ItemUnarmed_ThirdPerson_Equip = "",
    ItemUnarmed_ThirdPerson_UnEquip = "",
    ItemUnarmed_ThirdPerson_Use = "",
    ItemUnarmed_SFX_Equip = "@Easy/Core/Shared/Resources/Sound/Items/Equip/Equip_Generic.ogg",
    HeldItem_OnUse_SwordSwing = "@Easy/Core/Shared/Resources/Prefabs/VFX/Items/Sword/SwordSwingFX.prefab",
    HeldItem_OnHit_SwordHit = "@Easy/Core/Shared/Resources/Prefabs/VFX/Items/Sword/SwordHitFX.prefab",
    Projectiles_OnHitVFX_ArrowHit = "@Easy/Core/Shared/Resources/Prefabs/VFX/Projectiles/OnArrowHitVfx.prefab",
    Projectiles_OnHitVFX_FireballExplosion = "@Easy/Core/Shared/Resources/Accessories/Weapons/Fireball/FireballOnHitVFX.prefab"
}
export declare enum BundleGroupNames {
    NONE = -1,
    Blocks = 0,
    Entity = 1,
    ItemBlock = 2,
    ItemBow = 3,
    ItemPickaxe = 4,
    ItemSword = 5,
    ItemThrowable = 6,
    ItemUnarmed = 7,
    HeldItem = 8,
    Projectiles = 9
}
export declare class ReferenceManagerAssets {
    static readonly Blocks: BundleGroup;
    static readonly Entity: BundleGroup;
    static readonly ItemBlock: BundleGroup;
    static readonly ItemBow: BundleGroup;
    static readonly ItemPickaxe: BundleGroup;
    static readonly ItemSword: BundleGroup;
    static readonly ItemThrowable: BundleGroup;
    static readonly ItemUnarmed: BundleGroup;
    static readonly HeldItem: BundleGroup;
    static readonly Projectiles: BundleGroup;
    static readonly bundleGroups: Map<number, BundleGroup>;
}
