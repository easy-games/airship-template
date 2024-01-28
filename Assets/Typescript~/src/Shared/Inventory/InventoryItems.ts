import { ItemType } from "@Easy/Core/Shared/Item/ItemType";
import { ItemRegistrationConfig, ItemUtil } from "@Easy/Core/Shared/Item/ItemUtil";

// Create custom ItemTypes
declare module "@Easy/Core/Shared/Item/ItemType" {
	export const enum ItemType {
		EXAMPLE_ITEM = "EXAMPLE_ITEM",
	}
}

// Add custom fields to ItemMeta
declare module "@Easy/Core/Shared/Item/ItemDefinitionTypes" {
	export interface ItemDef {
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
