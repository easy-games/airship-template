import { Flamework } from "@easy-games/flamework-core";

Flamework.AddPath("assets/bundles/server/resources/ts/services", "^.*service.lua$");
Flamework.Ignite();

// Hack to allow require(). Will remove eventually.
export = { _: true };
