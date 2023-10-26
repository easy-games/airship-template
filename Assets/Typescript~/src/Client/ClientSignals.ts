import { Signal } from "@Easy/Core/Shared/Util/Signal";

export const ClientSignals = {
	ExampleClientSignal: new Signal<[message: string]>(),
};
