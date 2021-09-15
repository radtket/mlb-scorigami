const NUMBER_OF_CELLS = 26;

export const CELL_DIM = 25;

export const CELL_RATIO = NUMBER_OF_CELLS * CELL_DIM;
export const CELL_SIZE = CELL_RATIO / 2;

export const MARGINS_SMALL = CELL_DIM + CELL_DIM;
export const MARGINS_LARGE = NUMBER_OF_CELLS * CELL_DIM + (CELL_DIM + CELL_DIM);

export const SEASON_MAX = 109;
export const RANGE_MAX = 7105;

// Dataset end points
export const FIRST_YEAR = 1871;
export const LAST_YEAR = 2017;

export const ALL_CELL_KEYS = [...Array(NUMBER_OF_CELLS).keys()];
