import { RunUtil } from "@Easy/Core/Shared/Util/RunUtil";
import { RegisterItems } from "./Item/GameItems";

RegisterItems();

if (RunUtil.IsServer()) {
	require("Server/Resources/TS/MainServer");
} else {
	require("Client/Resources/TS/MainClient");
}
