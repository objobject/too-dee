import { BroadCollision } from './src/collision/BroadCollision';
import { NarrowCollision } from './src/collision/NarrowCollision';
import { Matrix } from './src/matrix/Matrix';
import { Vector } from './src/vector/Vector';
declare const _default: {
    Vector: typeof Vector;
    Matrix: typeof Matrix;
    NarrowCollision: typeof NarrowCollision;
    BroadCollision: typeof BroadCollision;
    Shapes: {
        Point: typeof import("./src/shapes/Point").Point;
        Line: typeof import("./src/shapes/Line").Line;
        Triangle: typeof import("./src/shapes/Triangle").Triangle;
        Rectangle: typeof import("./src/shapes/Rectangle").Rectangle;
        Polygon: typeof import("./src/shapes/Polygon").Polygon;
        Circle: typeof import("./src/shapes/Circle").Circle;
    };
};
export default _default;
