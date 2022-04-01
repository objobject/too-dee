import { LineI, PointI } from "../types";

export class Line implements LineI {
	constructor(
		public start: PointI,
		public end: PointI
	) {}
}