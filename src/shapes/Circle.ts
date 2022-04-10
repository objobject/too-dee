import { PointI, Circle as CircleI } from '../types';

export class Circle implements CircleI {
	constructor(public center: PointI, public radius: number) {}

	normalize() {
		if (this.radius < 0) {
			this.radius = Math.abs(this.radius);
		}

		return this;
	}
}
