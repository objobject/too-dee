import { PointI } from "../types";
import { RectangleI as RectangleI } from "../types";

export class Rectangle implements RectangleI {
	constructor(
		public corner: PointI,
		public width: number,
		public height: number
	) {}

	normalize() {
		if (this.width < 0) {
			this.corner.x += this.width;
			this.width = Math.abs(this.width);
		}
		if (this.height < 0) {
			this.corner.y += this.height;
			this.height = Math.abs(this.height);
		}

		return this;
	}
}