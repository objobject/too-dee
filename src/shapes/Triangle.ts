import { PointI, TriangleI  } from "../types";

export class Triangle implements TriangleI {
	constructor(
		public vertices: [PointI, PointI, PointI]
	) {}
}