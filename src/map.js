import generateRandom from './random-number-generator';

class Map {
  constructor(seed, width = 100, height = 100) {
    this.seed = seed;
    this.width = width;
    this.height = height;

    this.grid = this.createTiles();
    this.tiles = this.addRandomValues();
  }

  createTiles() {
    const grid = Map.createGrid(this.width, this.height);
    return Map.fillGridWithValues(grid);
  }

  addRandomValues() {
    return Map.iterateOverGrid(this.grid, Map.assignRandomValueToTile);
  }

  static iterateOverGrid(grid, processTiles) {
    return grid.map(column => column.map(processTiles));
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
    return grid.map(column => this.addCoordinates(grid, column));
  }

  static assignRandomValueToTile(tile) {
    const value = generateRandom(`${tile.x} + ${tile.y}`);
    return Object.assign({}, { value }, tile);
  }

  static addCoordinates(grid, column) {
    const x = grid.indexOf(column);
    return column.map((tile, y) => ({ x, y }));
  }

  static createFilledArray(fillValue, length) {
    return new Array(length).fill(fillValue);
  }
}

export default Map;
