export class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    normalize() {
        if (this.radius < 0) {
            this.radius = Math.abs(this.radius);
        }
        return this;
    }
}
