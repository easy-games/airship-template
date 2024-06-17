import { RemoteEvent } from "@Easy/Core/Shared/Network/RemoteEvent";

/*
 * These are example remote events. They haven't been hooked up to anything yet.
 */
export const Network = {
	ClientToServer: {
		HelloFromClient: new RemoteEvent<[test: number]>("HelloFromClient"),
	},
	ServerToClient: {
		HelloFromServer: new RemoteEvent<[message: string]>("HelloFromServer"),
	},
};
