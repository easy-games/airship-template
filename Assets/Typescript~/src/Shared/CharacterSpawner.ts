import { Airship } from "@Easy/Core/Shared/Airship";
import { RunUtil } from "@Easy/Core/Shared/Util/RunUtil";

export default class CharacterSpawner extends AirshipBehaviour {
	public spawnPoint!: GameObject;

	override Start(): void {
		if (RunUtil.IsServer()) {
			Airship.players.ObservePlayers((player) => {
				player.SpawnCharacter(this.spawnPoint.transform.position);
			});
		}
	}
}
