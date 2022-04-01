import { Utils } from '../Utils';
export class NarrowCollision {
    static pointAndPoint(pointA, pointB) {
        return pointA.x === pointB.x && pointA.y === pointB.y;
    }
    static pointAndCircle(point, circle) {
        return Utils.distanceBetweenTwoPoints(point, circle.center) <= circle.radius;
    }
    static pointAndLine(point, line) {
        const lineLength = Utils.distanceBetweenTwoPoints(line.start, line.end);
        const lineStartToPointLength = Utils.distanceBetweenTwoPoints(line.start, point);
        const pointToLineEndLength = Utils.distanceBetweenTwoPoints(point, line.end);
        return (lineStartToPointLength + pointToLineEndLength) === lineLength;
    }
    static pointAndRectangle(point, rect) {
        return (point.x >= rect.corner.x &&
            point.x <= rect.corner.x + rect.width &&
            point.y >= rect.corner.y &&
            point.y <= rect.corner.y + rect.height);
    }
    static pointAndTriangle(point, triangle, errorMargin = 0.0001) {
        const originalArea = Utils.calculateAreaOfTriangle(triangle.vertices);
        const area1 = Utils.calculateAreaOfTriangle([point, triangle.vertices[0], triangle.vertices[1]]);
        const area2 = Utils.calculateAreaOfTriangle([point, triangle.vertices[0], triangle.vertices[2]]);
        const area3 = Utils.calculateAreaOfTriangle([point, triangle.vertices[1], triangle.vertices[2]]);
        return Math.abs(area1 + area2 + area3 - originalArea) <= errorMargin;
    }
    static pointAndPolygon(point, polygon) {
    }
    static circleAndCircle(circleA, circleB) {
        return Utils.distanceBetweenTwoPoints(circleA.center, circleB.center) <= circleA.radius + circleB.radius;
    }
    static circleAndLine(circle, line) {
        const collidesWithLineStart = this.pointAndCircle(line.start, circle);
        const collidesWithLineEnd = this.pointAndCircle(line.end, circle);
        if (collidesWithLineStart || collidesWithLineEnd) {
            return true;
        }
        const closestPoint = Utils.findClosestPointOnTheLineToTheCenterOfCircle(circle, line);
        if (this.pointAndLine(closestPoint, line) === false) {
            return false;
        }
        return this.pointAndCircle(closestPoint, circle);
    }
    static circleAndRectangle(circle, rect) {
        let tX = circle.center.x;
        let tY = circle.center.y;
        if (circle.center.x < rect.corner.x) {
            tX = rect.corner.x;
        }
        if (circle.center.x > rect.corner.x + rect.width) {
            tX = rect.corner.x + rect.width;
        }
        if (circle.center.y < rect.corner.y) {
            tY = rect.corner.y;
        }
        if (circle.center.y < rect.corner.y + rect.height) {
            tY = rect.corner.y + rect.height;
        }
        const distanceX = circle.center.x - tX;
        const distanceY = circle.center.y - tY;
        const distance = Math.sqrt(distanceX ^ 2 + distanceY ^ 2);
        return distance <= circle.radius;
    }
    static circleAndPolygon(circle, polygon) {
    }
    static rectangleAndRectangle(rectA, rectB) {
        const leftSideAtTheLeftOfTheRightSide = rectA.corner.x < rectB.corner.x + rectB.width;
        const rightSideAtTheRightOfTheLeftSide = rectA.corner.x + rectA.width > rectB.corner.x;
        const topSideOverTheBottomSide = rectA.corner.y < rectB.corner.y + rectB.height;
        const bottomSideUnderneathTheTopSide = rectA.corner.y + rectA.height > rectB.corner.y;
        return (leftSideAtTheLeftOfTheRightSide &&
            rightSideAtTheRightOfTheLeftSide &&
            topSideOverTheBottomSide &&
            bottomSideUnderneathTheTopSide);
    }
    static lineAndLine(lineA, lineB) {
        const denominator = ((lineB.end.y - lineB.start.y) * (lineA.end.x - lineA.start.x) - (lineB.end.x - lineB.start.x) * (lineA.end.y - lineA.start.y));
        if (denominator === 0) {
            return false;
        }
        const uA = ((lineB.end.x - lineB.start.x) * (lineA.start.y - lineB.start.y) - (lineB.end.y - lineB.start.y) * (lineA.start.x - lineB.start.x)) / denominator;
        const uB = ((lineA.end.x - lineA.start.x) * (lineA.start.y - lineB.start.y) - (lineA.end.y - lineA.start.y) * (lineA.start.x - lineB.start.x)) / denominator;
        return (uA >= 0 && uA <= 1) && (uB >= 0 && uB <= 1);
    }
    static lineAndRectangle(line, rect) {
        if (this.pointAndRectangle(line.start, rect) || this.pointAndRectangle(line.end, rect)) {
            return true;
        }
        const leftCollision = this.lineAndLine(line, { start: { x: rect.corner.x, y: rect.corner.y }, end: { x: rect.corner.x, y: rect.corner.y + rect.height } });
        const rightCollision = this.lineAndLine(line, { start: { x: rect.corner.x + rect.width, y: rect.corner.y }, end: { x: rect.corner.x, y: rect.corner.y } });
        const topCollision = this.lineAndLine(line, { start: { x: rect.corner.x, y: rect.corner.y }, end: { x: rect.corner.x + rect.width, y: rect.corner.y } });
        const bottomCollision = this.lineAndLine(line, { start: { x: rect.corner.x, y: rect.corner.y + rect.height }, end: { x: rect.corner.x + rect.width, y: rect.corner.y + rect.height } });
        return (leftCollision || rightCollision || topCollision || bottomCollision);
    }
    static lineAndPolygon(line, polygon) {
    }
    static polygonAndPolygon(polygonA, polygonB) {
    }
}
