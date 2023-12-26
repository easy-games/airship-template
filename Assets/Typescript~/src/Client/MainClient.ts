import { Dependency, Flamework } from "@easy-games/flamework-core";
import { LoadingScreenController } from "@Easy/Core/Client/Controllers/Loading/LoadingScreenController";

Flamework.AddPath("assets/bundles/client/resources/ts/controllers", "^.*controller.lua$");
Flamework.Ignite();

Dependency<LoadingScreenController>().FinishLoading();

// Hack to allow require(). Will remove eventually.
export = { _: true };
