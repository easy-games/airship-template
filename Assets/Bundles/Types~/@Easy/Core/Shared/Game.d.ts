import { CoreContext } from "./CoreClientContext";
import { Player } from "./Player/Player";
export declare class Game {
    static LocalPlayer: Player;
    static BroadcastMessage(message: string): void;
    static Context: CoreContext;
}
