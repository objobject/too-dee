import { PointI, Circle, LineI } from "./types";

export class Utils {
	static distanceBetweenTwoPoints(pointA: PointI, pointB: PointI) {
		return Math.sqrt(Math.pow((pointA.x - pointB.x), 2) + (Math.pow((pointA.y - pointB.y), 2)))
	}

	static findClosestPointOnTheLineToTheCenterOfCircle(circle: Circle, line: LineI): PointI {
		const componentOne = ((circle.center.x - line.start.x) * (line.end.x - line.start.x) + (circle.center.y - line.start.y) * (line.end.y - line.start.y));
		const componentTwo = Math.pow((Utils.distanceBetweenTwoPoints(line.start, line.end)), 2);

		const u = componentOne / componentTwo;

		return {
			x: line.start.x + u * (line.end.x - line.start.x),
			y: line.start.y + u * (line.end.y - line.start.y)
		}
	}

	static calculateAreaOfTriangle(vertices: [PointI, PointI, PointI]) {
		return Math.abs(
			(vertices[1].x - vertices[0].x) * (vertices[2].y - vertices[0].y) - 
			(vertices[2].x - vertices[0].x) * (vertices[1].y - vertices[0].y)
		);
	}
}