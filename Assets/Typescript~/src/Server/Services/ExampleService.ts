import { OnStart, Service } from "@easy-games/flamework-core";
import { CoreServerSignals } from "@Easy/Core/Server/CoreServerSignals";
import { EntityService } from "@Easy/Core/Server/Services/Entity/EntityService";
import { EntityPrefabType } from "@Easy/Core/Shared/Entity/EntityPrefabType";
import { SignalPriority } from "@Easy/Core/Shared/Util/Signal";
import { SetTimeout } from "@Easy/Core/Shared/Util/Timer";

@Service({})
export class ExampleService implements OnStart {
	constructor(private readonly entityService: EntityService) {}

	OnStart(): void {
		print("Hello from server.");

		const spawnPosition = GameObject.Find("SpawnLocation").transform.position;

		CoreServerSignals.PlayerJoin.Connect((event) => {
			this.entityService.SpawnEntityForPlayer(event.player, EntityPrefabType.HUMAN, spawnPosition);
		});

		CoreServerSignals.EntityDeath.ConnectWithPriority(SignalPriority.MONITOR, (event) => {
			if (event.entity.player) {
				SetTimeout(event.respawnTime, () => {
					this.entityService.SpawnEntityForPlayer(event.entity.player, EntityPrefabType.HUMAN, spawnPosition);
				});
			}
		});
	}
}
