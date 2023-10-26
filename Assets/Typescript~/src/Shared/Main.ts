import { Bootstrap } from "@Easy/Core/Shared/Bootstrap/Bootstrap";
import { RunUtil } from "@Easy/Core/Shared/Util/RunUtil";
import { RegisterItems } from "./Item/GameItems";

RegisterItems();

Bootstrap.PrepareVoxelWorld();
Bootstrap.Prepare();

if (RunUtil.IsServer()) {
	require("Server/Resources/TS/MainServer");
} else {
	require("Client/Resources/TS/MainClient");
}
