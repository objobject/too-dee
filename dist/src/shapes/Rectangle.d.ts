import { PointI } from '../types';
import { RectangleI as RectangleI } from '../types';
export declare class Rectangle implements RectangleI {
    corner: PointI;
    width: number;
    height: number;
    constructor(corner: PointI, width: number, height: number);
    normalize(): this;
}
