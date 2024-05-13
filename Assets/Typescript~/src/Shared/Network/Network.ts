import { RemoteEvent } from "@Easy/Core/Shared/Network/RemoteEvent";

export const Network = {
	ClientToServer: {
		HelloFromClient: new RemoteEvent<[test: number]>("HelloFromClient"),
	},
	ServerToClient: {
		HelloFromServer: new RemoteEvent<[message: string]>("HelloFromServer"),
	},
};
