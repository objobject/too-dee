import { Circle, LineI, PointI, PolygonI, RectangleI } from "../../types";
import { Utils } from "../../Utils";
import { NarrowCollision } from "../NarrowCollision";

describe("NarrowColission", () => {
	describe("pointAndPoint()", () => {
		it("should return true if points are at the same position", () => {
			expect(NarrowCollision.pointAndPoint(createPoint(1, 3), createPoint(1, 3))).toEqual(true);
		});
		it("should return false if points are not at the same position", () => {
			expect(NarrowCollision.pointAndPoint(createPoint(1, 3), createPoint(1, 4))).toEqual(false);
		});
	});
	
	describe("pointAndCircle()", () => {
		it("should return true if distance between point and the center of circle is less than the radius", () => {
			const point = createPoint(1, 3);
			const circle = createCircle(createPoint(2, 2), 2);

			expect(NarrowCollision.pointAndCircle(point, circle)).toEqual(true);
		});
		it("should return true if distance between point and the center of circle is equal to the radius", () => {
			const point = createPoint(0, 0);
			const circle = createCircle(createPoint(1, 0), 1);

			expect(NarrowCollision.pointAndCircle(point, circle)).toEqual(true);
		});
		it("should return false if distance between point and the center of circle is greater than the radius", () => {
			const point = createPoint(0, 0);
			const circle = createCircle(createPoint(2, 0), 1);

			expect(NarrowCollision.pointAndCircle(point, circle)).toEqual(false);
		});
	});

	describe("circleAndCircle()", () => {
		it("should return true if the distance between their centers is less than the sum of their radii", () => {
			const circleA = createCircle(createPoint(1, 1), 1);
			const circleB = createCircle(createPoint(3, 3), 4);

			expect(NarrowCollision.circleAndCircle(circleA, circleB)).toEqual(true);
		});
		it("should return true if the distance between their centers is equal to the sum of their radii", () => {
			const circleA = createCircle(createPoint(1, 0), 1);
			const circleB = createCircle(createPoint(3, 0), 1);

			expect(NarrowCollision.circleAndCircle(circleA, circleB)).toEqual(true);
		});
		it("should return false if the distance between their centers is greater than the sum of their radii", () => {
			const circleA = createCircle(createPoint(1, 1), 1);
			const circleB = createCircle(createPoint(5, 5), 1);

			expect(NarrowCollision.circleAndCircle(circleA, circleB)).toEqual(false);
		})
	});

	describe("rectangleAndRectangle()", () => {
		it('test', () => {
			const rectA = createRect(createPoint(2, 2), 8, 3);
			const rectB = createRect(createPoint(4, 3), 3, 3);

			expect(NarrowCollision.rectangleAndRectangle(rectA, rectB)).toEqual(true);
		})
		it("should return true if all the sides of one rectangle are crossing sides of the other", () => {
			const rectA = createRect(createPoint(2, 2), 8, 3);
			const rectB = createRect(createPoint(4, 3), 3, 3);

			expect(NarrowCollision.rectangleAndRectangle(rectA, rectB)).toEqual(true);
		});
		it("should return false if left side of rectangle A is NOT at the left of the right side of rectangle B", () => {
			const rectA = createRect(createPoint(2, 2), 8, 3);
			const rectB = createRect(createPoint(11, 2), 3, 3);
			
			expect(NarrowCollision.rectangleAndRectangle(rectA, rectB)).toEqual(false);
		});
		it("should return false if right side of rectangle A is NOT at the right of the left side of rectangle B", () => {
			const rectA = createRect(createPoint(2, 2), 8, 3);
			const rectB = createRect(createPoint(0, 2), 1, 3);
			
			expect(NarrowCollision.rectangleAndRectangle(rectA, rectB)).toEqual(false);
		});
		it("should return false if top side of rectangle A is NOT over the bottom side of rectangle B", () => {
			const rectA = createRect(createPoint(2, 2), 8, 3);
			const rectB = createRect(createPoint(2, 6), 3, 3);
			
			expect(NarrowCollision.rectangleAndRectangle(rectA, rectB)).toEqual(false);
		});
		it("should return false if bottom side of rectangle A is NOT underneath the top side of rectangle B", () => {
			const rectA = createRect(createPoint(2, 2), 8, 3);
			const rectB = createRect(createPoint(2, 0), 3, 1);
			
			expect(NarrowCollision.rectangleAndRectangle(rectA, rectB)).toEqual(false);
		});
	});

	describe("pointAndLine()", () => {
		it("should return true if sum of the distances between the point and line extremes is equal to the length of the line", () => {
			const point = createPoint(1, 3);
			const line = createLine(createPoint(1, 1), createPoint(1, 5));

			expect(NarrowCollision.pointAndLine(point, line)).toEqual(true);
		});
		it("should return false if sum of the distances between the point and line extremes is NOT equal to the length of the line", () => {
			const point = createPoint(2, 3);
			const line = createLine(createPoint(1, 1), createPoint(1, 5));

			expect(NarrowCollision.pointAndLine(point, line)).toEqual(false);
		});
	});

	describe("circleAndLine()", () => {
		it("should return true if circle collides with either end of the line", () => {
			const circle = createCircle(createPoint(5, 5), 2);
			const line = createLine(createPoint(3, 5), createPoint(7, 5));

			expect(NarrowCollision.circleAndLine(circle, line)).toEqual(true);
		});
		it("should return true if circle collides with the line itself", () => {
			const circle = createCircle(createPoint(5, 4), 1);
			const line = createLine(createPoint(3, 5), createPoint(7, 5));

			expect(NarrowCollision.circleAndLine(circle, line)).toEqual(true);
		})
		it("should return false if circle does not collide with the line", () => {
			const circle = createCircle(createPoint(5, 2), 2);
			const line = createLine(createPoint(3, 5), createPoint(7, 5));

			expect(NarrowCollision.circleAndLine(circle, line)).toEqual(false);
		});
	});

	describe("pointAndRectangle()", () => {
		it("should return true if point's coordinates are inside the rectangle", () => {
			const point = createPoint(2, 4);
			const rectangle = createRect(createPoint(1, 1), 4, 4);

			expect(NarrowCollision.pointAndRectangle(point, rectangle)).toEqual(true);
		});
		it("should return false if point's coordinates are NOT inside the rectangle", () => {
			const point = createPoint(0, 4);
			const rectangle = createRect(createPoint(1, 1), 4, 4);

			expect(NarrowCollision.pointAndRectangle(point, rectangle)).toEqual(false);
		});
	});

	describe("pointAndTriangle()", () => {
		it("should return true if point is inside the triangle", () => {
			const point = createPoint(2, 2);
			const triangle = createTriangle(createPoint(1, 1), createPoint(3, 3), createPoint(2, 10));

			expect(NarrowCollision.pointAndTriangle(point, triangle)).toEqual(true);
		});
		it("should return false if point is NOT inside the triangle", () => {
			const point = createPoint(2, 0);
			const triangle = createTriangle(createPoint(1, 1), createPoint(3, 3), createPoint(2, 10));

			expect(NarrowCollision.pointAndTriangle(point, triangle)).toEqual(false);
		});
	});

	describe("circleAndRectangle()", () => {
		it("should return true if circle and rectangle collide", () => {
			const circle = createCircle(createPoint(0, 0), 2);
			const rectangle = createRect(createPoint(1, 1), 2, 2);

			expect(NarrowCollision.circleAndRectangle(circle, rectangle)).toEqual(true);
		});
		it("should return false if circle and rectangle do NOT collide", () => {
			const circle = createCircle(createPoint(-2, -2), 2);
			const rectangle = createRect(createPoint(1, 1), 2, 2);

			expect(NarrowCollision.circleAndRectangle(circle, rectangle)).toEqual(false);
		});
	});

	describe("lineAndLine()", () => {
		it("should return true if lines collide", () => {
			const lineA = createLine(createPoint(1, 1), createPoint(5, 1));
			const lineB = createLine(createPoint(1, 0), createPoint(1, 5));

			expect(NarrowCollision.lineAndLine(lineA, lineB)).toEqual(true);
		});
		it("should return false if lines do NOT collide", () => {
			const lineA = createLine(createPoint(1, 1), createPoint(5, 1));
			const lineB = createLine(createPoint(0, 1), createPoint(1, 5));

			expect(NarrowCollision.lineAndLine(lineA, lineB)).toEqual(false);
		});
	});

	describe("lineAndRectangle()", () => {
		it("should return true if line collides with rectangle", () => {
			const line = createLine(createPoint(0, 0), createPoint(6, 6));
			const rectangle = createRect(createPoint(1, 1), 4, 4);

			expect(NarrowCollision.lineAndRectangle(line, rectangle)).toEqual(true);
		});
		it("should return false if line does NOT collide with rectangle", () => {
			const line = createLine(createPoint(0, 0), createPoint(0, 6));
			const rectangle = createRect(createPoint(1, 1), 4, 4);

			expect(NarrowCollision.lineAndRectangle(line, rectangle)).toEqual(false);
		});
	});
});

const createPoint = (x: number, y: number): PointI => ({
	x,
	y
});

const createCircle = (center: PointI, radius: number): Circle => ({
	center,
	radius
});

const createRect = (corner: { x: number, y: number }, width: number, height: number): RectangleI => ({
	corner,
	width,
	height
});

const createPolygon = (...args: { x: number, y: number }[]): PolygonI => ({
	vertices: args
});

const createTriangle = (vertexA: PointI, vertexB: PointI, vertexC: PointI): {
	vertices: [PointI, PointI, PointI]
} => ({
	vertices: [vertexA, vertexB, vertexC]
})

const createLine = (start: PointI, end: PointI): LineI => ({
	start, 
	end
});
