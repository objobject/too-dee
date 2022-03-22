import { Matrix } from './../Matrix';

describe("Matrix", () => {
    it("should construct matrix with 2D values", () => {
        const matrix = new Matrix([
            [2, 1], 
            [3, 2]
        ]);

        expect(matrix.matrix).toMatchObject([[2, 1], [3, 2]]);
    });
    it("add() should add matrices and update 2D values", () => {
        const matrix = new Matrix([
            [2, 1], 
            [3, 2]
        ]);
        const matrix2 = new Matrix([
            [1, 3], 
            [4, 2]
        ]);

        expect(matrix.add(matrix2).matrix).toMatchObject([[3, 4], [7, 4]]);
    });
    it("addScalar() should add scalar to matrix 2D values", () => {
        const matrix = new Matrix([
            [2, 1], 
            [3, 2]
        ]);

        expect(matrix.addScalar(2).matrix).toMatchObject([[4, 3], [5, 4]]);
    });
    it("substract() should substract matrices and update 2D values", () => {
        const matrix = new Matrix([
            [2, 1], 
            [3, 2]
        ]);
        const matrix2 = new Matrix([
            [1, 3], 
            [4, 2]
        ]);

        expect(matrix.substract(matrix2).matrix).toMatchObject([[1, -2], [-1, 0]]);
    });
    it("substractScalar() should add scalar to matrix 2D values", () => {
        const matrix = new Matrix([
            [2, 1], 
            [3, 2]
        ]);

        expect(matrix.substractScalar(2).matrix).toMatchObject([[0, -1], [1, 0]]);
    });
    it("multiply() should multiply matrices and update 2D values", () => {
        const matrix = new Matrix([
            [2, 3], 
            [1, 2]
        ]);
        const matrix2 = new Matrix([
            [2, 3], 
            [0, 1]
        ]);

        expect(matrix.multiply(matrix2).matrix).toMatchObject([[4, 9], [2, 5]]);
    });
    it("multiplyScalar() should multiply matrix 2D values by scalar", () => {
        const matrix = new Matrix([
            [2, 1], 
            [3, 2]
        ]);

        expect(matrix.multiplyScalar(3).matrix).toMatchObject([[6, 3], [9, 6]]);
    });
});