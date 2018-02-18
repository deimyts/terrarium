import generateRandom from './random-number-generator';

class Map {
  constructor(seed, width = 100, height = 100) {
    this.seed = seed;
    this.width = width;
    this.height = height;

    const emptyTiles = this.createTiles();
    this.tiles = this.addRandomValues(emptyTiles);
  }

  createTiles() {
    const grid = Map.createGrid(this.width, this.height);
    return Map.fillGridWithValues(grid);
  }

  addRandomValues(grid) {
    const value = generateRandom(this.seed);
    for (var i=0; i<3; i++) {
      const rando = generateRandom(this.seed);
      console.log(`seed: ${this.seed}`)
      console.log(`${i}A: ${rando}`)
      console.log(`${i}B: ${value}`)
    }
    const tiles = grid.map( (column) => {
      return column.map( (tile) => {
        tile.value = value;
        return tile;
      });
    });
    console.log('tiles: ', tiles);
    return tiles;
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

  static addCoordinates(grid, column) {
    const xVal = grid.indexOf(column);
    return column.map((tile, yVal) => this.formatCoordinates(xVal, yVal));
  }

  static formatCoordinates(x, y) {
    return { x, y };
  }

  static createFilledArray(fillValue, length) {
    return new Array(length).fill(fillValue);
  }
}

export default Map;
