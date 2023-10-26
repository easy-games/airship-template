import { ItemType } from "@Easy/Core/Shared/Item/ItemType";
import { ItemRegistrationConfig, ItemUtil } from "@Easy/Core/Shared/Item/ItemUtil";

declare module "@Easy/Core/Shared/Item/ItemType" {
	export const enum ItemType {
		EXAMPLE_ITEM = "EXAMPLE_ITEM",
	}
}

declare module "@Easy/Core/Shared/Item/ItemMeta" {
	export interface ItemMeta {
		customField?: boolean;
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
			customField: true,
		},
		config,
	);
}
