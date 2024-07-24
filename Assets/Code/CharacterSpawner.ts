import { Airship } from "@Easy/Core/Shared/Airship";
import Character from "@Easy/Core/Shared/Character/Character";
import { Game } from "@Easy/Core/Shared/Game";

export default class CharacterSpawner extends AirshipBehaviour {
	public spawnLocation!: Transform;

	override Start(): void {
		if (Game.IsServer()) {
			// Fired when players join the game
			Airship.Players.ObservePlayers((player) => {
				player.SpawnCharacter(this.spawnLocation.position);
			});

			// Fired whenever a character dies
			Airship.Damage.onDeath.Connect((damageInfo) => {
				const character = damageInfo.gameObject.GetAirshipComponent<Character>();
				if (character?.player) {
					character.player.SpawnCharacter(this.spawnLocation.position);
				}
			});

			// Die to void
			task.spawn(() => {
				while (true) {
					task.wait(0.1);
					for (let character of Airship.Characters.GetCharacters()) {
						if (character.IsAlive() && character.transform.position.y < -10) {
							Airship.Damage.InflictDamage(character.gameObject, math.huge);
						}
					}
				}
			});
		}
	}
}
