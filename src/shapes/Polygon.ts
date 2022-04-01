import { PointI, PolygonI } from "../types";

export class Polygon implements PolygonI {
	constructor(
		public vertices: PointI[]
	) {}
}