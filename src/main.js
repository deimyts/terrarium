class Map {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.tiles = this.createTiles();
  }

  createTiles() {
    const a = new Array(this.width).fill([]);
    const b = a.map(() => new Array(this.height).fill(null));
    const c = b.map(x => x.map((y, i) => {
      const xVal = b.indexOf(x);
      const yVal = i;
      return `(${xVal}, ${yVal})`;
    }));

    return c;
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
