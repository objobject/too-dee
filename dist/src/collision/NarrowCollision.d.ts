import { PointI, LineI, Circle, RectangleI, PolygonI, TriangleI } from '../types';
export declare class NarrowCollision {
    static pointAndPoint(pointA: PointI, pointB: PointI): boolean;
    static pointAndCircle(point: PointI, circle: Circle): boolean;
    static pointAndLine(point: PointI, line: LineI): boolean;
    static pointAndRectangle(point: PointI, rect: RectangleI): boolean;
    static pointAndTriangle(point: PointI, triangle: TriangleI, errorMargin?: number): boolean;
    static pointAndPolygon(point: PointI, polygon: PolygonI): void;
    static circleAndCircle(circleA: Circle, circleB: Circle): boolean;
    static circleAndLine(circle: Circle, line: LineI): boolean;
    static circleAndRectangle(circle: Circle, rect: RectangleI): boolean;
    static circleAndPolygon(circle: Circle, polygon: PolygonI): void;
    static rectangleAndRectangle(rectA: RectangleI, rectB: RectangleI): boolean;
    static lineAndLine(lineA: LineI, lineB: LineI): boolean;
    static lineAndRectangle(line: LineI, rect: RectangleI): boolean;
    static lineAndPolygon(line: LineI, polygon: PolygonI): void;
    static polygonAndPolygon(polygonA: PolygonI, polygonB: PolygonI): void;
}
