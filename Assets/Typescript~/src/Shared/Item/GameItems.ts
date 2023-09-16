import { ItemType } from "Core/Shared/Item/ItemType";
import { ItemRegistrationConfig, ItemUtil } from "Imports/Core/Shared/Item/ItemUtil";
import { BundleGroupNames } from "Imports/Core/Shared/Util/ReferenceManagerResources";

declare module "Core/Shared/Item/ItemType" {
	export const enum ItemType {
		EXAMPLE_ITEM = "EXAMPLE_ITEM",
	}
}

export function RegisterItems() {
	const config: ItemRegistrationConfig = {
		accessoryFolder: "Shared/Resources/Accessories",
	};
	ItemUtil.RegisterItem(
		ItemType.EXAMPLE_ITEM,
		{
			displayName: "Example Item",
			itemAssets: {
				assetBundleId: BundleGroupNames.ItemSword,
			},
		},
		config,
	);
}
