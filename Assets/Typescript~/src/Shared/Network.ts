import { RemoteEvent } from "Imports/Core/Shared/Network/RemoteEvent";

export const Network = {
	ClientToServer: {
		ExampleRequest: new RemoteEvent<[test: number]>(),
	},
	ServerToClient: {
		ExampleEvent: new RemoteEvent<[message: string]>(),
	},
};
