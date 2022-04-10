import { PointI, Circle, LineI } from './types';
export declare class Utils {
    static distanceBetweenTwoPoints(pointA: PointI, pointB: PointI): number;
    static findClosestPointOnTheLineToTheCenterOfCircle(circle: Circle, line: LineI): PointI;
    static calculateAreaOfTriangle(vertices: [PointI, PointI, PointI]): number;
}
