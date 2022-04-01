declare type MatrixArray = [[number, number], [number, number]];
export declare class Matrix {
    matrix: MatrixArray;
    constructor(matrix: MatrixArray);
    add({ matrix }: Matrix): this;
    addScalar(by: number): this;
    substract({ matrix }: Matrix): this;
    substractScalar(by: number): this;
    multiply(matrix: Matrix): this;
    multiplyScalar(by: number): this;
    private multiplyRowAndColumn;
}
export {};
