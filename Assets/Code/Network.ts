import { NetworkSignal } from "@Easy/Core/Shared/Network/NetworkSignal";

/*
 * These are example remote events. They don't do anything and are just here as an example.
 */
export const Network = {
	ClientToServer: {
		HelloFromClient: new NetworkSignal<[test: number]>("HelloFromClient"),
	},
	ServerToClient: {
		HelloFromServer: new NetworkSignal<[message: string]>("HelloFromServer"),
	},
};
