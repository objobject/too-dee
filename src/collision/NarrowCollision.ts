import { Line } from '../shapes/Line';
import { Polygon } from '../shapes/Polygon';
import {
	PointI,
	LineI,
	Circle,
	RectangleI,
	PolygonI,
	TriangleI,
} from '../types';
import { Utils } from '../Utils';

export class NarrowCollision {
	static pointAndPoint(pointA: PointI, pointB: PointI) {
		return pointA.x === pointB.x && pointA.y === pointB.y;
	}

	static pointAndCircle(point: PointI, circle: Circle) {
		return (
			Utils.distanceBetweenTwoPoints(point, circle.center) <= circle.radius
		);
	}

	static pointAndLine(point: PointI, line: LineI) {
		const lineLength = Utils.distanceBetweenTwoPoints(line.start, line.end);
		const lineStartToPointLength = Utils.distanceBetweenTwoPoints(
			line.start,
			point,
		);
		const pointToLineEndLength = Utils.distanceBetweenTwoPoints(
			point,
			line.end,
		);

		return lineStartToPointLength + pointToLineEndLength === lineLength;
	}

	static pointAndRectangle(point: PointI, rect: RectangleI) {
		return (
			point.x >= rect.corner.x &&
			point.x <= rect.corner.x + rect.width &&
			point.y >= rect.corner.y &&
			point.y <= rect.corner.y + rect.height
		);
	}

	static pointAndTriangle(
		point: PointI,
		triangle: TriangleI,
		errorMargin: number = 0.0001,
	) {
		const originalArea = Utils.calculateAreaOfTriangle(triangle.vertices);
		const area1 = Utils.calculateAreaOfTriangle([
			point,
			triangle.vertices[0],
			triangle.vertices[1],
		]);
		const area2 = Utils.calculateAreaOfTriangle([
			point,
			triangle.vertices[0],
			triangle.vertices[2],
		]);
		const area3 = Utils.calculateAreaOfTriangle([
			point,
			triangle.vertices[1],
			triangle.vertices[2],
		]);

		return Math.abs(area1 + area2 + area3 - originalArea) <= errorMargin;
	}

	static pointAndPolygon(point: PointI, polygon: PolygonI) {
		const poly = Polygon.from(polygon);
		const boundingBox = poly.getBoundingBox();

		if (!this.pointAndRectangle(point, boundingBox)) {
			return false;
		}

		const triangles = poly.fanTriangulate();

		for (const triangle of triangles) {
			if (this.pointAndTriangle(point, triangle)) {
				return true;
			}
		}

		return false;
	}

	static circleAndCircle(circleA: Circle, circleB: Circle) {
		return (
			Utils.distanceBetweenTwoPoints(circleA.center, circleB.center) <=
			circleA.radius + circleB.radius
		);
	}

	static circleAndLine(circle: Circle, line: LineI) {
		const collidesWithLineStart = this.pointAndCircle(line.start, circle);
		const collidesWithLineEnd = this.pointAndCircle(line.end, circle);

		if (collidesWithLineStart || collidesWithLineEnd) {
			return true;
		}

		const closestPoint = Utils.findClosestPointOnTheLineToTheCenterOfCircle(
			circle,
			line,
		);

		if (this.pointAndLine(closestPoint, line) === false) {
			return false;
		}

		return this.pointAndCircle(closestPoint, circle);
	}

	static circleAndRectangle(circle: Circle, rect: RectangleI) {
		let xN = Math.max(
			rect.corner.x,
			Math.min(circle.center.x, rect.corner.x + rect.width),
		);
		let yN = Math.max(
			rect.corner.y,
			Math.min(circle.center.y, rect.corner.y + rect.height),
		);

		let dX = xN - circle.center.x;
		let dY = yN - circle.center.y;

		return dX * dX + dY * dY <= circle.radius * circle.radius;
	}

	static circleAndPolygon(circle: Circle, polygon: PolygonI) {
		for (let i = 0; i < polygon.vertices.length; i++) {
			let j = i + 1;

			if (j === polygon.vertices.length) {
				j = 0;
			}

			const temporaryLine = new Line(polygon.vertices[i], polygon.vertices[j]);

			if (this.circleAndLine(circle, temporaryLine)) {
				return true;
			}
		}

		if (this.pointAndPolygon(circle.center, polygon)) {
			return true;
		}

		if (this.pointAndCircle(polygon.vertices[0], circle)) {
			return true;
		}

		return false;
	}

