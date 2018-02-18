class Map {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.tiles = this.createTiles();
  }

  createTiles() {
    const tiles = [];
    for (let x = 0; x < this.width; x += 1) {
      for (let y = 0; y < this.height; y += 1) {
        if (typeof tiles[x] === 'undefined') {
          tiles[x] = [];
        }
        tiles[x][y] = `(${x}, ${y})`;
      }
    }

    const a = new Array(this.width).fill([]);

    const b = a.map(() => new Array(this.height).fill(0));

    const c = b.map(x => x.map((y, i) => {
      const xVal = b.indexOf(x);
      const yVal = i;
      const finalVal = `(${xVal}, ${yVal})`;
      return finalVal;
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
