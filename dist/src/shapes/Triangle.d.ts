import { PointI, TriangleI } from '../types';
export declare class Triangle implements TriangleI {
    vertices: [PointI, PointI, PointI];
    constructor(vertices: [PointI, PointI, PointI]);
}
