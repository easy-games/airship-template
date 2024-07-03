import { NetworkSignal } from "@Easy/Core/Shared/Network/NetworkSignal";

/*
 * These are example remote events. They haven't been hooked up to anything yet.
 */
export const Network = {
	ClientToServer: {
		HelloFromClient: new NetworkSignal<[test: number]>("HelloFromClient"),
	},
	ServerToClient: {
		HelloFromServer: new NetworkSignal<[message: string]>("HelloFromServer"),
	},
};
