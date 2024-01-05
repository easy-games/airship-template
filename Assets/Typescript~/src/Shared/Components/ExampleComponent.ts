export default class ExampleComponent extends AirshipBehaviour {
	override Start(): void {
		print("ExampleComponent.OnStart");
	}

	override OnDestroy(): void {}
}
