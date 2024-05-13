import { Airship } from "@Easy/Core/Shared/Airship";
import { Game } from "@Easy/Core/Shared/Game";

export default class CharacterSpawner extends AirshipBehaviour {
	public spawnPoint!: GameObject;

	override Start(): void {
		if (Game.IsServer()) {
			Airship.players.ObservePlayers((player) => {
				player.SpawnCharacter(this.spawnPoint.transform.position);
			});
		}
	}
}
