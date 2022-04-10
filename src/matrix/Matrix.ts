type MatrixArray = [[number, number], [number, number]];

type ZeroOrOne = 0 | 1;

const MATRIX_POSITIONS: [ZeroOrOne, ZeroOrOne][] = [
	[0, 0],
	[0, 1],
	[1, 0],
	[1, 1],
];

export class Matrix {
	matrix: MatrixArray;

	constructor(matrix: MatrixArray) {
		this.matrix = matrix;
	}

	add({ matrix }: Matrix) {
		MATRIX_POSITIONS.forEach(pos => {
			const row = pos[0];
			const col = pos[1];

			this.matrix[row][col] += matrix[row][col];
		});

		return this;
	}

	addScalar(by: number) {
		MATRIX_POSITIONS.forEach(pos => {
			const row = pos[0];
			const col = pos[1];

			this.matrix[row][col] += by;
		});
		return this;
	}

	substract({ matrix }: Matrix) {
		MATRIX_POSITIONS.forEach(pos => {
			const row = pos[0];
			const col = pos[1];

			this.matrix[row][col] -= matrix[row][col];
		});
		return this;
	}

	substractScalar(by: number) {
		MATRIX_POSITIONS.forEach(pos => {
			const row = pos[0];
			const col = pos[1];

			this.matrix[row][col] -= by;
		});
		return this;
	}

	multiply(matrix: Matrix) {
		const _matrix: MatrixArray = JSON.parse(JSON.stringify(this.matrix));
		MATRIX_POSITIONS.forEach(pos => {
			const row = pos[0];
			const col = pos[1];

			_matrix[row][col] = this.multiplyRowAndColumn(this, matrix, pos);
		});
		this.matrix = _matrix;

		return this;
	}

	multiplyScalar(by: number) {
		MATRIX_POSITIONS.forEach(pos => {
			const row = pos[0];
			const col = pos[1];

			this.matrix[row][col] *= by;
		});
		return this;
	}

	private multiplyRowAndColumn(
		matrix1: Matrix,
		matrix2: Matrix,
		position: [ZeroOrOne, ZeroOrOne],
	) {
		const matrix1Row = matrix1.matrix[position[0]];
		const matrix2Col = [
			matrix2.matrix[0][position[1]],
			matrix2.matrix[1][position[1]],
		];

		return matrix1Row[0] * matrix2Col[0] + matrix1Row[1] * matrix2Col[1];
	}
}
