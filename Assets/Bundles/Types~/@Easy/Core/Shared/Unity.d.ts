/* eslint-disable */

/**
 * Manual typings for native Unity classes.
 *
 * Proprietary EasyEngine types belong in EasyEngine.d.ts
 */

// declare namespace task {
// 	/** Queues the calling script to be run during the parallel execution phase of the frame. */
// 	function desynchronize(): void;
// 	/** Yields the calling script and queues it for serial execution following the completion of the parallel execution phase of the frame. */
// 	function synchronize(): void;
// 	/** Defers the passed thread or function to be resumed at the end of the current resumption cycle. */
// 	function defer<T extends Array<any>>(callback: (...args: T) => void, ...args: T): thread;
// 	function defer(thread: thread, ...args: Array<unknown>): thread;
// 	/** Delays the passed thread or function until the given duration has elapsed. Resumes on engine Heartbeat. */
// 	function delay<T extends Array<any>>(duration: number, callback: (...args: T) => void, ...args: T): thread;
// 	function delay(duration: number, thread: thread, ...args: Array<unknown>): thread;
// 	/** Resumes the passed thread or function instantly using the engine's scheduler. */
// 	function spawn<T extends Array<any>>(callback: (...args: T) => void, ...args: T): thread;
// 	function spawn(thread: thread, ...args: Array<unknown>): thread;
// 	/** Delay the current thread until the given duration has elasped. Resumes on engine Heartbeat. */
// 	function wait(duration?: number): number;
// 	/** Cancels a thread, preventing it from being resumed. */
// 	function cancel(thread: thread): void;
// }

// math functions
declare namespace math {
	/** Returns a perlin noise value between -0.5 and 0.5. If you leave arguments out, they will be interpreted as zero, so math.noise(1.158) is equivalent to math.noise(1.158, 0, 0) and math.noise(1.158, 5.723) is equivalent to math.noise(1.158, 5.723, 0).
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates. For example, math.noise(1.158, 5.723) will always return 0.48397532105446 and math.noise(1.158, 6) will always return 0.15315161645412.
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5. For coordinates that are close to each other, the return values will also be close to each other. */
	function noise(x?: number, y?: number, z?: number): number;

	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}

declare namespace utf8 {
	/** Receives zero or more codepoints as integers, converts each one to its corresponding UTF-8 byte sequence and returns a string with the concatenation of all these sequences. */
	function char(...codepoints: Array<number>): string;
	/** Returns an iterator function that will iterate over all codepoints in string str. It raises an error if it meets any invalid byte sequence. */
	function codes(str: string): IterableFunction<LuaTuple<[number, number]>>;
	/** Returns the codepoints (as integers) from all codepoints in the provided string (str) that start between byte positions i and j (both included). The default for i is 0 and for j is i. It raises an error if it meets any invalid byte sequence. Similar to `string.byte`.*/
	function codepoint(str: string, i?: number, j?: number): LuaTuple<Array<number>>;
	/** Returns the number of UTF-8 codepoints in the string str that start between positions i and j (both inclusive). The default for i is 0 and for j is -1. If it finds any invalid byte sequence, returns a false value plus the position of the first invalid byte. */
	function len(s: string, i?: number, j?: number): LuaTuple<[number, undefined] | [false, number]>;
	/** Returns the position (in bytes) where the encoding of the n-th codepoint of s (counting from byte position i) starts. A negative n gets characters before position i. The default for i is 0 when n is non-negative and #s + 1 otherwise, so that utf8.offset(s, -n) gets the offset of the n-th character from the end of the string. If the specified character is neither in the subject nor right after its end, the function returns nil. */
	function offset(s: string, n: number, i?: number): number | undefined;
	/** Returns an iterator function that will iterate the grapheme clusters of the string. */
	function graphemes(s: string, i?: number, j?: number): IterableFunction<LuaTuple<[number, number]>>;
	/** Converts the input string to Normal Form C, which tries to convert decomposed characters into composed characters. */
	function nfcnormalize(str: string): string;
	/** Converts the input string to Normal Form D, which tries to break up composed characters into decomposed characters. */
	function nfdnormalize(str: string): string;
	/** The pattern which matches exactly one UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string. */
	const charpattern: "[%z\x01-\x7F\xC2-\xF4][\x80-\xBF]*";
}

/** Yields the current thread until the specified amount of seconds have elapsed.
The delay will have a minimum duration of 29 milliseconds, but this minimum may be higher depending on the target framerate and various throttling conditions. If the seconds parameter is not specified, the minimum duration will be used.
This function returns:
Actual time yielded (in seconds)
Total time since the software was initialized (in seconds) */

/** Waits for a single frame. */
declare function wait(duration?: number): void;
/** Behaves identically to Lua’s print function, except the output is styled as a warning, with yellow text and a timestamp.
This function accepts any number of arguments, and will attempt to convert them into strings which will then be joined together with spaces between them. */
declare function warn(...params: Array<unknown>): void;

declare function tick(): number;
/** Time since the game started running. Will be 0 in Studio when not running the game. */
declare function time(): number;

declare namespace System {
	namespace IO {
		enum SearchOption {
			TopDirectoryOnly,
			AllDirectories,
		}
	}
	export class Guid {
		public static NewGuid(): Guid;
		public ToString(): string;
	}
}

// interface CSDictionary<Key, Value> {
// 	Keys: CSArray<Key>;
// 	Values: CSArray<Value>;
// 	Count: number;
//     [Key in Key]: Value;
// }

interface EasyFileServiceConstructor {
	GetFilesInPath(path: string, searchPattern?: string): CSArray<string>;
	GetEasyAssetPath(obj: Object): string;
}
declare const EasyFileService: EasyFileServiceConstructor;

declare function require(path: string): unknown;

interface CinemachineVirtualCamera extends Component {
	Follow: Transform;
}

interface Object {
	name: string;
	hideFlags: HideFlags;

	Equals(other: unknown): boolean;
	GetHashCode(): number;
	GetInstanceID(): number;
	ToString(): string;
}
interface ObjectConstructor {
	Destroy(obj: Object, t: number): void;
	Destroy(obj: Object): void;
	DestroyImmediate(obj: Object, allowDestroyingAssets: boolean): void;
	DestroyImmediate(obj: Object): void;
	DestroyObject(obj: Object, t: number): void;
	DestroyObject(obj: Object): void;
	DontDestroyOnLoad(target: Object): void;
	FindObjectOfType<T>(): T;
	FindObjectOfType<T>(includeInactive: boolean): T;
	FindObjectOfType(type: unknown): Object;
	FindObjectOfType(type: unknown, includeInactive: boolean): Object;
	FindObjectsOfType(type: unknown): Array<Object>;
	FindObjectsOfType(type: unknown, includeInactive: boolean): Array<Object>;
	FindObjectsOfType<T>(): Array<T>;
	FindObjectsOfType<T>(includeInactive: boolean): Array<T>;
	FindObjectsOfTypeAll(type: unknown): Array<Object>;
	FindObjectsOfTypeIncludingAssets(type: unknown): Array<Object>;
	FindSceneObjectsOfType(type: unknown): Array<Object>;
	Instantiate(original: Object, position: Vector3, rotation: Quaternion): Object;
	Instantiate(original: Object, position: Vector3, rotation: Quaternion, parent: Transform): Object;
	Instantiate(original: Object): Object;
	Instantiate(original: Object, parent: Transform): Object;
	Instantiate(original: Object, parent: Transform, instantiateInWorldSpace: boolean): Object;
	Instantiate<T>(original: T): T;
	Instantiate<T>(original: T, position: Vector3, rotation: Quaternion): T;
	Instantiate<T>(original: T, position: Vector3, rotation: Quaternion, parent: Transform): T;
	Instantiate<T>(original: T, parent: Transform): T;
	Instantiate<T>(original: T, parent: Transform, worldPositionStays: boolean): T;
}
declare const Object: ObjectConstructor;

interface RenderTargetSetup {}
interface RASSettings {}
interface ComputeBufferMode {}
interface ComputeBufferType {}
interface BuiltinRenderTextureType {}

// type
interface CheckablePrimitives {
	nil: undefined;
	boolean: boolean;
	string: string;
	number: number;
	table: object;
	userdata: unknown;
	function: Callback;
	thread: thread;
	vector: Vector3;
}

/**
 * Returns the type of its only argument, coded as a string.
 * Roblox datatypes will return "userdata" when passed to this function. You should use Roblox's `typeOf()` function if you want to differentiate between Roblox datatypes.
 */
declare function type(value: unknown): keyof CheckablePrimitives;

/** The strings which can be returned by typeOf and their corresponding types */
interface CheckableTypes extends CheckablePrimitives {
	Vector2: Vector2;
	Vector3: Vector3;
}

interface GameServerObjectMeta {}

interface ListCache<T> {
	Collection: Array<T>;
	Written: number;

	constructor(): ListCache<T>;
	constructor(capacity: number): ListCache<T>;

	AddReference(): T;
	AddValue(value: T): void;
	AddValues(values: ListCache<T>): void;
	AddValues(values: Array<T>): void;
	AddValues(values: Array<T>): void;
	AddValues(values: Array<T>): void;
	AddValues(values: Array<T>): void;
	AddValues(values: Array<T>): void;
	Reset(): void;
}

// interface InputControl<TValue> extends InputControl {
// 	valueType: unknown;
// 	valueSizeInBytes: number;

// 	CompareValue(firstStatePtr: unknown, secondStatePtr: unknown): boolean;
// 	ProcessValue(value: TValue): TValue;
// 	ReadDefaultValue(): TValue;
// 	ReadUnprocessedValue(): TValue;
// 	ReadUnprocessedValueFromState(statePtr: unknown): TValue;
// 	ReadValue(): TValue;
// 	ReadValueFromBufferAsObject(buffer: unknown, bufferSize: number): unknown;
// 	ReadValueFromPreviousFrame(): TValue;
// 	ReadValueFromState(statePtr: unknown): TValue;
// 	ReadValueFromStateAsObject(statePtr: unknown): unknown;
// 	ReadValueFromStateIntoBuffer(
// 		statePtr: unknown,
// 		bufferPtr: unknown,
// 		bufferSize: number
// 	): void;
// 	WriteValueFromBufferIntoState(
// 		bufferPtr: unknown,
// 		bufferSize: number,
// 		statePtr: unknown
// 	): void;
// 	WriteValueFromObjectIntoState(value: unknown, statePtr: unknown): void;
// 	WriteValueIntoState(value: TValue, statePtr: unknown): void;
// }

interface Vector2Constructor {
	constructor(x: number, y: number): Vector2;
}

interface Vector2Control extends InputControl<Vector2> {
	x: AxisControl;
	y: AxisControl;

	constructor(): Vector2Control;

	ReadUnprocessedValueFromState(statePtr: unknown): Vector2;
	WriteValueIntoState(value: Vector2, statePtr: unknown): void;
}

interface AxisControl extends InputControl<number> {
	clamp: Clamp;
	clampMin: number;
	clampMax: number;
	clampConstant: number;
	invert: boolean;
	normalize: boolean;
	normalizeMin: number;
	normalizeMax: number;
	normalizeZero: number;
	scale: boolean;
	scaleFactor: number;

	constructor(): AxisControl;

	CompareValue(firstStatePtr: unknown, secondStatePtr: unknown): boolean;
	ReadUnprocessedValueFromState(statePtr: unknown): number;
	WriteValueIntoState(value: number, statePtr: unknown): void;
}

declare const enum TouchPhase {
	None = 0,
	Began = 1,
	Moved = 2,
	Ended = 3,
	Canceled = 4,
	Stationary = 5,
}

declare const enum Clamp {
	None = 0,
	BeforeNormalize = 1,
	AfterNormalize = 2,
	ToConstantBeforeNormalize = 3,
}

interface InputControl<TValue = unknown> {
	name: string;
	displayName: string;
	shortDisplayName: string;
	path: string;
	layout: string;
	variants: string;
	device: InputDevice;
	parent: InputControl;
	children: Array<InputControl>;
	usages: Array<InternedString>;
	aliases: Array<InternedString>;
	stateBlock: InputStateBlock;
	noisy: boolean;
	synthetic: boolean;
	Item: InputControl;
	valueType: TValue;
	valueSizeInBytes: number;

	EvaluateMagnitude(): number;
	EvaluateMagnitude(statePtr: unknown): number;

	CompareValue(firstStatePtr: unknown, secondStatePtr: unknown): boolean;
	ProcessValue(value: TValue): TValue;
	ReadDefaultValue(): TValue;
	ReadUnprocessedValue(): TValue;
	ReadUnprocessedValueFromState(statePtr: unknown): TValue;
	ReadValue(): TValue;
	ReadValueFromBufferAsObject(buffer: unknown, bufferSize: number): unknown;
	ReadValueFromPreviousFrame(): TValue;
	ReadValueFromState(statePtr: unknown): TValue;
	ReadValueFromStateAsObject(statePtr: unknown): unknown;
	ReadValueFromStateIntoBuffer(statePtr: unknown, bufferPtr: unknown, bufferSize: number): void;
	WriteValueFromBufferIntoState(bufferPtr: unknown, bufferSize: number, statePtr: unknown): void;
	WriteValueFromObjectIntoState(value: unknown, statePtr: unknown): void;
	WriteValueIntoState(value: TValue, statePtr: unknown): void;
}

interface EventCallback<TEventType, TCallbackArgs = unknown> {
	constructor(object: unknown, method: unknown): EventCallback<TEventType, TCallbackArgs>;

	BeginInvoke(evt: TEventType, userArgs: TCallbackArgs, callback: unknown, object: unknown): unknown;
	EndInvoke(result: unknown): void;
	Invoke(evt: TEventType, userArgs: TCallbackArgs): void;
}

declare class StyleLength implements IStyleValue<Length> {
	value: Length;
	keyword: StyleKeyword;

	constructor(v: Length);

	Equals(other: StyleLength): boolean;
	Equals(obj: unknown): boolean;
	GetHashCode(): number;
	ToString(): string;
}

interface Button extends TextElement {
	clickable: Clickable;

	constructor(): Button;
	constructor(clickEvent: unknown): Button;
}

interface Clickable extends PointerManipulator {
	lastMousePosition: Vector2;

	constructor(handler: unknown, delay: number, interval: number): Clickable;
	constructor(handler: unknown): Clickable;
	constructor(handler: unknown): Clickable;

	OnClicked(callback: () => void): void;
}

interface ServerManager extends MonoBehaviour {
	Clients: CSDictionary<number, NetworkConnection>;
	Started: boolean;
	Objects: ServerObjects;
	NetworkManager: NetworkManager;
	Authenticator: Authenticator;

	constructor(): ServerManager;

	Broadcast<T>(connection: NetworkConnection, message: T, requireAuthenticated: boolean, channel: Channel): void;
	Broadcast<T>(
		connections: Array<NetworkConnection>,
		message: T,
		requireAuthenticated: boolean,
		channel: Channel,
	): void;
	Broadcast<T>(networkObject: NetworkObject, message: T, requireAuthenticated: boolean, channel: Channel): void;
	Broadcast<T>(message: T, requireAuthenticated: boolean, channel: Channel): void;
	BroadcastExcept<T>(
		connections: Array<NetworkConnection>,
		excludedConnection: NetworkConnection,
		message: T,
		requireAuthenticated: boolean,
		channel: Channel,
	): void;
	BroadcastExcept<T>(
		connections: Array<NetworkConnection>,
		excludedConnections: Array<NetworkConnection>,
		message: T,
		requireAuthenticated: boolean,
		channel: Channel,
	): void;
	BroadcastExcept<T>(
		excludedConnection: NetworkConnection,
		message: T,
		requireAuthenticated: boolean,
		channel: Channel,
	): void;
	BroadcastExcept<T>(
		excludedConnections: Array<NetworkConnection>,
		message: T,
		requireAuthenticated: boolean,
		channel: Channel,
	): void;
	Despawn(go: GameObject, despawnType: unknown): void;
	Despawn(networkObject: NetworkObject, despawnType: unknown): void;
	GetAuthenticator(): Authenticator;
	RegisterBroadcast<T>(handler: unknown, requireAuthentication: boolean): void;
	SetAuthenticator(value: Authenticator): void;
	Spawn(go: GameObject, ownerConnection: NetworkConnection | undefined): void;
	Spawn(nob: NetworkObject, ownerConnection: NetworkConnection | undefined): void;
	Spawn(nob: NetworkObject, ownerConnection: NetworkConnection | undefined, synchronizeParent: boolean): void;
	StartConnection(): boolean;
	StartConnection(port: number): boolean;
	StopConnection(sendDisconnectMessage: boolean): boolean;
	UnregisterBroadcast<T>(handler: unknown): void;
}

