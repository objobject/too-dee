export interface PointI {
	x: number;
	y: number;
}

export interface LineI {
	start: PointI;
	end: PointI;
}

export interface RectangleI {
	corner: PointI;
	width: number;
	height: number;
}

export interface TriangleI {
	vertices: [PointI, PointI, PointI];
}

export interface PolygonI {
	vertices: PointI[];
}

export interface Circle {
	center: PointI;
	radius: number;
}