import { Signal } from "Imports/Core/Shared/Util/Signal";

export const ClientSignals = {
	ExampleClientSignal: new Signal<[message: string]>(),
};
