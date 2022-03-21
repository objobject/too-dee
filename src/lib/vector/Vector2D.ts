export class Vector2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(vector: Vector2D) {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }
    
    addScalar(by: number) {
        this.x += by;
        this.y += by;

        return this;
    }

    substract(vector: Vector2D) {
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    }

    substractScalar(by: number) {
        this.x -= by;
        this.y -= by;

        return this;
    }

    multiply(vector: Vector2D) {
        this.x *= vector.x;
        this.y *= vector.y;

        return this;
    }

    multiplyScalar(by: number) {
        this.x *= by;
        this.y *= by;

        return this;
    }

    divide(by: number) {
        this.x /= by;
        this.y /= by;

        return this;
    }

    dot(vector: Vector2D) {
        return (this.x * vector.x) + (this.y * vector.y);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    normalize() {
        const length = this.length();
        this.divide(length);

        return this;
    }

    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);

        return this;
    }

    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);

        return this;
    }

    random() {
        this.x = Math.random();
        this.y = Math.random();

        return this;
    }
}