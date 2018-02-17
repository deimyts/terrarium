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
    return tiles;
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
