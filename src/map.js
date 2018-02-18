const seedrandom = require('seedrandom');

const throwError = (msg) => { throw Error( msg ) }

class Map {
  constructor(seed = throwError('Map must have a seed'), width = 100, height = 100) {
    this.seed = seed;
    this.width = width;
    this.height = height;

    this.tiles = this.createTiles();
  }

  createTiles() {
    const grid = Map.createGrid(this.width, this.height);
    return Map.fillGridWithValues(grid);
  }

  static createGrid(width, height) {
    const xAxis = this.createIndependentAxis(width);
    return this.createDependentAxis(height, xAxis);
  }

  static createIndependentAxis(length) {
    return this.createFilledArray([], length);
  }

  static createDependentAxis(length, xAxis) {
    return xAxis.map(() => this.createFilledArray(null, length));
  }

  static fillGridWithValues(grid) {
    return grid.map(column => this.fillColumnWithValues(grid, column));
  }

  static fillColumnWithValues(grid, column) {
    const xVal = grid.indexOf(column);
    return column.map((tile, yVal) => this.formatCoordinates(xVal, yVal));
  }

  static formatCoordinates(x, y) {
    return { x, y, value: this.assignRandomValuetoTile(this.seed) };
  }

  static createFilledArray(fillValue, length) {
    return new Array(length).fill(fillValue);
  }

  static assignRandomValuetoTile(seed) {
    const val = seedrandom(seed);
    return val();
  }
}

export default Map;
