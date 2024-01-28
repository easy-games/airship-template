import { Airship } from "@@Easy/Core/Shared/Airship";
import { RunUtil } from "@@Easy/Core/Shared/Util/RunUtil";

export default class GameManager extends AirshipBehaviour {
	override Start(): void {
		if (RunUtil.IsClient()) {
			Airship.loadingScreen.FinishLoading();
		}
	}

	override OnDestroy(): void {}
}
