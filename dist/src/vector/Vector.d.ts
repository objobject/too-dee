import { PointI } from '../types';
export declare class Vector implements PointI {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(vector: Vector): this;
    addScalar(by: number): this;
    substract(vector: Vector): this;
    substractScalar(by: number): this;
    multiply(vector: Vector): this;
    multiplyScalar(by: number): this;
    divide(by: number): this;
    dot(vector: Vector): number;
    length(): number;
    normalize(): this;
    ceil(): this;
    floor(): this;
    random(): this;
}
