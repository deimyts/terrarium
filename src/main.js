class Map {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.tiles = this.createTiles();
  }

  createTiles() {
    const xAxis = Map.createIndependentAxis(this.width);
    const yAxis = Map.createDependentAxis(this.height, xAxis);
    return Map.fillGridWithValues(yAxis);
  }

  static createIndependentAxis(length) {
    return new Array(length).fill([]);
  }

  static createDependentAxis(length, xAxis) {
    return xAxis.map(() => new Array(length).fill(null));
  }

  static fillGridWithValues(grid) {
    // for each array of Y-values on the X-axis
    // replace each Y-value in the array with custom text
    return grid.map( (arrayOfYValues) => {
      return arrayOfYValues.map((tile, yVal) => {
        const xVal = grid.indexOf(arrayOfYValues);
        return `(${xVal}, ${yVal})`;
      })
    })
  }

  static mapCoords(coords) {
    return coords.map((y, i) => {
      const xVal = yAxis.indexOf(coords);
      const yVal = i;
      return `(${xVal}, ${yVal})`;
    });
  }
}

class Game {
  constructor() {
    this.seed = Date.now();
    this.map = new Map();
  }
}

export {
  Game,
  Map,
};
