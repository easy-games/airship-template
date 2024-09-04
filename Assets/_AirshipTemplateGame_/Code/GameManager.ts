import { Airship } from "@Easy/Core/Shared/Airship";
import { Game } from "@Easy/Core/Shared/Game";

export default class GameManager extends AirshipBehaviour {
	override Start(): void {
		if (Game.IsClient()) {
			Airship.LoadingScreen.FinishLoading();
		}
	}

	override OnDestroy(): void {}
}
