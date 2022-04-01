import { PointI, LineI, CircleI, RectangleI, PolygonI, TriangleI } from '../types';
export declare class NarrowCollision {
    static pointAndPoint(pointA: PointI, pointB: PointI): boolean;
    static pointAndCircle(point: PointI, circle: CircleI): boolean;
    static pointAndLine(point: PointI, line: LineI): boolean;
    static pointAndRectangle(point: PointI, rect: RectangleI): boolean;
    static pointAndTriangle(point: PointI, triangle: TriangleI, errorMargin?: number): boolean;
    static pointAndPolygon(point: PointI, polygon: PolygonI): void;
    static circleAndCircle(circleA: CircleI, circleB: CircleI): boolean;
    static circleAndLine(circle: CircleI, line: LineI): boolean;
    static circleAndRectangle(circle: CircleI, rect: RectangleI): boolean;
    static circleAndPolygon(circle: CircleI, polygon: PolygonI): void;
    static rectangleAndRectangle(rectA: RectangleI, rectB: RectangleI): boolean;
    static lineAndLine(lineA: LineI, lineB: LineI): boolean;
    static lineAndRectangle(line: LineI, rect: RectangleI): boolean;
    static lineAndPolygon(line: LineI, polygon: PolygonI): void;
    static polygonAndPolygon(polygonA: PolygonI, polygonB: PolygonI): void;
}
