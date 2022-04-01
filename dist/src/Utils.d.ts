import { PointI, CircleI, LineI } from "./types";
export declare class Utils {
    static distanceBetweenTwoPoints(pointA: PointI, pointB: PointI): number;
    static findClosestPointOnTheLineToTheCenterOfCircle(circle: CircleI, line: LineI): PointI;
    static calculateAreaOfTriangle(vertices: [PointI, PointI, PointI]): number;
}
