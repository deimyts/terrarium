class Map {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.tiles = this.createTiles();
  }

  createTiles() {
    const xAxis = Map.createIndependentAxis(this.width);
    const yAxis = Map.createDependentAxis(this.height, xAxis);
    return Map.fillGridWithValues(xAxis, yAxis);
  }

  static createIndependentAxis(length) {
    return new Array(length).fill([]);
  }

  static createDependentAxis(length, xAxis) {
    return xAxis.map(() => new Array(length).fill(null));
  }

  static fillGridWithValues(xAxis, yAxis) {
    return yAxis.map(xCoord => xCoord.map((y, i) => {
      const xVal = yAxis.indexOf(xCoord);
      const yVal = i;
      return `(${xVal}, ${yVal})`;
    }));
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
