import { Dependency, Flamework } from "@easy-games/flamework-core";
import { LoadingScreenController } from "@Easy/Core/Client/Controllers/Loading/LoadingScreenController";
import { Bootstrap } from "@Easy/Core/Shared/Bootstrap/Bootstrap";

Flamework.AddPath("assets/bundles/client/resources/ts/controllers", "^.*controller.lua$");
Flamework.Ignite();

Bootstrap.FinishedSetup();
Dependency<LoadingScreenController>().FinishLoading();

// Hack to allow require(). Will remove eventually.
export = { _: true };
