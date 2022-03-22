"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    addScalar(by) {
        this.x += by;
        this.y += by;
        return this;
    }
    substract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    substractScalar(by) {
        this.x -= by;
        this.y -= by;
        return this;
    }
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }
    multiplyScalar(by) {
        this.x *= by;
        this.y *= by;
        return this;
    }
    divide(by) {
        this.x /= by;
        this.y /= by;
        return this;
    }
    dot(vector) {
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
exports.Vector = Vector;
