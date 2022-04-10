import { LineI, PointI } from '../types';
export declare class Line implements LineI {
    start: PointI;
    end: PointI;
    constructor(start: PointI, end: PointI);
}
