import { PointI, CircleI as CircleI } from "../types";
export declare class Circle implements CircleI {
    center: PointI;
    radius: number;
    constructor(center: PointI, radius: number);
    normalize(): this;
}
