export default class ExampleComponent extends AirshipBehaviour {
	override OnStart(): void {
		print("ExampleComponent.OnStart");
	}

	override OnDestroy(): void {}
}
