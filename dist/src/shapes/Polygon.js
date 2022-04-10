import { Rectangle } from './Rectangle';
import { Triangle } from './Triangle';
export class Polygon {
    constructor(vertices) {
        this.vertices = vertices;
    }
    getBoundingBox() {
        let xMin = this.vertices[0].x;
        let xMax = this.vertices[0].x;
        let yMin = this.vertices[0].y;
        let yMax = this.vertices[0].y;
        for (let vertex of this.vertices) {
            if (vertex.x < xMin) {
                xMin = vertex.x;
            }
            if (vertex.x > xMax) {
                xMax = vertex.x;
            }
            if (vertex.y < yMin) {
                yMin = vertex.y;
            }
            if (vertex.y > yMax) {
                yMax = vertex.y;
            }
        }
        return new Rectangle({ x: xMin, y: yMin }, xMax - xMin, yMax - yMin);
    }
    fanTriangulate() {
        const rootVertex = this.vertices[0];
        const triangles = [];
        for (let i = 2; i < this.vertices.length; i++) {
            triangles.push(new Triangle([rootVertex, this.vertices[i - 1], this.vertices[i]]));
        }
        return triangles;
    }
    static from(polygon) {
        return new Polygon(polygon.vertices);
    }
}
