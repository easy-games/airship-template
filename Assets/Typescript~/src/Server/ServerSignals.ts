import { Signal } from "@Easy/Core/Shared/Util/Signal";

export const ServerSignals = {
	ExampleServerSignal: new Signal<[message: string]>(),
};
