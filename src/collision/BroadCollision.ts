export class BroadCollision {
	static bruteForce<T = unknown>(
		items: T[],
		narrowCollisionCallback: (itemA: T, itemB: T) => boolean,
	) {}

	static quadTrees() {}

	static aabbTrees() {}

	static querying() {}
}
