import { PointI, PolygonI } from '../types';
import { Rectangle } from './Rectangle';
import { Triangle } from './Triangle';
export declare class Polygon implements PolygonI {
    vertices: PointI[];
    constructor(vertices: PointI[]);
    getBoundingBox(): Rectangle;
    fanTriangulate(): Triangle[];
    static from(polygon: PolygonI): Polygon;
}
