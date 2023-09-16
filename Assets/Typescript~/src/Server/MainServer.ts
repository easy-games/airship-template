import { Flamework } from "@easy-games/flamework-core";
import { Bootstrap } from "Imports/Core/Shared/Bootstrap/Bootstrap";

print("Setting up game...");

Flamework.AddPath("assets/bundles/server/resources/ts/services", "^.*service.lua$");
Flamework.Ignite();

Bootstrap.FinishedSetup();

// Hack to allow require(). Will remove eventually.
export = { _: true };
