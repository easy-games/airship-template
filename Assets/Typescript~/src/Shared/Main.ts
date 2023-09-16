import { Bootstrap } from "Imports/Core/Shared/Bootstrap/Bootstrap";
import { RunUtil } from "Imports/Core/Shared/Util/RunUtil";
import { RegisterItems } from "./Item/GameItems";

RegisterItems();

Bootstrap.PrepareVoxelWorld();
Bootstrap.Prepare();

if (RunUtil.IsServer()) {
	require("Server/Resources/TS/MainServer");
} else {
	require("Client/Resources/TS/MainClient");
}
