import { Vector2D } from '../Vector2D';

describe("Vector2D", () => {
    it("should construct object with x and y values", () => {
        expect(new Vector2D(1, 2)).toMatchObject({
            x: 1,
            y: 2
        })
    });
    it("add() should add vector and update x and y values", () => {
        const vector = new Vector2D(1, 2);
        const vector2 = new Vector2D(4, 4);

        expect(vector.add(vector2)).toMatchObject({
            x: 5,
            y: 6
        });
    });
    it("addScalar() should add scalar value to x and y values", () => {
        const vector = new Vector2D(1, 2);

        expect(vector.addScalar(8)).toMatchObject({
            x: 9,
            y: 10
        });
    });
    it("substract() should substract vector and update x and y values", () => {
        const vector = new Vector2D(1, 2);
        const vector2 = new Vector2D(4, 4);

        expect(vector.substract(vector2)).toMatchObject({
            x: -3,
            y: -2
        });
    });

    it("substractScalar() should substract by scalar value and update x and y values", () => {
        const vector = new Vector2D(1, 2);

        expect(vector.substractScalar(1)).toMatchObject({
            x: 0,
            y: 1
        });
    });
    it("multiply() should multiply x and y values by another vector's", () => {
        const vector = new Vector2D(1.5, 2);
        const vector2 = new Vector2D(4, 4);

        expect(vector.multiply(vector2)).toMatchObject({
            x: 6,
            y: 8
        });
    });
    it("multiplyScalar() should make vector 'n' times longer", () => {
        const vector = new Vector2D(1, 2);

        expect(vector.multiplyScalar(5)).toMatchObject({
            x: 5,
            y: 10
        })
    });
    it("dot() should return dot product with another vector", () => {
        const vector = new Vector2D(1, 2);
        const vector2 = new Vector2D(3, 4);

        expect(vector.dot(vector2)).toEqual(11);
    });
    it("length() should return vector's length", () => {
        const vector = new Vector2D(3, 4);

        expect(vector.length()).toEqual(5)
    });
    it("normalize() should return vector's 1-unit representation", () => {
        const vector = new Vector2D(1, 1);

        expect(vector.normalize()).toMatchObject({
            x: 0.7071067811865475,
            y: 0.7071067811865475
        })
    });
    it("ceil() should round vector's values up", () => {
        const vector = new Vector2D(1.5, 1.5);

        expect(vector.ceil()).toMatchObject({
            x: 2,
            y: 2
        })
    });
    it("floor() should round vector's values down", () => {
        const vector = new Vector2D(1, 1);

        expect(vector.floor()).toMatchObject({
            x: 1,
            y: 1
        })
    });
    it("random() should set vector's components to random values between 0 and 1", () => {
        const vectorRandom = new Vector2D(2, 2).random();

        expect(vectorRandom.x).toBeGreaterThanOrEqual(0);
        expect(vectorRandom.x).toBeLessThanOrEqual(1);
        expect(vectorRandom.y).toBeGreaterThanOrEqual(0);
        expect(vectorRandom.y).toBeLessThanOrEqual(1);
    });
})