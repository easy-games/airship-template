import { Signal } from "Imports/Core/Shared/Util/Signal";

export const ServerSignals = {
	ExampleServerSignal: new Signal<[message: string]>(),
};
