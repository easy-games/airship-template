import { Airship } from "@Easy/Core/Shared/Airship";
import Character from "@Easy/Core/Shared/Character/Character";
import { Game } from "@Easy/Core/Shared/Game";

export default class CharacterSpawner extends AirshipBehaviour {
	override Start(): void {
		if (Game.IsServer()) {
			// Fired when players join the game
			Airship.Players.ObservePlayers((player) => {
				player.SpawnCharacter(this.transform.position, {
					lookDirection: this.transform.forward,
				});
			});

			// Respawn characters when they die
			Airship.Damage.onDeath.Connect((damageInfo) => {
				const character = damageInfo.gameObject.GetAirshipComponent<Character>();
				character?.Despawn();
				if (character?.player) {
					character.player.SpawnCharacter(this.transform.position, {
						lookDirection: this.transform.forward,
					});
				}
			});
		}
	}
}
