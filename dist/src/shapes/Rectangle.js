export class Rectangle {
    constructor(corner, width, height) {
        this.corner = corner;
        this.width = width;
        this.height = height;
    }
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