	static rectangleAndRectangle(rectA: RectangleI, rectB: RectangleI) {
		const leftSideAtTheLeftOfTheRightSide =
			rectA.corner.x < rectB.corner.x + rectB.width;
		const rightSideAtTheRightOfTheLeftSide =
			rectA.corner.x + rectA.width > rectB.corner.x;
		const topSideOverTheBottomSide =
			rectA.corner.y < rectB.corner.y + rectB.height;
		const bottomSideUnderneathTheTopSide =
			rectA.corner.y + rectA.height > rectB.corner.y;

		return (
			leftSideAtTheLeftOfTheRightSide &&
			rightSideAtTheRightOfTheLeftSide &&
			topSideOverTheBottomSide &&
			bottomSideUnderneathTheTopSide
		);
	}

	static lineAndLine(lineA: LineI, lineB: LineI) {
		const denominator =
			(lineB.end.y - lineB.start.y) * (lineA.end.x - lineA.start.x) -
			(lineB.end.x - lineB.start.x) * (lineA.end.y - lineA.start.y);

		if (denominator === 0) {
			return false;
		}

		const uA =
			((lineB.end.x - lineB.start.x) * (lineA.start.y - lineB.start.y) -
				(lineB.end.y - lineB.start.y) * (lineA.start.x - lineB.start.x)) /
			denominator;
		const uB =
			((lineA.end.x - lineA.start.x) * (lineA.start.y - lineB.start.y) -
				(lineA.end.y - lineA.start.y) * (lineA.start.x - lineB.start.x)) /
			denominator;

		return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1;
	}

	static lineAndRectangle(line: LineI, rect: RectangleI) {
		if (
			this.pointAndRectangle(line.start, rect) ||
			this.pointAndRectangle(line.end, rect)
		) {
			return true;
		}

		const leftCollision = this.lineAndLine(line, {
			start: { x: rect.corner.x, y: rect.corner.y },
			end: { x: rect.corner.x, y: rect.corner.y + rect.height },
		});
		const rightCollision = this.lineAndLine(line, {
			start: { x: rect.corner.x + rect.width, y: rect.corner.y },
			end: { x: rect.corner.x, y: rect.corner.y },
		});
		const topCollision = this.lineAndLine(line, {
			start: { x: rect.corner.x, y: rect.corner.y },
			end: { x: rect.corner.x + rect.width, y: rect.corner.y },
		});
		const bottomCollision = this.lineAndLine(line, {
			start: { x: rect.corner.x, y: rect.corner.y + rect.height },
			end: { x: rect.corner.x + rect.width, y: rect.corner.y + rect.height },
		});

		return leftCollision || rightCollision || topCollision || bottomCollision;
	}

	static lineAndPolygon(line: LineI, polygon: PolygonI) {
		if (
			this.pointAndPolygon(line.start, polygon) ||
			this.pointAndPolygon(line.end, polygon)
		) {
			return true;
		}

		for (let i = 0; i < polygon.vertices.length; i++) {
			let j = i + 1;

			if (j === polygon.vertices.length) {
				j = 0;
			}

			const temporaryLine = new Line(polygon.vertices[i], polygon.vertices[j]);

			if (this.lineAndLine(line, temporaryLine)) {
				return true;
			}
		}

		return false;
	}

	static polygonAndPolygon(polygonA: PolygonI, polygonB: PolygonI) {
		for (let i = 0; i < polygonB.vertices.length; i++) {
			let j = i + 1;

			if (j === polygonB.vertices.length) {
				j = 0;
			}

			const temporaryLine = new Line(
				polygonB.vertices[i],
				polygonB.vertices[j],
			);
			if (this.lineAndPolygon(temporaryLine, polygonA)) {
				return true;
			}
		}

		if (
			this.pointAndPolygon(polygonB.vertices[0], polygonA) ||
			this.pointAndPolygon(polygonA.vertices[0], polygonB)
		) {
			return true;
		}

		return false;
	}
}