interface PhysicsScene {
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: unknown): boolean;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		results: Array<RaycastHit>,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, results: Array<RaycastHit>): number;
	CapsuleCast(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	CapsuleCast(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	Equals(other: unknown): boolean;
	Equals(other: PhysicsScene): boolean;
	GetHashCode(): number;
	IsEmpty(): boolean;
	IsValid(): boolean;
	OverlapBox(
		center: Vector3,
		halfExtents: Vector3,
		results: Array<Collider>,
		orientation: Quaternion,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	OverlapBox(center: Vector3, halfExtents: Vector3, results: Array<Collider>): number;
	OverlapCapsule(
		point0: Vector3,
		point1: Vector3,
		radius: number,
		results: Array<Collider>,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	OverlapSphere(
		position: Vector3,
		radius: number,
		results: Array<Collider>,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		raycastHits: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	Simulate(step: number): void;
	SphereCast(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	SphereCast(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	ToString(): string;
}

interface PhysicsConstructor {
	kIgnoreRaycastLayer: number;
	kDefaultRaycastLayers: number;
	kAllLayers: number;
	IgnoreRaycastLayer: number;
	DefaultRaycastLayers: number;
	AllLayers: number;
	minPenetrationForPenalty: number;
	bounceTreshold: number;
	sleepVelocity: number;
	sleepAngularVelocity: number;
	maxAngularVelocity: number;
	solverIterationCount: number;
	solverVelocityIterationCount: number;
	penetrationPenaltyForce: number;
	gravity: Vector3;
	defaultContactOffset: number;
	sleepThreshold: number;
	queriesHitTriggers: boolean;
	queriesHitBackfaces: boolean;
	bounceThreshold: number;
	defaultMaxDepenetrationVelocity: number;
	defaultSolverIterations: number;
	defaultSolverVelocityIterations: number;
	defaultMaxAngularSpeed: number;
	improvedPatchFriction: boolean;
	defaultPhysicsScene: PhysicsScene;
	autoSimulation: boolean;
	autoSyncTransforms: boolean;
	reuseCollisionCallbacks: boolean;
	interCollisionDistance: number;
	interCollisionStiffness: number;
	interCollisionSettingsToggle: boolean;
	clothGravity: Vector3;

	BakeMesh(meshID: number, convex: boolean): void;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
	): boolean;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		orientation: Quaternion,
		maxDistance: number,
	): boolean;
	BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion): boolean;
	BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3): boolean;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		orientation: Quaternion,
		maxDistance: number,
	): boolean;
	BoxCast(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		orientation: Quaternion,
	): boolean;
	BoxCast(center: Vector3, halfExtents: Vector3, direction: Vector3, hitInfo: unknown): boolean;
	BoxCastAll(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<RaycastHit>;
	BoxCastAll(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
	): Array<RaycastHit>;
	BoxCastAll(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		orientation: Quaternion,
		maxDistance: number,
	): Array<RaycastHit>;
	BoxCastAll(center: Vector3, halfExtents: Vector3, direction: Vector3, orientation: Quaternion): Array<RaycastHit>;
	BoxCastAll(center: Vector3, halfExtents: Vector3, direction: Vector3): Array<RaycastHit>;
	BoxCastNonAlloc(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		results: Array<RaycastHit>,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	BoxCastNonAlloc(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		results: Array<RaycastHit>,
		orientation: Quaternion,
	): number;
	BoxCastNonAlloc(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		results: Array<RaycastHit>,
		orientation: Quaternion,
		maxDistance: number,
	): number;
	BoxCastNonAlloc(
		center: Vector3,
		halfExtents: Vector3,
		direction: Vector3,
		results: Array<RaycastHit>,
		orientation: Quaternion,
		maxDistance: number,
		layerMask: number,
	): number;
	BoxCastNonAlloc(center: Vector3, halfExtents: Vector3, direction: Vector3, results: Array<RaycastHit>): number;
	CapsuleCast(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	CapsuleCast(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
	): boolean;
	CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, maxDistance: number): boolean;
	CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3): boolean;
	CapsuleCast(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	CapsuleCast(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
	): boolean;
	CapsuleCast(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
	): boolean;
	CapsuleCast(point1: Vector3, point2: Vector3, radius: number, direction: Vector3, hitInfo: unknown): boolean;
	CapsuleCastAll(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<RaycastHit>;
	CapsuleCastAll(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
	): Array<RaycastHit>;
	CapsuleCastAll(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		maxDistance: number,
	): Array<RaycastHit>;
	CapsuleCastAll(point1: Vector3, point2: Vector3, radius: number, direction: Vector3): Array<RaycastHit>;
	CapsuleCastNonAlloc(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	CapsuleCastNonAlloc(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
	): number;
	CapsuleCastNonAlloc(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
	): number;
	CapsuleCastNonAlloc(
		point1: Vector3,
		point2: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
	): number;
	CheckBox(
		center: Vector3,
		halfExtents: Vector3,
		orientation: Quaternion,
		layermask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	CheckBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion, layerMask: number): boolean;
	CheckBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion): boolean;
	CheckBox(center: Vector3, halfExtents: Vector3): boolean;
	CheckCapsule(
		start: Vector3,
		end: Vector3,
		radius: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	CheckCapsule(start: Vector3, end: Vector3, radius: number, layerMask: number): boolean;
	CheckCapsule(start: Vector3, end: Vector3, radius: number): boolean;
	CheckSphere(
		position: Vector3,
		radius: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	CheckSphere(position: Vector3, radius: number, layerMask: number): boolean;
	CheckSphere(position: Vector3, radius: number): boolean;
	ClosestPoint(point: Vector3, collider: Collider, position: Vector3, rotation: Quaternion): Vector3;
	ComputePenetration(
		colliderA: Collider,
		positionA: Vector3,
		rotationA: Quaternion,
		colliderB: Collider,
		positionB: Vector3,
		rotationB: Quaternion,
		direction: unknown,
		distance: unknown,
	): boolean;
	GetIgnoreCollision(collider1: Collider, collider2: Collider): boolean;
	GetIgnoreLayerCollision(layer1: number, layer2: number): boolean;
	IgnoreCollision(collider1: Collider, collider2: Collider, ignore: boolean): void;
	IgnoreCollision(collider1: Collider, collider2: Collider): void;
	IgnoreLayerCollision(layer1: number, layer2: number, ignore: boolean): void;
	IgnoreLayerCollision(layer1: number, layer2: number): void;
	Linecast(
		start: Vector3,
		end: Vector3,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	Linecast(start: Vector3, end: Vector3, layerMask: number): boolean;
	Linecast(start: Vector3, end: Vector3): boolean;
	Linecast(
		start: Vector3,
		end: Vector3,
		hitInfo: unknown,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	Linecast(start: Vector3, end: Vector3, hitInfo: unknown, layerMask: number): boolean;
	Linecast(start: Vector3, end: Vector3, hitInfo: unknown): boolean;
	OverlapBox(
		center: Vector3,
		halfExtents: Vector3,
		orientation: Quaternion,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): CSArray<Collider>;
	OverlapBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion, layerMask: number): CSArray<Collider>;
	OverlapBox(center: Vector3, halfExtents: Vector3, orientation: Quaternion): CSArray<Collider>;
	OverlapBox(center: Vector3, halfExtents: Vector3): CSArray<Collider>;
	OverlapBoxNonAlloc(
		center: Vector3,
		halfExtents: Vector3,
		results: Array<Collider>,
		orientation: Quaternion,
		mask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	OverlapBoxNonAlloc(
		center: Vector3,
		halfExtents: Vector3,
		results: Array<Collider>,
		orientation: Quaternion,
		mask: number,
	): number;
	OverlapBoxNonAlloc(
		center: Vector3,
		halfExtents: Vector3,
		results: Array<Collider>,
		orientation: Quaternion,
	): number;
	OverlapBoxNonAlloc(center: Vector3, halfExtents: Vector3, results: Array<Collider>): number;
	OverlapCapsule(
		point0: Vector3,
		point1: Vector3,
		radius: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<Collider>;
	OverlapCapsule(point0: Vector3, point1: Vector3, radius: number, layerMask: number): Array<Collider>;
	OverlapCapsule(point0: Vector3, point1: Vector3, radius: number): Array<Collider>;
	OverlapCapsuleNonAlloc(
		point0: Vector3,
		point1: Vector3,
		radius: number,
		results: Array<Collider>,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	OverlapCapsuleNonAlloc(
		point0: Vector3,
		point1: Vector3,
		radius: number,
		results: Array<Collider>,
		layerMask: number,
	): number;
	OverlapCapsuleNonAlloc(point0: Vector3, point1: Vector3, radius: number, results: Array<Collider>): number;
	OverlapSphere(
		position: Vector3,
		radius: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<Collider>;
	OverlapSphere(position: Vector3, radius: number, layerMask: number): Array<Collider>;
	OverlapSphere(position: Vector3, radius: number): Array<Collider>;
	OverlapSphereNonAlloc(
		position: Vector3,
		radius: number,
		results: Array<Collider>,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	OverlapSphereNonAlloc(position: Vector3, radius: number, results: Array<Collider>, layerMask: number): number;
	OverlapSphereNonAlloc(position: Vector3, radius: number, results: Array<Collider>): number;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		maxDistance: number,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(origin: Vector3, direction: Vector3): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		origin: Vector3,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(origin: Vector3, direction: Vector3, hitInfo: unknown): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		ray: Ray,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(ray: Ray, maxDistance: number, layerMask: number): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(ray: Ray, maxDistance: number): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(ray: Ray): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		ray: Ray,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(
		ray: Ray,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
	): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(ray: Ray, hitInfo: unknown, maxDistance: number): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	Raycast(ray: Ray, hitInfo: unknown): LuaTuple<[true, RaycastHit] | [false, undefined]>;
	RaycastAll(
		origin: Vector3,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<RaycastHit>;
	RaycastAll(origin: Vector3, direction: Vector3, maxDistance: number, layerMask: number): CSArray<RaycastHit>;
	RaycastAll(origin: Vector3, direction: Vector3, maxDistance: number): CSArray<RaycastHit>;
	RaycastAll(origin: Vector3, direction: Vector3): CSArray<RaycastHit>;
	RaycastAll(
		ray: Ray,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<RaycastHit>;
	RaycastAll(ray: Ray, maxDistance: number, layerMask: number): CSArray<RaycastHit>;
	RaycastAll(ray: Ray, maxDistance: number): CSArray<RaycastHit>;
	RaycastAll(ray: Ray): CSArray<RaycastHit>;
	RebuildBroadphaseRegions(worldBounds: Bounds, subdivisions: number): void;
	Simulate(step: number): void;
	SphereCast(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	SphereCast(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
	): boolean;
	SphereCast(origin: Vector3, radius: number, direction: Vector3, hitInfo: unknown, maxDistance: number): boolean;
	SphereCast(origin: Vector3, radius: number, direction: Vector3, hitInfo: unknown): boolean;
	SphereCast(
		ray: Ray,
		radius: number,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	SphereCast(ray: Ray, radius: number, maxDistance: number, layerMask: number): boolean;
	SphereCast(ray: Ray, radius: number, maxDistance: number): boolean;
	SphereCast(ray: Ray, radius: number): boolean;
	SphereCast(
		ray: Ray,
		radius: number,
		hitInfo: unknown,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): boolean;
	SphereCast(ray: Ray, radius: number, hitInfo: unknown, maxDistance: number, layerMask: number): boolean;
	SphereCast(ray: Ray, radius: number, hitInfo: unknown, maxDistance: number): boolean;
	SphereCast(ray: Ray, radius: number, hitInfo: unknown): boolean;
	SphereCastAll(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<RaycastHit>;
	SphereCastAll(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		maxDistance: number,
		layerMask: number,
	): Array<RaycastHit>;
	SphereCastAll(origin: Vector3, radius: number, direction: Vector3, maxDistance: number): Array<RaycastHit>;
	SphereCastAll(origin: Vector3, radius: number, direction: Vector3): Array<RaycastHit>;
	SphereCastAll(
		ray: Ray,
		radius: number,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): Array<RaycastHit>;
	SphereCastAll(ray: Ray, radius: number, maxDistance: number, layerMask: number): Array<RaycastHit>;
	SphereCastAll(ray: Ray, radius: number, maxDistance: number): Array<RaycastHit>;
	SphereCastAll(ray: Ray, radius: number): Array<RaycastHit>;
	SphereCastNonAlloc(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	SphereCastNonAlloc(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
	): number;
	SphereCastNonAlloc(
		origin: Vector3,
		radius: number,
		direction: Vector3,
		results: Array<RaycastHit>,
		maxDistance: number,
	): number;
	SphereCastNonAlloc(origin: Vector3, radius: number, direction: Vector3, results: Array<RaycastHit>): number;
	SphereCastNonAlloc(
		ray: Ray,
		radius: number,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
		queryTriggerInteraction: QueryTriggerInteraction,
	): number;
	SphereCastNonAlloc(
		ray: Ray,
		radius: number,
		results: Array<RaycastHit>,
		maxDistance: number,
		layerMask: number,
	): number;
	SphereCastNonAlloc(ray: Ray, radius: number, results: Array<RaycastHit>, maxDistance: number): number;
	SphereCastNonAlloc(ray: Ray, radius: number, results: Array<RaycastHit>): number;
	SyncTransforms(): void;
}
declare const Physics: PhysicsConstructor;

interface IStyle {
	alignContent: StyleEnum<Align>;
	alignItems: StyleEnum<Align>;
	alignSelf: StyleEnum<Align>;
	backgroundColor: StyleColor;
	backgroundImage: StyleBackground;
	borderBottomColor: StyleColor;
	borderBottomLeftRadius: StyleLength;
	borderBottomRightRadius: StyleLength;
	borderBottomWidth: StyleFloat;
	borderLeftColor: StyleColor;
	borderLeftWidth: StyleFloat;
	borderRightColor: StyleColor;
	borderRightWidth: StyleFloat;
	borderTopColor: StyleColor;
	borderTopLeftRadius: StyleLength;
	borderTopRightRadius: StyleLength;
	borderTopWidth: StyleFloat;
	bottom: StyleLength;
	color: StyleColor;
	cursor: StyleCursor;
	display: DisplayStyle;
	flexBasis: StyleLength;
	flexDirection: StyleEnum<FlexDirection>;
	flexGrow: StyleFloat;
	flexShrink: StyleFloat;
	flexWrap: StyleEnum<Wrap>;
	fontSize: StyleLength;
	height: StyleLength;
	justifyContent: StyleEnum<Justify>;
	left: StyleLength;
	letterSpacing: StyleLength;
	marginBottom: StyleLength;
	marginLeft: StyleLength;
	marginRight: StyleLength;
	marginTop: StyleLength;
	maxHeight: StyleLength;
	maxWidth: StyleLength;
	minHeight: StyleLength;
	minWidth: StyleLength;
	opacity: StyleFloat;
	overflow: StyleEnum<Overflow>;
	paddingBottom: StyleLength;
	paddingLeft: StyleLength;
	paddingRight: StyleLength;
	paddingTop: StyleLength;
	position: StyleEnum<Position>;
	right: StyleLength;
	rotate: StyleRotate;
	scale: StyleScale;
	textOverflow: StyleEnum<TextOverflow>;
	textShadow: StyleTextShadow;
	top: StyleLength;
	transformOrigin: StyleTransformOrigin;
	transitionDelay: StyleList<TimeValue>;
	transitionDuration: StyleList<TimeValue>;
	transitionProperty: StyleList<StylePropertyName>;
	transitionTimingFunction: StyleList<EasingFunction>;
	translate: StyleTranslate;
	unityBackgroundImageTintColor: StyleColor;
	unityBackgroundScaleMode: StyleEnum<ScaleMode>;
	unityFont: StyleFont;
	unityFontDefinition: StyleFontDefinition;
	unityFontStyleAndWeight: StyleEnum<FontStyle>;
	unityOverflowClipBox: StyleEnum<OverflowClipBox>;
	unityParagraphSpacing: StyleLength;
	unitySliceBottom: StyleInt;
	unitySliceLeft: StyleInt;
	unitySliceRight: StyleInt;
	unitySliceTop: StyleInt;
	unityTextAlign: StyleEnum<TextAnchor>;
	unityTextOutlineColor: StyleColor;
	unityTextOutlineWidth: StyleFloat;
	unityTextOverflowPosition: StyleEnum<TextOverflowPosition>;
	visibility: StyleEnum<Visibility>;
	whiteSpace: StyleEnum<WhiteSpace>;
	width: StyleLength;
	wordSpacing: StyleLength;
}

interface EasyAttributes extends NetworkObject {
	SetAttribute(key: string, value: unknown): void;
	GetNumber(key: string): number | undefined;
	GetString(key: string): string | undefined;
	GetBoolean(key: string): boolean | undefined;
	GetObject<T = unknown>(key: string): T | undefined;
}

interface SceneAPIConstructor {
	OnSceneLoadedEvent: (callback: (sceneName: string) => void) => void;
}

interface SceneManager {
	OnOnLoadEnd(callback: (e: unknown) => void): void;
}

interface ClientSceneListener {
	OnSceneLoadedEvent(callback: (sceneName: string) => void): void;
}

interface ManagedObjects {
	OnAddedToSpawnedEvent(callback: (nob: NetworkObject) => void): void;
}

interface MouseDownEvent {
	button: number;
	actionKey: boolean;
	altKey: boolean;
	commandKey: boolean;
	localMousePosition: Vector2;
	shiftKey: boolean;
}

interface ChangeEvent<T> {
	previousValue: T;
	newValue: T;
}

interface MouseEnterEvent {}

interface MouseLeaveEvent {}

interface KeyDownEvent {
	keyCode: KeyCode;
	commandKey: boolean;
	ctrlKey: boolean;
	altKey: boolean;
	actionKey: boolean;
	shiftKey: boolean;
	bubbles: boolean;
}

interface AssetBridge {
	GetAllAssets(): CSArray<string>;
	// GetAssetBundle(name: string): AssetBundle;
	IsLoaded(): boolean;
	LoadAsset<T>(path: string): T;
	LoadAssetIfExists<T>(path: string): T | undefined;
}
interface AssetBridgeConstructor {
	Instance: AssetBridge;
}
declare const AssetBridge: AssetBridgeConstructor;

interface AnimancerState {
    StartFade(weight: number, duration: number): void;
    IsPlaying: boolean;
	Events: Sequence;
}

interface Sequence {
	OnEndTS(callback: () => void): EngineEventConnection;
	ClearEndTSEvent(): void;
}

interface AnimancerComponent extends Component {
	Play(clip: AnimationClip): AnimancerState;
}

interface AnimancerBridge {}
interface AnimancerBridgeConstructor {
	PlayOnLayer(
		animancerComponent: AnimancerComponent,
		clip: AnimationClip,
		layer: number,
		fadeDuration: number,
		fadeMode: FadeMode,
		wrapMode: WrapMode,
	): AnimancerState;
	PlayOnceOnLayer(
		animancerComponent: AnimancerComponent,
		clip: AnimationClip,
		layer: number,
		fadeDuration: number,
		fadeMode: FadeMode,
        wrapMode: WrapMode,
	): AnimancerState;
	GetLayer(component: AnimancerComponent, layer: number): AnimancerLayer;
}
declare const AnimancerBridge: AnimancerBridgeConstructor;

interface AnimancerLayer {
	StartFade(value: number): void;
	StartFade(value: number, fadeDuration: number): void;
	SetWeight(value: number): void;
	SetMask(mask: AvatarMask): void;
	Play(clip: AnimationClip, fadeDuration: number, fadeMode: FadeMode): AnimationState;
	DestroyStates(): void;
	CurrentState: AnimancerState;
}

interface Ray {
	origin: Vector3;
	direction: Vector3;
}
interface RayConstructor {
    new(origin: Vector3, direction: Vector3): Ray;
}
declare const Ray: RayConstructor;

interface Rigidbody {
	AddForce_ForceMode(force: Vector3, forceMode: ForceMode): void;
}

interface Component extends Object {
	transform: Transform;
	gameObject: GameObject;
	tag: string;
	rigidbody: Component;
	rigidbody2D: Component;
	camera: Component;
	light: Component;
	animation: Component;
	constantForce: Component;
	renderer: Component;
	audio: Component;
	networkView: Component;
	collider: Component;
	collider2D: Component;
	hingeJoint: Component;
	particleSystem: Component;

	constructor(): Component;

	BroadcastMessage(methodName: string): void;
	BroadcastMessage(methodName: string, options: SendMessageOptions): void;
	CompareTag(tag: string): boolean;
	GetComponent<T>(): T;
	GetComponent(type: string): Component;
	AddComponent(componentName: string): Component;
	SendMessage(methodName: string, value: unknown): void;
	SendMessage(methodName: string): void;
	SendMessage(methodName: string, value: unknown, options: SendMessageOptions): void;
	SendMessage(methodName: string, options: SendMessageOptions): void;
	SendMessageUpwards(methodName: string, value: unknown, options: SendMessageOptions): void;
	SendMessageUpwards(methodName: string, value: unknown): void;
	SendMessageUpwards(methodName: string): void;
	SendMessageUpwards(methodName: string, options: SendMessageOptions): void;

	TweenPosition(to: Vector3, duration: number): Tween<Vector3>;
	TweenPositionX(to: number, duration: number): Tween<number>;
	TweenPositionY(to: number, duration: number): Tween<number>;
	TweenPositionZ(to: number, duration: number): Tween<number>;

	TweenLocalPosition(to: Vector3, duration: number): Tween<Vector3>;
	TweenLocalPositionX(to: number, duration: number): Tween<number>;
	TweenLocalPositionY(to: number, duration: number): Tween<number>;
	TweenLocalPositionZ(to: number, duration: number): Tween<number>;

	TweenAnchoredPosition(to: Vector2, duration: number): Tween<Vector2>;
	TweenAnchoredPositionX(to: number, duration: number): Tween<number>;
	TweenAnchoredPositionY(to: number, duration: number): Tween<number>;

	TweenAnchorMin(to: Vector2, duration: number): Tween<Vector2>;
	TweenAnchorMax(to: Vector2, duration: number): Tween<Vector2>;

	TweenRotation(to: Vector3, duration: number): Tween<Vector3>;
	TweenRotationX(to: number, duration: number): Tween<number>;
	TweenRotationY(to: number, duration: number): Tween<number>;
	TweenRotationZ(to: number, duration: number): Tween<number>;

	TweenLocalRotation(to: Vector3, duration: number): Tween<Vector3>;
	TweenLocalRotationX(to: number, duration: number): Tween<number>;
	TweenLocalRotationY(to: number, duration: number): Tween<number>;
	TweenLocalRotationZ(to: number, duration: number): Tween<number>;

	TweenLocalScale(to: Vector3, duration: number): Tween<Vector3>;
	TweenLocalScaleX(to: number, duration: number): Tween<number>;
	TweenLocalScaleY(to: number, duration: number): Tween<number>;
	TweenLocalScaleZ(to: number, duration: number): Tween<number>;

	TweenImageFillAmount(to: number, duration: number): Tween<number>;
	TweenGraphicAlpha(to: number, duration: number): Tween<number>;
	TweenGraphicColor(to: Color, duration: number): Tween<Color>;
	TweenSpriteRendererAlpha(to: number, duration: number): Tween<number>;
	TweenSpriteRendererColor(to: Color, duration: number): Tween<Color>;
	TweenMaterialColor(to: Color, duration: number): Tween<Color>;

	TweenRendererColor(from: Color, to: Color, duration: number): Tween<number>;
	TweenMaterialsColorProperty(propertyName: string, from: Color, to: Color, duration: number): Tween<number>;
	TweenMaterialsFloatProperty(propertyName: string, from: number, to: number, duration: number): Tween<number>;

	TweenTextMeshAlpha(to: number, duration: number): Tween<number>;
	TweenTextMeshColor(to: Color, duration: number): Tween<Color>;
	TweenTextMeshProColor(to: Color, duration: number): Tween<Color>;
	TweenTextMeshProAlpha(to: number, duration: number): Tween<number>;
	TweenCanvasGroupAlpha(to: number, duration: number): Tween<number>;
	
	TweenAudioSourceVolume (to: number, duration: number): Tween<number>;
	TweenAudioSourcePitch (to: number, duration: number): Tween<number>;

	TweenCancelAll(includeChildren: boolean, includeInactive: boolean): void;
}

interface GameObject extends Object {
	rigidbody: Component;
	rigidbody2D: Component;
	camera: Component;
	light: Component;
	animation: Component;
	constantForce: Component;
	renderer: Component;
	audio: Component;
	networkView: Component;
	collider: Component;
	collider2D: Component;
	hingeJoint: Component;
	particleSystem: Component;
	transform: Transform;
	layer: number;
	active: boolean;
	activeSelf: boolean;
	activeInHierarchy: boolean;
	isStatic: boolean;
	tag: string;
	scene: Scene;
	sceneCullingMask: number;
	gameObject: GameObject;

	OnUpdate(callback: () => void): void;
	OnLateUpdate(callback: () => void): void;
	OnFixedUpdate(callback: () => void): void;

	// constructor(name: string): GameObject;
	// constructor(): GameObject;
	CompareTag(tag: string): boolean;
	PlayAnimation(animation: Object): void;
	SampleAnimation(clip: Object, time: number): void;
	SetActive(value: boolean): void;
	SetActiveRecursively(state: boolean): void;
	StopAnimation(): void;
	BroadcastMessage(methodName: string): void;
	BroadcastMessage(methodName: string, options: SendMessageOptions): void;
	/**
	 * Throws error if no component found.
	 */
	GetComponent<T>(): T;
	GetComponentsInChildren<T>(): CSArray<T>;
	GetComponentsInChildren<T>(typeName: string): CSArray<T>;
	/**
	 * Throws error if no component found.
	 */
	GetComponent<T extends Component | AirshipBehaviour = Component>(type: string): T;
	GetComponentIfExists<T extends Component = Component>(type: string): T | undefined;
	AddComponent<T>(): T;
	AddComponent<T extends Component = Component>(componentName: string): T;
	SendMessage(methodName: string, value: unknown): void;
	SendMessage(methodName: string): void;
	SendMessage(methodName: string, value: unknown, options: SendMessageOptions): void;
	SendMessage(methodName: string, options: SendMessageOptions): void;
	SendMessageUpwards(methodName: string, value: unknown, options: SendMessageOptions): void;
	SendMessageUpwards(methodName: string, value: unknown): void;
	SendMessageUpwards(methodName: string): void;
	SendMessageUpwards(methodName: string, options: SendMessageOptions): void;

	TweenPosition(to: Vector3, duration: number): Tween<Vector3>;
	TweenPositionX(to: number, duration: number): Tween<number>;
	TweenPositionY(to: number, duration: number): Tween<number>;
	TweenPositionZ(to: number, duration: number): Tween<number>;

	TweenLocalPosition(to: Vector3, duration: number): Tween<Vector3>;
	TweenLocalPositionX(to: number, duration: number): Tween<number>;
	TweenLocalPositionY(to: number, duration: number): Tween<number>;
	TweenLocalPositionZ(to: number, duration: number): Tween<number>;

	TweenAnchoredPosition(to: Vector2, duration: number): Tween<Vector2>;
	TweenAnchoredPositionX(to: number, duration: number): Tween<number>;
	TweenAnchoredPositionY(to: number, duration: number): Tween<number>;

	TweenAnchorMin(to: Vector2, duration: number): Tween<Vector2>;
	TweenAnchorMax(to: Vector2, duration: number): Tween<Vector2>;

	TweenRotation(to: Vector3, duration: number): Tween<Vector3>;
	TweenRotationX(to: number, duration: number): Tween<number>;
	TweenRotationY(to: number, duration: number): Tween<number>;
	TweenRotationZ(to: number, duration: number): Tween<number>;

	TweenLocalRotation(to: Vector3, duration: number): Tween<Vector3>;
	TweenLocalRotationX(to: number, duration: number): Tween<number>;
	TweenLocalRotationY(to: number, duration: number): Tween<number>;
	TweenLocalRotationZ(to: number, duration: number): Tween<number>;

	TweenLocalScale(to: Vector3, duration: number): Tween<Vector3>;
	TweenLocalScaleX(to: number, duration: number): Tween<number>;
	TweenLocalScaleY(to: number, duration: number): Tween<number>;
	TweenLocalScaleZ(to: number, duration: number): Tween<number>;

	TweenImageFillAmount(to: number, duration: number): Tween<number>;
	TweenGraphicAlpha(to: number, duration: number): Tween<number>;
	TweenGraphicColor(to: Color, duration: number): Tween<Color>;
	TweenSpriteRendererAlpha(to: number, duration: number): Tween<number>;
	TweenSpriteRendererColor(to: Color, duration: number): Tween<Color>;
	TweenMaterialColor(to: Color, duration: number): Tween<Color>;

	TweenTextMeshAlpha(to: number, duration: number): Tween<number>;
	TweenTextMeshColor(to: Color, duration: number): Tween<Color>;
	TweenTextMeshProColor(to: Color, duration: number): Tween<Color>;
	TweenTextMeshProAlpha(to: number, duration: number): Tween<number>;
	TweenCanvasGroupAlpha(to: number, duration: number): Tween<number>;

	TweenCancelAll(includeChildren: boolean, includeInactive: boolean): void;

	/** Destroys all child gameobjects. */
	ClearChildren(): void;
}
declare const gameObject: GameObject;

interface GameObjectConstructor {
	CreatePrimitive(type: PrimitiveType): GameObject;
	Find(name: string): GameObject;
	FindObjectOfType<T extends Component>(): T;
	FindGameObjectsWithTag(tag: string): CSArray<GameObject>;
	FindGameObjectWithTag(tag: string): GameObject;
	FindWithTag(tag: string): GameObject;
	Create(name?: string): GameObject;
	CreateAtPos(pos: Vector3, name?: string): GameObject;

	/** @deprecated Use `GameObject.Create()` instead */
	new (): GameObject;
	/** @deprecated Use `GameObject.Create()` instead */
	new (name: string): GameObject;
}
declare const GameObject: GameObjectConstructor;

interface VoxelRaycastResult {
	Hit: boolean;
	Distance: number;
	HitPosition: Vector3;
	HitNormal: Vector3;
}

interface Color {
	r: number;
	g: number;
	b: number;
	a: number;
	grayscale: number;
	linear: Color;
	gamma: Color;
	maxColorComponent: number;
	Item: number;

	// constructor(r: number, g: number, b: number, a: number): Color;
	// constructor(r: number, g: number, b: number): Color;

	Equals(other: unknown): boolean;
	Equals(other: Color): boolean;
	GetHashCode(): number;
	ToString(): string;
	ToString(format: string): string;
	ToString(format: string, formatProvider: unknown): string;
}

interface ColorConstructor {
	red: Color;
	green: Color;
	blue: Color;
	white: Color;
	black: Color;
	yellow: Color;
	cyan: Color;
	magenta: Color;
	gray: Color;
	grey: Color;
	clear: Color;

	HSVToRGB(H: number, S: number, V: number): Color;
	HSVToRGB(H: number, S: number, V: number, hdr: boolean): Color;
	Lerp(a: Color, b: Color, t: number): Color;
	LerpUnclamped(a: Color, b: Color, t: number): Color;
	RGBToHSV(rgbColor: Color, H: unknown, S: unknown, V: unknown): void;

	new (r: number, g: number, b: number, a: number): Color;
	new (r: number, g: number, b: number): Color;
}
declare const Color: ColorConstructor;

interface GameObjectReferences extends MonoBehaviour {
	constructor(): GameObjectReferences;

	GetAllValues<T = GameObject>(bundleKey: string): CSArray<T>;
	GetValue<T = GameObject>(bundleKey: string, itemKey: string): T;
}

interface GameObjectReferencesConstructor {
	GetReferences(bundleKey: string): GameObjectReferences;
	GetValue<T = GameObject>(staticKey: string, bundleKey: string, itemKey: string): T;
}
declare const GameObjectReferences: GameObjectReferencesConstructor;

interface UGUIImage extends Component {
	color: Color;
	enabled: boolean;
}

interface ParticleSystemConstructor {
	MakeEmitParams(): EmitParams;
}

interface ParticleSystem {
	EmitAtPosition(count: number, pos: Vector3): void;
}

interface AkSoundEngineConstructor {
	AK_SIMD_ALIGNMENT: number;
	AK_BUFFER_ALIGNMENT: number;
	AK_MAX_PATH: number;
	AK_BANK_PLATFORM_DATA_ALIGNMENT: number;
	AK_OSCHAR_FMT: string;
	AK_INVALID_PLUGINID: number;
	AK_INVALID_GAME_OBJECT: number;
	AK_INVALID_UNIQUE_ID: number;
	AK_INVALID_RTPC_ID: number;
	AK_INVALID_LISTENER_INDEX: number;
	AK_INVALID_PLAYING_ID: number;
	AK_DEFAULT_SWITCH_STATE: number;
	AK_INVALID_POOL_ID: number;
	AK_DEFAULT_POOL_ID: number;
	AK_INVALID_AUX_ID: number;
	AK_INVALID_FILE_ID: number;
	AK_INVALID_DEVICE_ID: number;
	AK_INVALID_BANK_ID: number;
	AK_FALLBACK_ARGUMENTVALUE_ID: number;
	AK_INVALID_CHANNELMASK: number;
	AK_INVALID_OUTPUT_DEVICE_ID: number;
	AK_MIXER_FX_SLOT: number;
	AK_DEFAULT_LISTENER_OBJ: number;
	AK_DEFAULT_PRIORITY: number;
	AK_MIN_PRIORITY: number;
	AK_MAX_PRIORITY: number;
	AK_DEFAULT_BANK_IO_PRIORITY: number;
	AK_DEFAULT_BANK_THROUGHPUT: number;
	AKCOMPANYID_AUDIOKINETIC: number;
	AK_LISTENERS_MASK_ALL: number;
	NULL: number;
	AKCURVEINTERPOLATION_NUM_STORAGE_BIT: number;
	AK_MAX_LANGUAGE_NAME_SIZE: number;
	AKCOMPANYID_PLUGINDEV_MIN: number;
	AKCOMPANYID_PLUGINDEV_MAX: number;
	AKCOMPANYID_AUDIOKINETIC_EXTERNAL: number;
	AKCOMPANYID_MCDSP: number;
	AKCOMPANYID_WAVEARTS: number;
	AKCOMPANYID_PHONETICARTS: number;
	AKCOMPANYID_IZOTOPE: number;
	AKCOMPANYID_CRANKCASEAUDIO: number;
	AKCOMPANYID_IOSONO: number;
	AKCOMPANYID_AUROTECHNOLOGIES: number;
	AKCOMPANYID_DOLBY: number;
	AKCOMPANYID_TWOBIGEARS: number;
	AKCOMPANYID_OCULUS: number;
	AKCOMPANYID_BLUERIPPLESOUND: number;
	AKCOMPANYID_ENZIEN: number;
	AKCOMPANYID_KROTOS: number;
	AKCOMPANYID_NURULIZE: number;
	AKCOMPANYID_SUPERPOWERED: number;
	AKCOMPANYID_GOOGLE: number;
	AKCOMPANYID_VISISONICS: number;
	AKCODECID_BANK: number;
	AKCODECID_PCM: number;
	AKCODECID_ADPCM: number;
	AKCODECID_XMA: number;
	AKCODECID_VORBIS: number;
	AKCODECID_WIIADPCM: number;
	AKCODECID_PCMEX: number;
	AKCODECID_EXTERNAL_SOURCE: number;
	AKCODECID_XWMA: number;
	AKCODECID_FILE_PACKAGE: number;
	AKCODECID_ATRAC9: number;
	AKCODECID_VAG: number;
	AKCODECID_PROFILERCAPTURE: number;
	AKCODECID_ANALYSISFILE: number;
	AKCODECID_MIDI: number;
	AKCODECID_OPUSNX: number;
	AKCODECID_CAF: number;
	AKCODECID_AKOPUS: number;
	AKCODECID_AKOPUS_WEM: number;
	AKCODECID_MEMORYMGR_DUMP: number;
	AKCODECID_SONY360: number;
	AKCODECID_BANK_EVENT: number;
	AKCODECID_BANK_BUS: number;
	AKPLUGINID_METER: number;
	AKPLUGINID_RECORDER: number;
	AKPLUGINID_IMPACTER: number;
	AKPLUGINID_SYSTEM_OUTPUT_META: number;
	AKPLUGINID_AUDIO_OBJECT_ATTENUATION_META: number;
	AKPLUGINID_AUDIO_OBJECT_PRIORITY_META: number;
	AKEXTENSIONID_SPATIALAUDIO: number;
	AKEXTENSIONID_INTERACTIVEMUSIC: number;
	AKEXTENSIONID_MIDIDEVICEMGR: number;
	AK_WAVE_FORMAT_VAG: number;
	AK_WAVE_FORMAT_AT9: number;
	AK_WAVE_FORMAT_VORBIS: number;
	AK_WAVE_FORMAT_OPUSNX: number;
	AK_WAVE_FORMAT_OPUS: number;
	AK_WAVE_FORMAT_OPUS_WEM: number;
	WAVE_FORMAT_XMA2: number;
	AK_PANNER_NUM_STORAGE_BITS: number;
	AK_POSSOURCE_NUM_STORAGE_BITS: number;
	AK_SPAT_NUM_STORAGE_BITS: number;
	AK_MAX_BITS_METERING_FLAGS: number;
	AK_ASYNC_OPEN_DEFAULT: boolean;
	AK_COMM_DEFAULT_DISCOVERY_PORT: number;
	AK_DEFAULT_LISTENER_POSITION_X: number;
	AK_DEFAULT_LISTENER_POSITION_Y: number;
	AK_DEFAULT_LISTENER_POSITION_Z: number;
	AK_DEFAULT_LISTENER_FRONT_X: number;
	AK_DEFAULT_LISTENER_FRONT_Y: number;
	AK_DEFAULT_LISTENER_FRONT_Z: number;
	AK_DEFAULT_TOP_X: number;
	AK_DEFAULT_TOP_Y: number;
	AK_DEFAULT_TOP_Z: number;
	AK_MIDI_EVENT_TYPE_INVALID: number;
	AK_MIDI_EVENT_TYPE_NOTE_OFF: number;
	AK_MIDI_EVENT_TYPE_NOTE_ON: number;
	AK_MIDI_EVENT_TYPE_NOTE_AFTERTOUCH: number;
	AK_MIDI_EVENT_TYPE_CONTROLLER: number;
	AK_MIDI_EVENT_TYPE_PROGRAM_CHANGE: number;
	AK_MIDI_EVENT_TYPE_CHANNEL_AFTERTOUCH: number;
	AK_MIDI_EVENT_TYPE_PITCH_BEND: number;
	AK_MIDI_EVENT_TYPE_SYSEX: number;
	AK_MIDI_EVENT_TYPE_ESCAPE: number;
	AK_MIDI_EVENT_TYPE_WWISE_CMD: number;
	AK_MIDI_EVENT_TYPE_META: number;
	AK_MIDI_CC_BANK_SELECT_COARSE: number;
	AK_MIDI_CC_MOD_WHEEL_COARSE: number;
	AK_MIDI_CC_BREATH_CTRL_COARSE: number;
	AK_MIDI_CC_CTRL_3_COARSE: number;
	AK_MIDI_CC_FOOT_PEDAL_COARSE: number;
	AK_MIDI_CC_PORTAMENTO_COARSE: number;
	AK_MIDI_CC_DATA_ENTRY_COARSE: number;
	AK_MIDI_CC_VOLUME_COARSE: number;
	AK_MIDI_CC_BALANCE_COARSE: number;
	AK_MIDI_CC_CTRL_9_COARSE: number;
	AK_MIDI_CC_PAN_POSITION_COARSE: number;
	AK_MIDI_CC_EXPRESSION_COARSE: number;
	AK_MIDI_CC_EFFECT_CTRL_1_COARSE: number;
	AK_MIDI_CC_EFFECT_CTRL_2_COARSE: number;
	AK_MIDI_CC_CTRL_14_COARSE: number;
	AK_MIDI_CC_CTRL_15_COARSE: number;
	AK_MIDI_CC_GEN_SLIDER_1: number;
	AK_MIDI_CC_GEN_SLIDER_2: number;
	AK_MIDI_CC_GEN_SLIDER_3: number;
	AK_MIDI_CC_GEN_SLIDER_4: number;
	AK_MIDI_CC_CTRL_20_COARSE: number;
	AK_MIDI_CC_CTRL_21_COARSE: number;
	AK_MIDI_CC_CTRL_22_COARSE: number;
	AK_MIDI_CC_CTRL_23_COARSE: number;
	AK_MIDI_CC_CTRL_24_COARSE: number;
	AK_MIDI_CC_CTRL_25_COARSE: number;
	AK_MIDI_CC_CTRL_26_COARSE: number;
	AK_MIDI_CC_CTRL_27_COARSE: number;
	AK_MIDI_CC_CTRL_28_COARSE: number;
	AK_MIDI_CC_CTRL_29_COARSE: number;
	AK_MIDI_CC_CTRL_30_COARSE: number;
	AK_MIDI_CC_CTRL_31_COARSE: number;
	AK_MIDI_CC_BANK_SELECT_FINE: number;
	AK_MIDI_CC_MOD_WHEEL_FINE: number;
	AK_MIDI_CC_BREATH_CTRL_FINE: number;
	AK_MIDI_CC_CTRL_3_FINE: number;
	AK_MIDI_CC_FOOT_PEDAL_FINE: number;
	AK_MIDI_CC_PORTAMENTO_FINE: number;
	AK_MIDI_CC_DATA_ENTRY_FINE: number;
	AK_MIDI_CC_VOLUME_FINE: number;
	AK_MIDI_CC_BALANCE_FINE: number;
	AK_MIDI_CC_CTRL_9_FINE: number;
	AK_MIDI_CC_PAN_POSITION_FINE: number;
	AK_MIDI_CC_EXPRESSION_FINE: number;
	AK_MIDI_CC_EFFECT_CTRL_1_FINE: number;
	AK_MIDI_CC_EFFECT_CTRL_2_FINE: number;
	AK_MIDI_CC_CTRL_14_FINE: number;
	AK_MIDI_CC_CTRL_15_FINE: number;
	AK_MIDI_CC_CTRL_20_FINE: number;
	AK_MIDI_CC_CTRL_21_FINE: number;
	AK_MIDI_CC_CTRL_22_FINE: number;
	AK_MIDI_CC_CTRL_23_FINE: number;
	AK_MIDI_CC_CTRL_24_FINE: number;
	AK_MIDI_CC_CTRL_25_FINE: number;
	AK_MIDI_CC_CTRL_26_FINE: number;
	AK_MIDI_CC_CTRL_27_FINE: number;
	AK_MIDI_CC_CTRL_28_FINE: number;
	AK_MIDI_CC_CTRL_29_FINE: number;
	AK_MIDI_CC_CTRL_30_FINE: number;
	AK_MIDI_CC_CTRL_31_FINE: number;
	AK_MIDI_CC_HOLD_PEDAL: number;
	AK_MIDI_CC_PORTAMENTO_ON_OFF: number;
	AK_MIDI_CC_SUSTENUTO_PEDAL: number;
	AK_MIDI_CC_SOFT_PEDAL: number;
	AK_MIDI_CC_LEGATO_PEDAL: number;
	AK_MIDI_CC_HOLD_PEDAL_2: number;
	AK_MIDI_CC_SOUND_VARIATION: number;
	AK_MIDI_CC_SOUND_TIMBRE: number;
	AK_MIDI_CC_SOUND_RELEASE_TIME: number;
	AK_MIDI_CC_SOUND_ATTACK_TIME: number;
	AK_MIDI_CC_SOUND_BRIGHTNESS: number;
	AK_MIDI_CC_SOUND_CTRL_6: number;
	AK_MIDI_CC_SOUND_CTRL_7: number;
	AK_MIDI_CC_SOUND_CTRL_8: number;
	AK_MIDI_CC_SOUND_CTRL_9: number;
	AK_MIDI_CC_SOUND_CTRL_10: number;
	AK_MIDI_CC_GENERAL_BUTTON_1: number;
	AK_MIDI_CC_GENERAL_BUTTON_2: number;
	AK_MIDI_CC_GENERAL_BUTTON_3: number;
	AK_MIDI_CC_GENERAL_BUTTON_4: number;
	AK_MIDI_CC_REVERB_LEVEL: number;
	AK_MIDI_CC_TREMOLO_LEVEL: number;
	AK_MIDI_CC_CHORUS_LEVEL: number;
	AK_MIDI_CC_CELESTE_LEVEL: number;
	AK_MIDI_CC_PHASER_LEVEL: number;
	AK_MIDI_CC_DATA_BUTTON_P1: number;
	AK_MIDI_CC_DATA_BUTTON_M1: number;
	AK_MIDI_CC_NON_REGISTER_COARSE: number;
	AK_MIDI_CC_NON_REGISTER_FINE: number;
	AK_MIDI_CC_ALL_SOUND_OFF: number;
	AK_MIDI_CC_ALL_CONTROLLERS_OFF: number;
	AK_MIDI_CC_LOCAL_KEYBOARD: number;
	AK_MIDI_CC_ALL_NOTES_OFF: number;
	AK_MIDI_CC_OMNI_MODE_OFF: number;
	AK_MIDI_CC_OMNI_MODE_ON: number;
	AK_MIDI_CC_OMNI_MONOPHONIC_ON: number;
	AK_MIDI_CC_OMNI_POLYPHONIC_ON: number;
	AK_MIDI_WWISE_CMD_PLAY: number;
	AK_MIDI_WWISE_CMD_STOP: number;
	AK_MIDI_WWISE_CMD_PAUSE: number;
	AK_MIDI_WWISE_CMD_RESUME: number;
	AK_MIDI_WWISE_CMD_SEEK_MS: number;
	AK_MIDI_WWISE_CMD_SEEK_SAMPLES: number;
	AK_SPEAKER_FRONT_LEFT: number;
	AK_SPEAKER_FRONT_RIGHT: number;
	AK_SPEAKER_FRONT_CENTER: number;
	AK_SPEAKER_LOW_FREQUENCY: number;
	AK_SPEAKER_BACK_LEFT: number;
	AK_SPEAKER_BACK_RIGHT: number;
	AK_SPEAKER_BACK_CENTER: number;
	AK_SPEAKER_SIDE_LEFT: number;
	AK_SPEAKER_SIDE_RIGHT: number;
	AK_SPEAKER_TOP: number;
	AK_SPEAKER_HEIGHT_FRONT_LEFT: number;
	AK_SPEAKER_HEIGHT_FRONT_CENTER: number;
	AK_SPEAKER_HEIGHT_FRONT_RIGHT: number;
	AK_SPEAKER_HEIGHT_BACK_LEFT: number;
	AK_SPEAKER_HEIGHT_BACK_CENTER: number;
	AK_SPEAKER_HEIGHT_BACK_RIGHT: number;
	AK_SPEAKER_SETUP_MONO: number;
	AK_SPEAKER_SETUP_0POINT1: number;
	AK_SPEAKER_SETUP_1POINT1: number;
	AK_SPEAKER_SETUP_STEREO: number;
	AK_SPEAKER_SETUP_2POINT1: number;
	AK_SPEAKER_SETUP_3STEREO: number;
	AK_SPEAKER_SETUP_3POINT1: number;
	AK_SPEAKER_SETUP_4: number;
	AK_SPEAKER_SETUP_4POINT1: number;
	AK_SPEAKER_SETUP_5: number;
	AK_SPEAKER_SETUP_5POINT1: number;
	AK_SPEAKER_SETUP_6: number;
	AK_SPEAKER_SETUP_6POINT1: number;
	AK_SPEAKER_SETUP_7: number;
	AK_SPEAKER_SETUP_7POINT1: number;
	AK_SPEAKER_SETUP_SURROUND: number;
	AK_SPEAKER_SETUP_DPL2: number;
	AK_SPEAKER_SETUP_HEIGHT_2: number;
	AK_SPEAKER_SETUP_HEIGHT_4: number;
	AK_SPEAKER_SETUP_HEIGHT_5: number;
	AK_SPEAKER_SETUP_HEIGHT_ALL: number;
	AK_SPEAKER_SETUP_HEIGHT_4_TOP: number;
	AK_SPEAKER_SETUP_HEIGHT_5_TOP: number;
	AK_SPEAKER_SETUP_AURO_222: number;
	AK_SPEAKER_SETUP_AURO_8: number;
	AK_SPEAKER_SETUP_AURO_9: number;
	AK_SPEAKER_SETUP_AURO_9POINT1: number;
	AK_SPEAKER_SETUP_AURO_10: number;
	AK_SPEAKER_SETUP_AURO_10POINT1: number;
	AK_SPEAKER_SETUP_AURO_11: number;
	AK_SPEAKER_SETUP_AURO_11POINT1: number;
	AK_SPEAKER_SETUP_AURO_11_740: number;
	AK_SPEAKER_SETUP_AURO_11POINT1_740: number;
	AK_SPEAKER_SETUP_AURO_13_751: number;
	AK_SPEAKER_SETUP_AURO_13POINT1_751: number;
	AK_SPEAKER_SETUP_DOLBY_5_0_2: number;
	AK_SPEAKER_SETUP_DOLBY_5_1_2: number;
	AK_SPEAKER_SETUP_DOLBY_6_0_2: number;
	AK_SPEAKER_SETUP_DOLBY_6_1_2: number;
	AK_SPEAKER_SETUP_DOLBY_6_0_4: number;
	AK_SPEAKER_SETUP_DOLBY_6_1_4: number;
	AK_SPEAKER_SETUP_DOLBY_7_0_2: number;
	AK_SPEAKER_SETUP_DOLBY_7_1_2: number;
	AK_SPEAKER_SETUP_DOLBY_7_0_4: number;
	AK_SPEAKER_SETUP_DOLBY_7_1_4: number;
	AK_SPEAKER_SETUP_ALL_SPEAKERS: number;
	AK_IDX_SETUP_FRONT_LEFT: number;
	AK_IDX_SETUP_FRONT_RIGHT: number;
	AK_IDX_SETUP_CENTER: number;
	AK_IDX_SETUP_NOCENTER_BACK_LEFT: number;
	AK_IDX_SETUP_NOCENTER_BACK_RIGHT: number;
	AK_IDX_SETUP_NOCENTER_SIDE_LEFT: number;
	AK_IDX_SETUP_NOCENTER_SIDE_RIGHT: number;
	AK_IDX_SETUP_WITHCENTER_BACK_LEFT: number;
	AK_IDX_SETUP_WITHCENTER_BACK_RIGHT: number;
	AK_IDX_SETUP_WITHCENTER_SIDE_LEFT: number;
	AK_IDX_SETUP_WITHCENTER_SIDE_RIGHT: number;
	AK_IDX_SETUP_0_LFE: number;
	AK_IDX_SETUP_1_CENTER: number;
	AK_IDX_SETUP_1_LFE: number;
	AK_IDX_SETUP_2_LEFT: number;
	AK_IDX_SETUP_2_RIGHT: number;
	AK_IDX_SETUP_2_LFE: number;
	AK_IDX_SETUP_3_LEFT: number;
	AK_IDX_SETUP_3_RIGHT: number;
	AK_IDX_SETUP_3_CENTER: number;
	AK_IDX_SETUP_3_LFE: number;
	AK_IDX_SETUP_4_FRONTLEFT: number;
	AK_IDX_SETUP_4_FRONTRIGHT: number;
	AK_IDX_SETUP_4_REARLEFT: number;
	AK_IDX_SETUP_4_REARRIGHT: number;
	AK_IDX_SETUP_4_LFE: number;
	AK_IDX_SETUP_5_FRONTLEFT: number;
	AK_IDX_SETUP_5_FRONTRIGHT: number;
	AK_IDX_SETUP_5_CENTER: number;
	AK_IDX_SETUP_5_REARLEFT: number;
	AK_IDX_SETUP_5_REARRIGHT: number;
	AK_IDX_SETUP_5_LFE: number;
	AK_IDX_SETUP_6_FRONTLEFT: number;
	AK_IDX_SETUP_6_FRONTRIGHT: number;
	AK_IDX_SETUP_6_REARLEFT: number;
	AK_IDX_SETUP_6_REARRIGHT: number;
	AK_IDX_SETUP_6_SIDELEFT: number;
	AK_IDX_SETUP_6_SIDERIGHT: number;
	AK_IDX_SETUP_6_LFE: number;
	AK_IDX_SETUP_7_FRONTLEFT: number;
	AK_IDX_SETUP_7_FRONTRIGHT: number;
	AK_IDX_SETUP_7_CENTER: number;
	AK_IDX_SETUP_7_REARLEFT: number;
	AK_IDX_SETUP_7_REARRIGHT: number;
	AK_IDX_SETUP_7_SIDELEFT: number;
	AK_IDX_SETUP_7_SIDERIGHT: number;
	AK_IDX_SETUP_7_LFE: number;
	AK_SPEAKER_SETUP_0_1: number;
	AK_SPEAKER_SETUP_1_0_CENTER: number;
	AK_SPEAKER_SETUP_1_1_CENTER: number;
	AK_SPEAKER_SETUP_2_0: number;
	AK_SPEAKER_SETUP_2_1: number;
	AK_SPEAKER_SETUP_3_0: number;
	AK_SPEAKER_SETUP_3_1: number;
	AK_SPEAKER_SETUP_FRONT: number;
	AK_SPEAKER_SETUP_4_0: number;
	AK_SPEAKER_SETUP_4_1: number;
	AK_SPEAKER_SETUP_5_0: number;
	AK_SPEAKER_SETUP_5_1: number;
	AK_SPEAKER_SETUP_6_0: number;
	AK_SPEAKER_SETUP_6_1: number;
	AK_SPEAKER_SETUP_7_0: number;
	AK_SPEAKER_SETUP_7_1: number;
	AK_SPEAKER_SETUP_DEFAULT_PLANE: number;
	AK_SUPPORTED_STANDARD_CHANNEL_MASK: number;
	AK_STANDARD_MAX_NUM_CHANNELS: number;
	AK_MAX_AMBISONICS_ORDER: number;
	AK_MAX_NUM_TEXTURE: number;
	AK_MAX_REFLECT_ORDER: number;
	AK_MAX_REFLECTION_PATH_LENGTH: number;
	AK_MAX_SOUND_PROPAGATION_DEPTH: number;
	AK_MAX_SOUND_PROPAGATION_WIDTH: number;
	AK_DEFAULT_MOVEMENT_THRESHOLD: number;
	AK_SA_EPSILON: number;
	AK_SA_DIFFRACTION_EPSILON: number;
	AK_SA_DIFFRACTION_DOT_EPSILON: number;
	AK_SA_PLANE_THICKNESS_RATIO: number;
	AK_SA_MIN_ENVIRONMENT_ABSORPTION: number;
	AK_SA_MIN_ENVIRONMENT_SURFACE_AREA: number;
	AK_DEFAULT_GEOMETRY_POSITION_X: number;
	AK_DEFAULT_GEOMETRY_POSITION_Y: number;
	AK_DEFAULT_GEOMETRY_POSITION_Z: number;
	AK_DEFAULT_GEOMETRY_FRONT_X: number;
	AK_DEFAULT_GEOMETRY_FRONT_Y: number;
	AK_DEFAULT_GEOMETRY_FRONT_Z: number;
	AK_DEFAULT_GEOMETRY_TOP_X: number;
	AK_DEFAULT_GEOMETRY_TOP_Y: number;
	AK_DEFAULT_GEOMETRY_TOP_Z: number;
	Deprecation_2018_1_2: string;
	Deprecation_2018_1_6: string;
	Deprecation_2019_2_0: string;
	Deprecation_2019_2_2: string;
	Deprecation_2021_1_0: string;
	Deprecation_2022_1_0: string;
	AK_PENDING_EVENT_LOAD_ID: number;
	AK_INVALID_SHARE_SET_ID: number;
	AK_INVALID_PIPELINE_ID: number;
	AK_INVALID_AUDIO_OBJECT_ID: number;
	AK_SOUNDBANK_VERSION: number;
	AkJobType_Generic: number;
	AkJobType_AudioProcessing: number;
	AkJobType_SpatialAudio: number;
	AK_NUM_JOB_TYPES: number;
	AK_INT: number;
	AK_FLOAT: number;
	AK_INTERLEAVED: number;
	AK_NONINTERLEAVED: number;
	AK_LE_NATIVE_BITSPERSAMPLE: number;
	AK_LE_NATIVE_SAMPLETYPE: number;
	AK_LE_NATIVE_INTERLEAVE: number;
	AK_INVALID_MIDI_CHANNEL: number;
	AK_INVALID_MIDI_NOTE: number;
	kDefaultDiffractionMaxEdges: number;
	kDefaultDiffractionMaxPaths: number;
	kMaxDiffraction: number;
	kDiffractionMaxEdges: number;
	kDiffractionMaxPaths: number;
	kPortalToPortalDiffractionMaxPaths: number;
	EditorIsSoundEngineLoaded: boolean;
	GameObjectHash: GameObjectHashFunction;
	WwiseVersion: string;

	AddBasePath(in_pszBasePath: string): AKRESULT;
	AddDefaultListener(in_listenerGameObj: number): AKRESULT;
	AddDefaultListener(in_listenerGameObj: GameObject): AKRESULT;
	AddListener(in_emitterGameObj: number, in_listenerGameObj: number): AKRESULT;
	AddListener(in_emitterGameObj: GameObject, in_listenerGameObj: GameObject): AKRESULT;
	AddOutput(
		in_Settings: AkOutputSettings,
		out_pDeviceID: unknown,
		in_pListenerIDs: CSArray<number>,
		in_uNumListeners: number,
	): AKRESULT;
	AddOutput(in_Settings: AkOutputSettings, out_pDeviceID: unknown, in_pListenerIDs: CSArray<number>): AKRESULT;
	AddOutput(in_Settings: AkOutputSettings, out_pDeviceID: unknown): AKRESULT;
	AddOutput(in_Settings: AkOutputSettings): AKRESULT;
	AddOutputCaptureMarker(in_MarkerText: string): AKRESULT;
	AK_SPEAKER_SETUP_CONVERT_TO_SUPPORTED(io_uChannelMask: unknown): void;
	AK_SPEAKER_SETUP_FIX_LEFT_TO_CENTER(io_uChannelMask: unknown): void;
	AK_SPEAKER_SETUP_FIX_REAR_TO_SIDE(io_uChannelMask: unknown): void;
	AkGetDefaultHighPriorityThreadProperties(out_threadProperties: AkThreadProperties): void;
	BackToSideChannels(in_uChannelMask: number): number;
	CancelBankCallbackCookie(in_pCookie: unknown): void;
	CancelEventCallback(in_playingID: number): void;
	CancelEventCallbackCookie(in_pCookie: unknown): void;
	CancelEventCallbackGameObject(in_gameObjectID: number): void;
	CancelEventCallbackGameObject(in_gameObjectID: GameObject): void;
	ChannelBitToIndex(in_uChannelBit: number, in_uChannelMask: number): number;
	ChannelMaskFromNumChannels(in_uNumChannels: number): number;
	ChannelMaskToNumChannels(in_uChannelMask: number): number;
	ClearBanks(): AKRESULT;
	ClearCaptureData(): void;
	ClearImageSources(in_AuxBusID: number, in_gameObjectID: number): AKRESULT;
	ClearImageSources(in_AuxBusID: number): AKRESULT;
	ClearImageSources(): AKRESULT;
	ClearImageSources(in_AuxBusID: number, in_gameObjectID: GameObject): AKRESULT;
	ClearPreparedEvents(): AKRESULT;
	ConvertAkTransformToAkWorldTransform(in_: AkTransform): AkWorldTransform;
	ConvertAkVector64ToAkVector(in_: AkVector64): Vector3;
	ConvertAkVectorToAkVector64(in_: Vector3): AkVector64;
	ConvertAkWorldTransformToAkTransform(in_: AkWorldTransform): AkTransform;
	DynamicSequenceBreak(in_playingID: number): AKRESULT;
	DynamicSequenceClose(in_playingID: number): AKRESULT;
	DynamicSequenceGetPauseTimes(in_playingID: number, out_uTime: unknown, out_uDuration: unknown): AKRESULT;
	DynamicSequenceLockPlaylist(in_playingID: number): AkPlaylist;
	DynamicSequenceOpen(
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_eDynamicSequenceType: AkDynamicSequenceType,
	): number;
	DynamicSequenceOpen(
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	DynamicSequenceOpen(in_gameObjectID: number): number;
	DynamicSequenceOpen(
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_eDynamicSequenceType: AkDynamicSequenceType,
	): number;
	DynamicSequenceOpen(
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	DynamicSequenceOpen(in_gameObjectID: GameObject): number;
	DynamicSequencePause(
		in_playingID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	DynamicSequencePause(in_playingID: number, in_uTransitionDuration: number): AKRESULT;
	DynamicSequencePause(in_playingID: number): AKRESULT;
	DynamicSequencePlay(
		in_playingID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	DynamicSequencePlay(in_playingID: number, in_uTransitionDuration: number): AKRESULT;
	DynamicSequencePlay(in_playingID: number): AKRESULT;
	DynamicSequenceResume(
		in_playingID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	DynamicSequenceResume(in_playingID: number, in_uTransitionDuration: number): AKRESULT;
	DynamicSequenceResume(in_playingID: number): AKRESULT;
	DynamicSequenceStop(
		in_playingID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	DynamicSequenceStop(in_playingID: number, in_uTransitionDuration: number): AKRESULT;
	DynamicSequenceStop(in_playingID: number): AKRESULT;
	DynamicSequenceUnlockPlaylist(in_playingID: number): AKRESULT;
	ExecuteActionOnEvent(
		in_eventID: number,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_PlayingID: number,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_eventID: number,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_eventID: number,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: number,
		in_uTransitionDuration: number,
	): AKRESULT;
	ExecuteActionOnEvent(in_eventID: number, in_ActionType: AkActionOnEventType, in_gameObjectID: number): AKRESULT;
	ExecuteActionOnEvent(in_eventID: number, in_ActionType: AkActionOnEventType): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_PlayingID: number,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: number,
		in_uTransitionDuration: number,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: number,
	): AKRESULT;
	ExecuteActionOnEvent(in_pszEventName: string, in_ActionType: AkActionOnEventType): AKRESULT;
	ExecuteActionOnEvent(
		in_eventID: number,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: GameObject,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_PlayingID: number,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_eventID: number,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: GameObject,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_eventID: number,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: GameObject,
		in_uTransitionDuration: number,
	): AKRESULT;
	ExecuteActionOnEvent(in_eventID: number, in_ActionType: AkActionOnEventType, in_gameObjectID: GameObject): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: GameObject,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_PlayingID: number,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: GameObject,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: GameObject,
		in_uTransitionDuration: number,
	): AKRESULT;
	ExecuteActionOnEvent(
		in_pszEventName: string,
		in_ActionType: AkActionOnEventType,
		in_gameObjectID: GameObject,
	): AKRESULT;
	ExecuteActionOnPlayingID(
		in_ActionType: AkActionOnEventType,
		in_playingID: number,
		in_uTransitionDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): void;
	ExecuteActionOnPlayingID(
		in_ActionType: AkActionOnEventType,
		in_playingID: number,
		in_uTransitionDuration: number,
	): void;
	ExecuteActionOnPlayingID(in_ActionType: AkActionOnEventType, in_playingID: number): void;
	GetAkGameObjectID(gameObject: GameObject): number;
	GetAudioSettings(out_audioSettings: AkAudioSettings): AKRESULT;
	GetBackgroundMusicMute(): boolean;
	GetBufferStatusForPinnedEvent(
		in_eventID: number,
		out_fPercentBuffered: unknown,
		out_bCachePinnedMemoryFull: unknown,
	): AKRESULT;
	GetBufferStatusForPinnedEvent(
		in_pszEventName: string,
		out_fPercentBuffered: unknown,
		out_bCachePinnedMemoryFull: unknown,
	): AKRESULT;
	GetBufferTick(): number;
	GetCaptureSamples(in_idOutputDeviceID: number, out_pSamples: CSArray<number>, in_uBufferSize: number): number;
	GetCurrentLanguage(): string;
	GetCustomPropertyValue(in_ObjectID: number, in_uPropID: number, out_iValue: unknown): AKRESULT;
	GetCustomPropertyValue(in_ObjectID: number, in_uPropID: number, out_fValue: unknown): AKRESULT;
	GetDefaultDeviceSettings(out_settings: AkDeviceSettings): void;
	GetDefaultInitSettings(out_settings: AkInitSettings): void;
	GetDefaultMusicSettings(out_settings: AkMusicSettings): void;
	GetDefaultPlatformInitSettings(out_settings: AkPlatformInitSettings): void;
	GetDefaultStreamSettings(out_settings: AkStreamMgrSettings): void;
	GetDeviceList(
		in_ulCompanyID: number,
		in_ulPluginID: number,
		io_maxNumDevices: unknown,
		out_deviceDescriptions: AkDeviceDescriptionArray,
	): AKRESULT;
	GetDeviceList(
		in_audioDeviceShareSetID: number,
		io_maxNumDevices: unknown,
		out_deviceDescriptions: AkDeviceDescriptionArray,
	): AKRESULT;
	GetDeviceSpatialAudioSupport(in_idDevice: number): AKRESULT;
	GetDialogueEventCustomPropertyValue(in_eventID: number, in_uPropID: number, out_iValue: unknown): AKRESULT;
	GetDialogueEventCustomPropertyValue(in_eventID: number, in_uPropID: number, out_fValue: unknown): AKRESULT;
	GetEventIDFromPlayingID(in_playingID: number): number;
	GetGameObjectAuxSendValues(
		in_gameObjectID: number,
		out_paAuxSendValues: AkAuxSendArray,
		io_ruNumSendValues: unknown,
	): AKRESULT;
	GetGameObjectAuxSendValues(
		in_gameObjectID: GameObject,
		out_paAuxSendValues: AkAuxSendArray,
		io_ruNumSendValues: unknown,
	): AKRESULT;
	GetGameObjectDryLevelValue(in_EmitterID: number, in_ListenerID: number, out_rfControlValue: unknown): AKRESULT;
	GetGameObjectDryLevelValue(
		in_EmitterID: GameObject,
		in_ListenerID: GameObject,
		out_rfControlValue: unknown,
	): AKRESULT;
	GetGameObjectFromPlayingID(in_playingID: number): number;
	GetIDFromString(in_pszString: string): number;
	GetIsGameObjectActive(in_GameObjId: number): boolean;
	GetIsGameObjectActive(in_GameObjId: GameObject): boolean;
	GetListenerPosition(in_uIndex: number, out_rPosition: AkWorldTransform): AKRESULT;
	GetListenerPosition(in_uIndex: GameObject, out_rPosition: AkTransform): AKRESULT;
	GetMajorMinorVersion(): number;
	GetMaxRadius(in_GameObjId: number): number;
	GetMaxRadius(in_GameObjId: GameObject): number;
	GetNextPowerOfTwo(in_uValue: number): number;
	GetNumNonZeroBits(in_uWord: number): number;
	GetObjectObstructionAndOcclusion(
		in_EmitterID: number,
		in_ListenerID: number,
		out_rfObstructionLevel: unknown,
		out_rfOcclusionLevel: unknown,
	): AKRESULT;
	GetObjectObstructionAndOcclusion(
		in_EmitterID: GameObject,
		in_ListenerID: GameObject,
		out_rfObstructionLevel: unknown,
		out_rfOcclusionLevel: unknown,
	): AKRESULT;
	GetOutputDeviceConfiguration(
		in_idOutput: number,
		io_channelConfig: AkChannelConfig,
		io_capabilities: Ak3DAudioSinkCapabilities,
	): AKRESULT;
	GetOutputID(in_idShareset: number, in_idDevice: number): number;
	GetOutputID(in_szShareSet: string, in_idDevice: number): number;
	GetPanningRule(out_ePanningRule: unknown, in_idOutput: number): AKRESULT;
	GetPanningRule(out_ePanningRule: unknown): AKRESULT;
	GetPlayingIDsFromGameObject(in_GameObjId: number, io_ruNumIDs: unknown, out_aPlayingIDs: CSArray<number>): AKRESULT;
	GetPlayingIDsFromGameObject(
		in_GameObjId: GameObject,
		io_ruNumIDs: unknown,
		out_aPlayingIDs: CSArray<number>,
	): AKRESULT;
	GetPlayingSegmentInfo(in_PlayingID: number, out_segmentInfo: AkSegmentInfo, in_bExtrapolate: boolean): AKRESULT;
	GetPlayingSegmentInfo(in_PlayingID: number, out_segmentInfo: AkSegmentInfo): AKRESULT;
	GetPosition(in_GameObjectID: number, out_rPosition: AkWorldTransform): AKRESULT;
	GetPosition(in_GameObjectID: GameObject, out_rPosition: AkTransform): AKRESULT;
	GetPositioningInfo(in_ObjectID: number, out_rPositioningInfo: AkPositioningInfo): AKRESULT;
	GetResourceMonitorDataSummary(resourceMonitorDataSummary: AkResourceMonitorDataSummary): void;
	GetRTPCValue(
		in_rtpcID: number,
		in_gameObjectID: number,
		in_playingID: number,
		out_rValue: unknown,
		io_rValueType: unknown,
	): AKRESULT;
	GetRTPCValue(
		in_pszRtpcName: string,
		in_gameObjectID: number,
		in_playingID: number,
		out_rValue: unknown,
		io_rValueType: unknown,
	): AKRESULT;
	GetRTPCValue(
		in_rtpcID: number,
		in_gameObjectID: GameObject,
		in_playingID: number,
		out_rValue: unknown,
		io_rValueType: unknown,
	): AKRESULT;
	GetRTPCValue(
		in_pszRtpcName: string,
		in_gameObjectID: GameObject,
		in_playingID: number,
		out_rValue: unknown,
		io_rValueType: unknown,
	): AKRESULT;
	GetSampleRate(): number;
	GetSampleTick(): number;
	GetSourceMultiplePlayPositions(
		in_PlayingID: number,
		out_audioNodeID: CSArray<number>,
		out_mediaID: CSArray<number>,
		out_msTime: CSArray<number>,
		io_pcPositions: unknown,
		in_bExtrapolate: boolean,
	): AKRESULT;
	GetSourceMultiplePlayPositions(
		in_PlayingID: number,
		out_audioNodeID: CSArray<number>,
		out_mediaID: CSArray<number>,
		out_msTime: CSArray<number>,
		io_pcPositions: unknown,
	): AKRESULT;
	GetSourcePlayPosition(in_PlayingID: number, out_puPosition: unknown, in_bExtrapolate: boolean): AKRESULT;
	GetSourcePlayPosition(in_PlayingID: number, out_puPosition: unknown): AKRESULT;
	GetSourceStreamBuffering(in_PlayingID: number, out_buffering: unknown, out_bIsBuffering: unknown): AKRESULT;
	GetSpeakerAngles(
		io_pfSpeakerAngles: CSArray<number>,
		io_uNumAngles: unknown,
		out_fHeightAngle: unknown,
		in_idOutput: number,
	): AKRESULT;
	GetSpeakerAngles(io_pfSpeakerAngles: CSArray<number>, io_uNumAngles: unknown, out_fHeightAngle: unknown): AKRESULT;
	GetSpeakerConfiguration(in_idOutput: number): AkChannelConfig;
	GetSpeakerConfiguration(): AkChannelConfig;
	GetState(in_stateGroup: number, out_rState: unknown): AKRESULT;
	GetState(in_pstrStateGroupName: string, out_rState: unknown): AKRESULT;
	GetSubminorBuildVersion(): number;
	GetSwitch(in_switchGroup: number, in_gameObjectID: number, out_rSwitchState: unknown): AKRESULT;
	GetSwitch(in_pstrSwitchGroupName: string, in_GameObj: number, out_rSwitchState: unknown): AKRESULT;
	GetSwitch(in_switchGroup: number, in_gameObjectID: GameObject, out_rSwitchState: unknown): AKRESULT;
	GetSwitch(in_pstrSwitchGroupName: string, in_GameObj: GameObject, out_rSwitchState: unknown): AKRESULT;
	GetTimeStamp(): number;
	HasHeightChannels(in_uChannelMask: number): boolean;
	HasSideAndRearChannels(in_uChannelMask: number): boolean;
	HasStrictlyOnePairOfSurroundChannels(in_uChannelMask: number): boolean;
	HasSurroundChannels(in_uChannelMask: number): boolean;
	Init(settings: AkInitializationSettings): AKRESULT;
	InitCommunication(settings: AkCommunicationSettings): AKRESULT;
	InitSpatialAudio(settings: AkSpatialAudioInitSettings): AKRESULT;
	IsBankCodecID(in_codecID: number): boolean;
	IsGameObjectRegistered(in_gameObject: GameObject): boolean;
	IsInitialized(): boolean;
	LoadAndDecodeBank(in_pszString: string, in_bSaveDecodedBank: boolean, out_bankID: unknown): AKRESULT;
	LoadAndDecodeBankFromMemory(
		in_BankData: unknown,
		in_BankDataSize: number,
		in_bSaveDecodedBank: boolean,
		in_DecodedBankName: string,
		in_bIsLanguageSpecific: boolean,
		out_bankID: unknown,
	): AKRESULT;
	LoadBank(in_pszString: string, out_bankID: unknown, in_bankType: number): AKRESULT;
	LoadBank(in_pszString: string, out_bankID: unknown): AKRESULT;
	LoadBank(in_bankID: number, in_bankType: number): AKRESULT;
	LoadBank(in_bankID: number): AKRESULT;
	LoadBank(
		in_pszString: string,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		out_bankID: unknown,
		in_bankType: number,
	): AKRESULT;
	LoadBank(
		in_pszString: string,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		out_bankID: unknown,
	): AKRESULT;
	LoadBank(in_bankID: number, in_pfnBankCallback: BankCallback, in_pCookie: unknown, in_bankType: number): AKRESULT;
	LoadBank(in_bankID: number, in_pfnBankCallback: BankCallback, in_pCookie: unknown): AKRESULT;
	LoadBankMemoryCopy(in_pInMemoryBankPtr: unknown, in_uInMemoryBankSize: number, out_bankID: unknown): AKRESULT;
	LoadBankMemoryCopy(
		in_pInMemoryBankPtr: unknown,
		in_uInMemoryBankSize: number,
		out_bankID: unknown,
		out_bankType: unknown,
	): AKRESULT;
	LoadBankMemoryCopy(
		in_pInMemoryBankPtr: unknown,
		in_uInMemoryBankSize: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		out_bankID: unknown,
		out_bankType: unknown,
	): AKRESULT;
	LoadBankMemoryView(in_pInMemoryBankPtr: unknown, in_uInMemoryBankSize: number, out_bankID: unknown): AKRESULT;
	LoadBankMemoryView(
		in_pInMemoryBankPtr: unknown,
		in_uInMemoryBankSize: number,
		out_bankID: unknown,
		out_bankType: unknown,
	): AKRESULT;
	LoadBankMemoryView(
		in_pInMemoryBankPtr: unknown,
		in_uInMemoryBankSize: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		out_bankID: unknown,
	): AKRESULT;
	LoadBankMemoryView(
		in_pInMemoryBankPtr: unknown,
		in_uInMemoryBankSize: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		out_bankID: unknown,
		out_bankType: unknown,
	): AKRESULT;
	LoadFilePackage(in_pszFilePackageName: string, out_uPackageID: unknown): AKRESULT;
	MonitorStreamingDeviceDestroyed(in_deviceID: number): void;
	MonitorStreamingDeviceInit(in_deviceID: number, in_deviceSettings: AkDeviceSettings): void;
	MonitorStreamMgrInit(in_streamMgrSettings: AkStreamMgrSettings): void;
	MonitorStreamMgrTerm(): void;
	MuteBackgroundMusic(in_bMute: boolean): void;
	PerformStreamMgrIO(): void;
	PinEventInStreamCache(in_eventID: number, in_uActivePriority: number, in_uInactivePriority: number): AKRESULT;
	PinEventInStreamCache(in_pszEventName: string, in_uActivePriority: number, in_uInactivePriority: number): AKRESULT;
	PostCode(
		in_eError: AkMonitorErrorCode,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: number,
		in_audioNodeID: number,
		in_bIsBus: boolean,
	): AKRESULT;
	PostCode(
		in_eError: AkMonitorErrorCode,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: number,
		in_audioNodeID: number,
	): AKRESULT;
	PostCode(
		in_eError: AkMonitorErrorCode,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: number,
	): AKRESULT;
	PostCode(in_eError: AkMonitorErrorCode, in_eErrorLevel: AkMonitorErrorLevel, in_playingID: number): AKRESULT;
	PostCode(in_eError: AkMonitorErrorCode, in_eErrorLevel: AkMonitorErrorLevel): AKRESULT;
	PostCode(
		in_eError: AkMonitorErrorCode,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: GameObject,
		in_audioNodeID: number,
		in_bIsBus: boolean,
	): AKRESULT;
	PostCode(
		in_eError: AkMonitorErrorCode,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: GameObject,
		in_audioNodeID: number,
	): AKRESULT;
	PostCode(
		in_eError: AkMonitorErrorCode,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: GameObject,
	): AKRESULT;
	PostCodeVarArg(
		in_eError: AkMonitorErrorCode,
		in_eErrorLevel: AkMonitorErrorLevel,
		msgContext: MsgContext,
	): AKRESULT;
	PostEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
		in_PlayingID: number,
	): number;
	PostEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
	): number;
	PostEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	PostEvent(in_eventID: number, in_gameObjectID: number): number;
	PostEvent(
		in_pszEventName: string,
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
		in_PlayingID: number,
	): number;
	PostEvent(
		in_pszEventName: string,
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
	): number;
	PostEvent(
		in_pszEventName: string,
		in_gameObjectID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	PostEvent(in_pszEventName: string, in_gameObjectID: number): number;
	PostEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
		in_PlayingID: number,
	): number;
	PostEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
	): number;
	PostEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	PostEvent(in_eventID: number, in_gameObjectID: GameObject): number;
	PostEvent(
		in_pszEventName: string,
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
		in_PlayingID: number,
	): number;
	PostEvent(
		in_pszEventName: string,
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
	): number;
	PostEvent(
		in_pszEventName: string,
		in_gameObjectID: GameObject,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	PostEvent(in_pszEventName: string, in_gameObjectID: GameObject): number;
	PostEventOnRoom(
		in_pszEventName: string,
		in_roomID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
		in_PlayingID: number,
	): number;
	PostEventOnRoom(
		in_pszEventName: string,
		in_roomID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
	): number;
	PostEventOnRoom(
		in_pszEventName: string,
		in_roomID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	PostEventOnRoom(in_pszEventName: string, in_roomID: number): number;
	PostEventOnRoom(
		in_eventID: number,
		in_roomID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
		in_PlayingID: number,
	): number;
	PostEventOnRoom(
		in_eventID: number,
		in_roomID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_cExternals: number,
		in_pExternalSources: AkExternalSourceInfoArray,
	): number;
	PostEventOnRoom(
		in_eventID: number,
		in_roomID: number,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	PostEventOnRoom(in_eventID: number, in_roomID: number): number;
	PostMIDIOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_pPosts: AkMIDIPostArray,
		in_uNumPosts: number,
		in_bAbsoluteOffsets: boolean,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
		in_playingID: number,
	): number;
	PostMIDIOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_pPosts: AkMIDIPostArray,
		in_uNumPosts: number,
		in_bAbsoluteOffsets: boolean,
		in_uFlags: number,
		in_pfnCallback: EventCallback,
		in_pCookie: unknown,
	): number;
	PostMIDIOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_pPosts: AkMIDIPostArray,
		in_uNumPosts: number,
		in_bAbsoluteOffsets: boolean,
	): number;
	PostMIDIOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_pPosts: AkMIDIPostArray,
		in_uNumPosts: number,
	): number;
	PostMIDIOnEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_pPosts: AkMIDIPostArray,
		in_uNumPosts: number,
	): AKRESULT;
	PostString(
		in_pszError: string,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: number,
		in_audioNodeID: number,
		in_bIsBus: boolean,
	): AKRESULT;
	PostString(
		in_pszError: string,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: number,
		in_audioNodeID: number,
	): AKRESULT;
	PostString(
		in_pszError: string,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: number,
	): AKRESULT;
	PostString(in_pszError: string, in_eErrorLevel: AkMonitorErrorLevel, in_playingID: number): AKRESULT;
	PostString(in_pszError: string, in_eErrorLevel: AkMonitorErrorLevel): AKRESULT;
	PostString(
		in_pszError: string,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: GameObject,
		in_audioNodeID: number,
		in_bIsBus: boolean,
	): AKRESULT;
	PostString(
		in_pszError: string,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: GameObject,
		in_audioNodeID: number,
	): AKRESULT;
	PostString(
		in_pszError: string,
		in_eErrorLevel: AkMonitorErrorLevel,
		in_playingID: number,
		in_gameObjID: GameObject,
	): AKRESULT;
	PostTrigger(in_triggerID: number, in_gameObjectID: number): AKRESULT;
	PostTrigger(in_pszTrigger: string, in_gameObjectID: number): AKRESULT;
	PostTrigger(in_triggerID: number, in_gameObjectID: GameObject): AKRESULT;
	PostTrigger(in_pszTrigger: string, in_gameObjectID: GameObject): AKRESULT;
	PreGameObjectAPICall(gameObject: GameObject, id: number): void;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_pszString: string,
		in_uFlags: AkBankContent,
		in_bankType: number,
	): AKRESULT;
	PrepareBank(in_PreparationType: AkPreparationType, in_pszString: string, in_uFlags: AkBankContent): AKRESULT;
	PrepareBank(in_PreparationType: AkPreparationType, in_pszString: string): AKRESULT;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_bankID: number,
		in_uFlags: AkBankContent,
		in_bankType: number,
	): AKRESULT;
	PrepareBank(in_PreparationType: AkPreparationType, in_bankID: number, in_uFlags: AkBankContent): AKRESULT;
	PrepareBank(in_PreparationType: AkPreparationType, in_bankID: number): AKRESULT;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_pszString: string,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		in_uFlags: AkBankContent,
		in_bankType: number,
	): AKRESULT;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_pszString: string,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		in_uFlags: AkBankContent,
	): AKRESULT;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_pszString: string,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_bankID: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		in_uFlags: AkBankContent,
		in_bankType: number,
	): AKRESULT;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_bankID: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		in_uFlags: AkBankContent,
	): AKRESULT;
	PrepareBank(
		in_PreparationType: AkPreparationType,
		in_bankID: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	PrepareEvent(in_PreparationType: AkPreparationType, in_ppszString: CSArray<string>, in_uNumEvent: number): AKRESULT;
	PrepareEvent(in_PreparationType: AkPreparationType, in_pEventID: CSArray<number>, in_uNumEvent: number): AKRESULT;
	PrepareEvent(
		in_PreparationType: AkPreparationType,
		in_ppszString: CSArray<string>,
		in_uNumEvent: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	PrepareEvent(
		in_PreparationType: AkPreparationType,
		in_pEventID: CSArray<number>,
		in_uNumEvent: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	PrepareGameSyncs(
		in_PreparationType: AkPreparationType,
		in_eGameSyncType: AkGroupType,
		in_pszGroupName: string,
		in_ppszGameSyncName: CSArray<string>,
		in_uNumGameSyncs: number,
	): AKRESULT;
	PrepareGameSyncs(
		in_PreparationType: AkPreparationType,
		in_eGameSyncType: AkGroupType,
		in_GroupID: number,
		in_paGameSyncID: CSArray<number>,
		in_uNumGameSyncs: number,
	): AKRESULT;
	PrepareGameSyncs(
		in_PreparationType: AkPreparationType,
		in_eGameSyncType: AkGroupType,
		in_pszGroupName: string,
		in_ppszGameSyncName: CSArray<string>,
		in_uNumGameSyncs: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	PrepareGameSyncs(
		in_PreparationType: AkPreparationType,
		in_eGameSyncType: AkGroupType,
		in_GroupID: number,
		in_paGameSyncID: CSArray<number>,
		in_uNumGameSyncs: number,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	QueryAudioObjectIDs(in_eventID: number, io_ruNumItems: unknown, out_aObjectInfos: AkObjectInfoArray): AKRESULT;
	QueryAudioObjectIDs(in_pszEventName: string, io_ruNumItems: unknown, out_aObjectInfos: AkObjectInfoArray): AKRESULT;
	QueryDiffractionPaths(
		in_gameObjectID: number,
		in_positionIndex: number,
		out_listenerPos: unknown,
		out_emitterPos: unknown,
		out_aPaths: AkDiffractionPathInfoArray,
		io_uArraySize: unknown,
	): AKRESULT;
	QueryDiffractionPaths(
		in_gameObjectID: GameObject,
		in_positionIndex: number,
		out_listenerPos: unknown,
		out_emitterPos: unknown,
		out_aPaths: AkDiffractionPathInfoArray,
		io_uArraySize: unknown,
	): AKRESULT;
	QueryReflectionPaths(
		in_gameObjectID: number,
		in_positionIndex: number,
		out_listenerPos: unknown,
		out_emitterPos: unknown,
		out_aPaths: AkReflectionPathInfoArray,
		io_uArraySize: unknown,
	): AKRESULT;
	QueryReflectionPaths(
		in_gameObjectID: GameObject,
		in_positionIndex: number,
		out_listenerPos: unknown,
		out_emitterPos: unknown,
		out_aPaths: AkReflectionPathInfoArray,
		io_uArraySize: unknown,
	): AKRESULT;
	QueryWetDiffraction(in_portal: number, out_wetDiffraction: unknown): AKRESULT;
	RegisterGameObj(gameObject: GameObject): AKRESULT;
	RegisterGameObj(gameObject: GameObject, name: string): AKRESULT;
	RegisterGameObjInternal(in_GameObj: number): AKRESULT;
	RegisterGameObjInternal(in_GameObj: GameObject): AKRESULT;
	RegisterGameObjInternal_WithName(in_GameObj: number, in_pszObjName: string): AKRESULT;
	RegisterGameObjInternal_WithName(in_GameObj: GameObject, in_pszObjName: string): AKRESULT;
	RegisterPluginDLL(in_DllName: string, in_DllPath: string): AKRESULT;
	RegisterPluginDLL(in_DllName: string): AKRESULT;
	RegisterSpatialAudioListener(in_gameObjectID: number): AKRESULT;
	RegisterSpatialAudioListener(in_gameObjectID: GameObject): AKRESULT;
	RemoveDefaultListener(in_listenerGameObj: number): AKRESULT;
	RemoveDefaultListener(in_listenerGameObj: GameObject): AKRESULT;
	RemoveGeometry(in_SetID: number): AKRESULT;
	RemoveGeometryInstance(in_GeometryInstanceID: number): AKRESULT;
	RemoveImageSource(in_srcID: number, in_AuxBusID: number, in_gameObjectID: number): AKRESULT;
	RemoveImageSource(in_srcID: number, in_AuxBusID: number): AKRESULT;
	RemoveImageSource(in_srcID: number): AKRESULT;
	RemoveImageSource(in_srcID: number, in_AuxBusID: number, in_gameObjectID: GameObject): AKRESULT;
	RemoveListener(in_emitterGameObj: number, in_listenerGameObj: number): AKRESULT;
	RemoveListener(in_emitterGameObj: GameObject, in_listenerGameObj: GameObject): AKRESULT;
	RemoveOutput(in_idOutput: number): AKRESULT;
	RemovePortal(in_PortalID: number): AKRESULT;
	RemoveRoom(in_RoomID: number): AKRESULT;
	RenderAudio(in_bAllowSyncRender: boolean): AKRESULT;
	RenderAudio(): AKRESULT;
	ReplaceOutput(in_Settings: AkOutputSettings, in_outputDeviceId: number, out_pOutputDeviceId: unknown): AKRESULT;
	ReplaceOutput(in_Settings: AkOutputSettings, in_outputDeviceId: number): AKRESULT;
	ResetListenersToDefault(in_emitterGameObj: number): AKRESULT;
	ResetListenersToDefault(in_emitterGameObj: GameObject): AKRESULT;
	ResetRTPCValue(
		in_rtpcID: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	ResetRTPCValue(
		in_rtpcID: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ResetRTPCValue(in_rtpcID: number, in_gameObjectID: number, in_uValueChangeDuration: number): AKRESULT;
	ResetRTPCValue(in_rtpcID: number, in_gameObjectID: number): AKRESULT;
	ResetRTPCValue(in_rtpcID: number): AKRESULT;
	ResetRTPCValue(
		in_pszRtpcName: string,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	ResetRTPCValue(
		in_pszRtpcName: string,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ResetRTPCValue(in_pszRtpcName: string, in_gameObjectID: number, in_uValueChangeDuration: number): AKRESULT;
	ResetRTPCValue(in_pszRtpcName: string, in_gameObjectID: number): AKRESULT;
	ResetRTPCValue(in_pszRtpcName: string): AKRESULT;
	ResetRTPCValue(
		in_rtpcID: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	ResetRTPCValue(
		in_rtpcID: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ResetRTPCValue(in_rtpcID: number, in_gameObjectID: GameObject, in_uValueChangeDuration: number): AKRESULT;
	ResetRTPCValue(in_rtpcID: number, in_gameObjectID: GameObject): AKRESULT;
	ResetRTPCValue(
		in_pszRtpcName: string,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	ResetRTPCValue(
		in_pszRtpcName: string,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	ResetRTPCValue(in_pszRtpcName: string, in_gameObjectID: GameObject, in_uValueChangeDuration: number): AKRESULT;
	ResetRTPCValue(in_pszRtpcName: string, in_gameObjectID: GameObject): AKRESULT;
	ResetStochasticEngine(): AKRESULT;
	ResetTranslator(): AKRESULT;
	ResolveDialogueEvent(
		in_eventID: number,
		in_aArgumentValues: CSArray<number>,
		in_uNumArguments: number,
		in_idSequence: number,
	): number;
	ResolveDialogueEvent(in_eventID: number, in_aArgumentValues: CSArray<number>, in_uNumArguments: number): number;
	ROTL32(x: number, r: number): number;
	ROTL64(x: number, r: number): number;
	Seek(in_playingID: number, in_iPosition: number, in_bSeekToNearestMarker: boolean): AKRESULT;
	Seek(in_playingID: number, in_fPercent: number, in_bSeekToNearestMarker: boolean): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_eventID: number, in_gameObjectID: number, in_iPosition: number): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: number,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: number,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_pszEventName: string, in_gameObjectID: number, in_iPosition: number): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: number,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_eventID: number, in_gameObjectID: number, in_fPercent: number): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: number,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: number,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_pszEventName: string, in_gameObjectID: number, in_fPercent: number): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_eventID: number, in_gameObjectID: GameObject, in_iPosition: number): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: GameObject,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: GameObject,
		in_iPosition: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_pszEventName: string, in_gameObjectID: GameObject, in_iPosition: number): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_eventID: number,
		in_gameObjectID: GameObject,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_eventID: number, in_gameObjectID: GameObject, in_fPercent: number): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: GameObject,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
		in_PlayingID: number,
	): AKRESULT;
	SeekOnEvent(
		in_pszEventName: string,
		in_gameObjectID: GameObject,
		in_fPercent: number,
		in_bSeekToNearestMarker: boolean,
	): AKRESULT;
	SeekOnEvent(in_pszEventName: string, in_gameObjectID: GameObject, in_fPercent: number): AKRESULT;
	SendPluginCustomGameData(
		in_busID: number,
		in_busObjectID: number,
		in_eType: AkPluginType,
		in_uCompanyID: number,
		in_uPluginID: number,
		in_pData: unknown,
		in_uSizeInBytes: number,
	): AKRESULT;
	SendPluginCustomGameData(
		in_busID: number,
		in_busObjectID: GameObject,
		in_eType: AkPluginType,
		in_uCompanyID: number,
		in_uPluginID: number,
		in_pData: unknown,
		in_uSizeInBytes: number,
	): AKRESULT;
	SetActorMixerEffect(in_audioNodeID: number, in_uFXIndex: number, in_shareSetID: number): AKRESULT;
	SetAudioInputCallbacks(
		getAudioSamples: AudioSamplesInteropDelegate,
		getAudioFormat: AudioFormatInteropDelegate,
	): void;
	SetBankLoadIOSettings(in_fThroughput: number, in_priority: number): AKRESULT;
	SetBasePath(in_pszBasePath: string): AKRESULT;
	SetBusConfig(in_audioNodeID: number, in_channelConfig: AkChannelConfig): AKRESULT;
	SetBusConfig(in_pszBusName: string, in_channelConfig: AkChannelConfig): AKRESULT;
	SetBusDevice(in_idBus: number, in_idNewDevice: number): AKRESULT;
	SetBusDevice(in_BusName: string, in_DeviceName: string): AKRESULT;
	SetBusEffect(in_audioNodeID: number, in_uFXIndex: number, in_shareSetID: number): AKRESULT;
	SetBusEffect(in_pszBusName: string, in_uFXIndex: number, in_shareSetID: number): AKRESULT;
	SetCurrentLanguage(in_pszAudioSrcPath: string): AKRESULT;
	SetDecodedBankPath(in_DecodedPath: string): AKRESULT;
	SetDefaultListeners(in_pListenerObjs: CSArray<number>, in_uNumListeners: number): AKRESULT;
	SetDiffractionOrder(in_uDiffractionOrder: number, in_bUpdatePaths: boolean): AKRESULT;
	SetDistanceProbe(in_listenerGameObjectID: number, in_distanceProbeGameObjectID: number): AKRESULT;
	SetEarlyReflectionsAuxSend(in_gameObjectID: number, in_auxBusID: number): AKRESULT;
	SetEarlyReflectionsAuxSend(in_gameObjectID: GameObject, in_auxBusID: number): AKRESULT;
	SetEarlyReflectionsVolume(in_gameObjectID: number, in_fSendVolume: number): AKRESULT;
	SetEarlyReflectionsVolume(in_gameObjectID: GameObject, in_fSendVolume: number): AKRESULT;
	SetErrorLogger(logger: ErrorLoggerInteropDelegate): void;
	SetErrorLogger(): void;
	SetGameName(in_GameName: string): AKRESULT;
	SetGameObjectAuxSendValues(
		in_gameObjectID: number,
		in_aAuxSendValues: AkAuxSendArray,
		in_uNumSendValues: number,
	): AKRESULT;
	SetGameObjectAuxSendValues(
		in_gameObjectID: GameObject,
		in_aAuxSendValues: AkAuxSendArray,
		in_uNumSendValues: number,
	): AKRESULT;
	SetGameObjectInRoom(in_gameObjectID: number, in_CurrentRoomID: number): AKRESULT;
	SetGameObjectInRoom(in_gameObjectID: GameObject, in_CurrentRoomID: number): AKRESULT;
	SetGameObjectOutputBusVolume(in_emitterObjID: number, in_listenerObjID: number, in_fControlValue: number): AKRESULT;
	SetGameObjectOutputBusVolume(
		in_emitterObjID: GameObject,
		in_listenerObjID: GameObject,
		in_fControlValue: number,
	): AKRESULT;
	SetGameObjectRadius(in_gameObjectID: number, in_outerRadius: number, in_innerRadius: number): AKRESULT;
	SetGameObjectToPortalObstruction(in_gameObjectID: number, in_PortalID: number, in_fObstruction: number): AKRESULT;
	SetGeometry(
		in_GeomSetID: number,
		Triangles: AkTriangleArray,
		NumTriangles: number,
		Vertices: CSArray<Vector3>,
		NumVertices: number,
		Surfaces: AkAcousticSurfaceArray,
		NumSurfaces: number,
		EnableDiffraction: boolean,
		EnableDiffractionOnBoundaryEdges: boolean,
		EnableTriangles: boolean,
	): AKRESULT;
	SetGeometryInstance(
		in_GeomInstanceID: number,
		Transform: AkTransform,
		Scale: Vector3,
		GeometrySetID: number,
		RoomID: number,
	): AKRESULT;
	SetImageSource(
		in_srcID: number,
		in_info: AkImageSourceSettings,
		in_name: string,
		in_AuxBusID: number,
		in_gameObjectID: number,
	): AKRESULT;
	SetImageSource(in_srcID: number, in_info: AkImageSourceSettings, in_name: string, in_AuxBusID: number): AKRESULT;
	SetImageSource(in_srcID: number, in_info: AkImageSourceSettings, in_name: string): AKRESULT;
	SetImageSource(
		in_srcID: number,
		in_info: AkImageSourceSettings,
		in_imageSourceName: string,
		in_AuxBusID: number,
		in_gameObjectID: GameObject,
	): AKRESULT;
	SetListeners(in_emitterGameObj: number, in_pListenerGameObjs: CSArray<number>, in_uNumListeners: number): AKRESULT;
	SetListeners(
		in_emitterGameObj: GameObject,
		in_pListenerGameObjs: CSArray<number>,
		in_uNumListeners: number,
	): AKRESULT;
	SetListenerSpatialization(
		in_uListenerID: number,
		in_bSpatialized: boolean,
		in_channelConfig: AkChannelConfig,
		in_pVolumeOffsets: CSArray<number>,
	): AKRESULT;
	SetListenerSpatialization(
		in_uListenerID: number,
		in_bSpatialized: boolean,
		in_channelConfig: AkChannelConfig,
	): AKRESULT;
	SetListenerSpatialization(
		in_uListenerID: GameObject,
		in_bSpatialized: boolean,
		in_channelConfig: AkChannelConfig,
		in_pVolumeOffsets: CSArray<number>,
	): AKRESULT;
	SetListenerSpatialization(
		in_uListenerID: GameObject,
		in_bSpatialized: boolean,
		in_channelConfig: AkChannelConfig,
	): AKRESULT;
	SetLoadBalancingSpread(in_uNbFrames: number): AKRESULT;
	SetMaxNumVoicesLimit(in_maxNumberVoices: number): AKRESULT;
	SetMedia(in_pSourceSettings: AkSourceSettingsArray, in_uNumSourceSettings: number): AKRESULT;
	SetMixer(in_audioNodeID: number, in_shareSetID: number): AKRESULT;
	SetMixer(in_pszBusName: string, in_shareSetID: number): AKRESULT;
	SetMultipleObstructionAndOcclusion(
		in_EmitterID: number,
		in_uListenerID: number,
		in_fObstructionOcclusionValues: AkObstructionOcclusionValuesArray,
		in_uNumOcclusionObstruction: number,
	): AKRESULT;
	SetMultipleObstructionAndOcclusion(
		in_EmitterID: GameObject,
		in_uListenerID: GameObject,
		in_fObstructionOcclusionValues: AkObstructionOcclusionValuesArray,
		in_uNumOcclusionObstruction: number,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: number,
		in_pPositions: AkPositionArray,
		in_NumPositions: number,
		in_eMultiPositionType: AkMultiPositionType,
		in_eFlags: AkSetPositionFlags,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: number,
		in_pPositions: AkPositionArray,
		in_NumPositions: number,
		in_eMultiPositionType: AkMultiPositionType,
	): AKRESULT;
	SetMultiplePositions(in_GameObjectID: number, in_pPositions: AkPositionArray, in_NumPositions: number): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: number,
		in_pPositions: AkChannelEmitterArray,
		in_NumPositions: number,
		in_eMultiPositionType: AkMultiPositionType,
		in_eFlags: AkSetPositionFlags,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: number,
		in_pPositions: AkChannelEmitterArray,
		in_NumPositions: number,
		in_eMultiPositionType: AkMultiPositionType,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: number,
		in_pPositions: AkChannelEmitterArray,
		in_NumPositions: number,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: GameObject,
		in_pPositions: AkPositionArray,
		in_NumPositions: number,
		in_eMultiPositionType: AkMultiPositionType,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: GameObject,
		in_pPositions: AkPositionArray,
		in_NumPositions: number,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: GameObject,
		in_pPositions: AkChannelEmitterArray,
		in_NumPositions: number,
		in_eMultiPositionType: AkMultiPositionType,
	): AKRESULT;
	SetMultiplePositions(
		in_GameObjectID: GameObject,
		in_pPositions: AkChannelEmitterArray,
		in_NumPositions: number,
	): AKRESULT;
	SetNumberOfPrimaryRays(in_uNbPrimaryRays: number): AKRESULT;
	SetObjectObstructionAndOcclusion(
		in_EmitterID: number,
		in_ListenerID: number,
		in_fObstructionLevel: number,
		in_fOcclusionLevel: number,
	): AKRESULT;
	SetObjectObstructionAndOcclusion(
		in_EmitterID: GameObject,
		in_ListenerID: GameObject,
		in_fObstructionLevel: number,
		in_fOcclusionLevel: number,
	): AKRESULT;
	SetObjectPosition(in_GameObjectID: number, Pos: Vector3, Front: Vector3, Top: Vector3): AKRESULT;
	SetObjectPosition(gameObject: GameObject, transform: Transform): AKRESULT;
	SetObjectPosition(
		gameObject: GameObject,
		posX: number,
		posY: number,
		posZ: number,
		frontX: number,
		frontY: number,
		frontZ: number,
		topX: number,
		topY: number,
		topZ: number,
	): AKRESULT;
	SetObjectPosition(in_GameObjectID: GameObject, Pos: Vector3, Front: Vector3, Top: Vector3): AKRESULT;
	SetOfflineRendering(in_bEnableOfflineRendering: boolean): AKRESULT;
	SetOfflineRenderingFrameTime(in_fFrameTimeInSeconds: number): AKRESULT;
	SetOutputDeviceEffect(in_outputDeviceID: number, in_uFXIndex: number, in_FXShareSetID: number): AKRESULT;
	SetOutputVolume(in_idOutput: number, in_fVolume: number): AKRESULT;
	SetPanningRule(in_ePanningRule: AkPanningRule, in_idOutput: number): AKRESULT;
	SetPanningRule(in_ePanningRule: AkPanningRule): AKRESULT;
	SetPortalObstructionAndOcclusion(in_PortalID: number, in_fObstruction: number, in_fOcclusion: number): AKRESULT;
	SetPortalToPortalObstruction(in_PortalID0: number, in_PortalID1: number, in_fObstruction: number): AKRESULT;
	SetRandomSeed(in_uSeed: number): void;
	SetReflectionsOrder(in_uReflectionsOrder: number, in_bUpdatePaths: boolean): AKRESULT;
	SetRoom(in_RoomID: number, in_roomParams: AkRoomParams, GeometryInstanceID: number, in_pName: string): AKRESULT;
	SetRoomPortal(
		in_PortalID: number,
		FrontRoom: number,
		BackRoom: number,
		Transform: AkTransform,
		Extent: AkExtent,
		bEnabled: boolean,
		in_pName: string,
	): AKRESULT;
	SetRTPCValue(
		in_rtpcID: number,
		in_value: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	SetRTPCValue(
		in_rtpcID: number,
		in_value: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	SetRTPCValue(
		in_rtpcID: number,
		in_value: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
	): AKRESULT;
	SetRTPCValue(in_rtpcID: number, in_value: number, in_gameObjectID: number): AKRESULT;
	SetRTPCValue(in_rtpcID: number, in_value: number): AKRESULT;
	SetRTPCValue(
		in_pszRtpcName: string,
		in_value: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	SetRTPCValue(
		in_pszRtpcName: string,
		in_value: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	SetRTPCValue(
		in_pszRtpcName: string,
		in_value: number,
		in_gameObjectID: number,
		in_uValueChangeDuration: number,
	): AKRESULT;
	SetRTPCValue(in_pszRtpcName: string, in_value: number, in_gameObjectID: number): AKRESULT;
	SetRTPCValue(in_pszRtpcName: string, in_value: number): AKRESULT;
	SetRTPCValue(
		in_rtpcID: number,
		in_value: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	SetRTPCValue(
		in_rtpcID: number,
		in_value: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	SetRTPCValue(
		in_rtpcID: number,
		in_value: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
	): AKRESULT;
	SetRTPCValue(in_rtpcID: number, in_value: number, in_gameObjectID: GameObject): AKRESULT;
	SetRTPCValue(
		in_pszRtpcName: string,
		in_value: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	SetRTPCValue(
		in_pszRtpcName: string,
		in_value: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	SetRTPCValue(
		in_pszRtpcName: string,
		in_value: number,
		in_gameObjectID: GameObject,
		in_uValueChangeDuration: number,
	): AKRESULT;
	SetRTPCValue(in_pszRtpcName: string, in_value: number, in_gameObjectID: GameObject): AKRESULT;
	SetRTPCValueByPlayingID(
		in_rtpcID: number,
		in_value: number,
		in_playingID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	SetRTPCValueByPlayingID(
		in_rtpcID: number,
		in_value: number,
		in_playingID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	SetRTPCValueByPlayingID(
		in_rtpcID: number,
		in_value: number,
		in_playingID: number,
		in_uValueChangeDuration: number,
	): AKRESULT;
	SetRTPCValueByPlayingID(in_rtpcID: number, in_value: number, in_playingID: number): AKRESULT;
	SetRTPCValueByPlayingID(
		in_pszRtpcName: string,
		in_value: number,
		in_playingID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
		in_bBypassInternalValueInterpolation: boolean,
	): AKRESULT;
	SetRTPCValueByPlayingID(
		in_pszRtpcName: string,
		in_value: number,
		in_playingID: number,
		in_uValueChangeDuration: number,
		in_eFadeCurve: AkCurveInterpolation,
	): AKRESULT;
	SetRTPCValueByPlayingID(
		in_pszRtpcName: string,
		in_value: number,
		in_playingID: number,
		in_uValueChangeDuration: number,
	): AKRESULT;
	SetRTPCValueByPlayingID(in_pszRtpcName: string, in_value: number, in_playingID: number): AKRESULT;
	SetScalingFactor(in_GameObjectID: number, in_fAttenuationScalingFactor: number): AKRESULT;
	SetScalingFactor(in_GameObjectID: GameObject, in_fAttenuationScalingFactor: number): AKRESULT;
	SetSpeakerAngles(
		in_pfSpeakerAngles: CSArray<number>,
		in_uNumAngles: number,
		in_fHeightAngle: number,
		in_idOutput: number,
	): AKRESULT;
	SetSpeakerAngles(in_pfSpeakerAngles: CSArray<number>, in_uNumAngles: number, in_fHeightAngle: number): AKRESULT;
	SetState(in_stateGroup: number, in_state: number): AKRESULT;
	SetState(in_pszStateGroup: string, in_pszState: string): AKRESULT;
	SetSwitch(in_switchGroup: number, in_switchState: number, in_gameObjectID: number): AKRESULT;
	SetSwitch(in_pszSwitchGroup: string, in_pszSwitchState: string, in_gameObjectID: number): AKRESULT;
	SetSwitch(in_switchGroup: number, in_switchState: number, in_gameObjectID: GameObject): AKRESULT;
	SetSwitch(in_pszSwitchGroup: string, in_pszSwitchState: string, in_gameObjectID: GameObject): AKRESULT;
	SetVolumeThreshold(in_fVolumeThresholdDB: number): AKRESULT;
	StartDeviceCapture(in_idOutputDeviceID: number): void;
	StartOutputCapture(in_CaptureFileName: string): AKRESULT;
	StartProfilerCapture(in_CaptureFileName: string): AKRESULT;
	StartResourceMonitoring(): void;
	StdChannelIndexToDisplayIndex(
		in_eOrdering: AkChannelOrdering,
		in_uChannelMask: number,
		in_uChannelIdx: number,
	): number;
	StopAll(in_gameObjectID: number): void;
	StopAll(): void;
	StopAll(in_gameObjectID: GameObject): void;
	StopDeviceCapture(in_idOutputDeviceID: number): void;
	StopMIDIOnEvent(in_eventID: number, in_gameObjectID: number, in_playingID: number): AKRESULT;
	StopMIDIOnEvent(in_eventID: number, in_gameObjectID: number): AKRESULT;
	StopMIDIOnEvent(in_eventID: number): AKRESULT;
	StopMIDIOnEvent(): AKRESULT;
	StopMIDIOnEvent(in_eventID: number, in_gameObjectID: GameObject): AKRESULT;
	StopMIDIOnEvent(in_eventID: number, in_gameObjectID: GameObject, in_playingID: number): AKRESULT;
	StopOutputCapture(): AKRESULT;
	StopPlayingID(in_playingID: number, in_uTransitionDuration: number, in_eFadeCurve: AkCurveInterpolation): void;
	StopPlayingID(in_playingID: number, in_uTransitionDuration: number): void;
	StopPlayingID(in_playingID: number): void;
	StopProfilerCapture(): AKRESULT;
	StopResourceMonitoring(): void;
	StringFromIntPtrOSString(ptr: unknown): string;
	StringFromIntPtrString(ptr: unknown): string;
	StringFromIntPtrWString(ptr: unknown): string;
	Suspend(in_bRenderAnyway: boolean, in_bFadeOut: boolean): AKRESULT;
	Suspend(in_bRenderAnyway: boolean): AKRESULT;
	Suspend(): AKRESULT;
	Term(): void;
	UnloadAllFilePackages(): AKRESULT;
	UnloadBank(in_pszString: string, in_pInMemoryBankPtr: unknown, in_bankType: number): AKRESULT;
	UnloadBank(in_pszString: string, in_pInMemoryBankPtr: unknown): AKRESULT;
	UnloadBank(in_bankID: number, in_pInMemoryBankPtr: unknown, in_bankType: number): AKRESULT;
	UnloadBank(in_bankID: number, in_pInMemoryBankPtr: unknown): AKRESULT;
	UnloadBank(
		in_pszString: string,
		in_pInMemoryBankPtr: unknown,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		in_bankType: number,
	): AKRESULT;
	UnloadBank(
		in_pszString: string,
		in_pInMemoryBankPtr: unknown,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	UnloadBank(
		in_bankID: number,
		in_pInMemoryBankPtr: unknown,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
		in_bankType: number,
	): AKRESULT;
	UnloadBank(
		in_bankID: number,
		in_pInMemoryBankPtr: unknown,
		in_pfnBankCallback: BankCallback,
		in_pCookie: unknown,
	): AKRESULT;
	UnloadFilePackage(in_uPackageID: number): AKRESULT;
	UnpinEventInStreamCache(in_eventID: number): AKRESULT;
	UnpinEventInStreamCache(in_pszEventName: string): AKRESULT;
	UnregisterAllGameObj(): AKRESULT;
	UnregisterGameObj(gameObject: GameObject): AKRESULT;
	UnregisterGameObjInternal(in_GameObj: number): AKRESULT;
	UnregisterGameObjInternal(in_GameObj: GameObject): AKRESULT;
	UnregisterSpatialAudioListener(in_gameObjectID: number): AKRESULT;
	UnregisterSpatialAudioListener(in_gameObjectID: GameObject): AKRESULT;
	UnsetMedia(in_pSourceSettings: AkSourceSettingsArray, in_uNumSourceSettings: number): AKRESULT;
	UpdateCaptureSampleCount(in_idOutputDeviceID: number): number;
	WakeupFromSuspend(in_uDelayMs: number): AKRESULT;
	WakeupFromSuspend(): AKRESULT;
}
declare const AkSoundEngine: AkSoundEngineConstructor;

interface EventSystem extends UIBehaviour {
	sendNavigationEvents: boolean;
	pixelDragThreshold: number;
	currentInputModule: BaseInputModule;
	firstSelectedGameObject: GameObject;
	currentSelectedGameObject: GameObject;
	lastSelectedGameObject: GameObject;
	isFocused: boolean;
	alreadySelecting: boolean;

	IsPointerOverGameObject(): boolean;
	IsPointerOverGameObject(pointerId: number): boolean;
	RaycastAll(eventData: PointerEventData, raycastResults: CSArray<RaycastResult>): void;
	SetSelectedGameObject(selected: GameObject, pointer: BaseEventData): void;
	SetSelectedGameObject(selected: GameObject | undefined): void;
	ToString(): string;
	UpdateModules(): void;
	ClearSelected(): void;
}

interface EventSystemConstructor {
	current: EventSystem;
	SetUITookitEventSystemOverride(
		activeEventSystem: EventSystem,
		sendEvents: boolean,
		createPanelGameObjectsOnStart: boolean,
	): void;
}
declare const EventSystem: EventSystemConstructor;

interface ApplicationConstructor {
	OnFocusChanged(callback: (focused: boolean) => void): void;
}

interface EntityAnimationEvents {
	EntityEventKey: number;
	OnEntityAnimationEvent(callback: (key: EntityAnimationEventKey) => void): EngineEventConnection;
}

interface Animator {
	SetInteger(name: string, value: number): void;
	SetInteger(id: number, value: number): void;
}

interface Collision {
	relativeVelocity: Vector3;
	rigidbody: Rigidbody | undefined;
	articulationBody: ArticulationBody;
	body: Component;
	collider: Collider;
	transform: Transform;
	gameObject: GameObject;
	contactCount: number;
	contacts: CSArray<ContactPoint>;
	impulse: Vector3;
	impactForceSum: Vector3;
	frictionForceSum: Vector3;
	other: Component;

	constructor(): Collision;

	GetContact(index: number): ContactPoint;
	GetContacts(contacts: CSArray<ContactPoint>): number;
	GetContacts(contacts: CSArray<ContactPoint>): number;
	GetEnumerator(): unknown;
}

interface Transform extends Component {
	position: Vector3;
	localPosition: Vector3;
	eulerAngles: Vector3;
	localEulerAngles: Vector3;
	right: Vector3;
	up: Vector3;
	forward: Vector3;
	rotation: Quaternion;
	localRotation: Quaternion;
	localScale: Vector3;
	parent: Transform;
	worldToLocalMatrix: Matrix4x4;
	localToWorldMatrix: Matrix4x4;
	root: Transform;
	childCount: number;
	lossyScale: Vector3;
	hasChanged: boolean;
	hierarchyCapacity: number;
	hierarchyCount: number;

	DetachChildren(): void;
	Find(n: string): Transform | undefined;
	FindChild(n: string): Transform | undefined;
	GetChild(index: number): Transform;
	GetChildCount(): number;
	GetEnumerator(): unknown;
	GetSiblingIndex(): number;
	InverseTransformDirection(direction: Vector3): Vector3;
	InverseTransformDirection(x: number, y: number, z: number): Vector3;
	InverseTransformPoint(position: Vector3): Vector3;
	InverseTransformPoint(x: number, y: number, z: number): Vector3;
	InverseTransformVector(vector: Vector3): Vector3;
	InverseTransformVector(x: number, y: number, z: number): Vector3;
	IsChildOf(parent: Transform): boolean;
	LookAt(target: Transform, worldUp: Vector3): void;
	LookAt(target: Transform): void;
	LookAt(worldPosition: Vector3, worldUp: Vector3): void;
	LookAt(worldPosition: Vector3): void;
	Rotate(eulers: Vector3, relativeTo: Space): void;
	Rotate(eulers: Vector3): void;
	Rotate(xAngle: number, yAngle: number, zAngle: number, relativeTo: Space): void;
	Rotate(xAngle: number, yAngle: number, zAngle: number): void;
	Rotate(axis: Vector3, angle: number, relativeTo: Space): void;
	Rotate(axis: Vector3, angle: number): void;
	RotateAround(point: Vector3, axis: Vector3, angle: number): void;
	RotateAround(axis: Vector3, angle: number): void;
	RotateAroundLocal(axis: Vector3, angle: number): void;
	SetAsFirstSibling(): void;
	SetAsLastSibling(): void;
	SetLocalPositionAndRotation(localPosition: Vector3, localRotation: Quaternion): void;
	SetParent(p: Transform | undefined): void;
	SetParent(parent: Transform, worldPositionStays: boolean): void;
	SetPositionAndRotation(position: Vector3, rotation: Quaternion): void;
	SetSiblingIndex(index: number): void;
	TransformDirection(direction: Vector3): Vector3;
	TransformDirection(x: number, y: number, z: number): Vector3;
	TransformPoint(position: Vector3): Vector3;
	TransformPoint(x: number, y: number, z: number): Vector3;
	TransformVector(vector: Vector3): Vector3;
	TransformVector(x: number, y: number, z: number): Vector3;
	Translate(translation: Vector3, relativeTo: Space): void;
	Translate(translation: Vector3): void;
	Translate(x: number, y: number, z: number, relativeTo: Space): void;
	Translate(x: number, y: number, z: number): void;
	Translate(translation: Vector3, relativeTo: Transform): void;
	Translate(x: number, y: number, z: number, relativeTo: Transform): void;

	ClampRotationY(targetValue: number, maxAngle: number): void;
}

interface Collider extends Component {
    enabled: boolean;
    attachedRigidbody: Rigidbody;
    attachedArticulationBody: ArticulationBody;
    isTrigger: boolean;
    contactOffset: number;
    bounds: Bounds;
    hasModifiableContacts: boolean;
    sharedMaterial: PhysicMaterial;
    material: PhysicMaterial;

    constructor(): Collider;

    ClosestPoint(position: Vector3): Vector3;
    ClosestPointOnBounds(position: Vector3): Vector3;
    Raycast(ray: Ray, maxDistance: number): RaycastHit | undefined;
}

interface MaterialPropertyBlockConstructor {
    new(): MaterialPropertyBlock;
}
declare const MaterialPropertyBlock: MaterialPropertyBlockConstructor;