import { OnStart, Service } from "@easy-games/flamework-core";
import { CoreServerSignals } from "Imports/Core/Server/CoreServerSignals";
import { EntityService } from "Imports/Core/Server/Services/Entity/EntityService";
import { EntityPrefabType } from "Imports/Core/Shared/Entity/EntityPrefabType";

@Service({})
export class ExampleService implements OnStart {
	constructor(private readonly entityService: EntityService) {}

	OnStart(): void {
		print("Hello from server.");

		const spawnPosition = GameObject.Find("SpawnLocation").transform.position;

		CoreServerSignals.PlayerJoin.Connect((event) => {
			this.entityService.SpawnEntityForPlayer(event.player, EntityPrefabType.HUMAN, spawnPosition);
		});
	}
}
