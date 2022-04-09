import { PointI, PolygonI } from "../../types";
import { Polygon } from "../Polygon";

describe("Polygon", () => {
	it("should return bounding box", () => {
		const polygon = new Polygon([
			createPoint(1, 2),
			createPoint(2, 4),
			createPoint(3, 6),
			createPoint(-1, -2),
			createPoint(-2, -4),
			createPoint(-3, -6)
		]);

		expect(polygon.getBoundingBox()).toMatchObject({
			corner: {
				x: -3,
				y: -6,
			},
			width: 6,
			height: 12
		});
	});
	it("should fan triangulate", () => {
		const polygon = new Polygon([
			createPoint(1, 2),
			createPoint(2, 4),
			createPoint(3, 6),
			createPoint(-1, -2),
			createPoint(-2, -4),
			createPoint(-3, -6)
		]);

		expect(polygon.fanTriangulate()).toMatchObject([
			{"vertices": [{"x": 1, "y": 2}, {"x": 2, "y": 4}, {"x": 3, "y": 6}]}, 
			{"vertices": [{"x": 1, "y": 2}, {"x": 3, "y": 6}, {"x": -1, "y": -2}]}, 
			{"vertices": [{"x": 1, "y": 2}, {"x": -1, "y": -2}, {"x": -2, "y": -4}]}, 
			{"vertices": [{"x": 1, "y": 2}, {"x": -2, "y": -4}, {"x": -3, "y": -6}]}
		]);
	})
});

const createPoint = (x: number, y: number): PointI => ({
	x,
	y
});
