export declare class BroadCollision {
    static bruteForce<T = unknown>(items: T[], narrowCollisionCallback: (itemA: T, itemB: T) => boolean): void;
    static quadTrees(): void;
    static aabbTrees(): void;
    static querying(): void;
}
