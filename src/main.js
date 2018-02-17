class Map {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.tiles = this.createTiles();
  }

  createTiles() {
    const tiles = [];
    const area = this.width * this.height;
    for (let i = 0; i < area; i += 1) {
      tiles.push(i);
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

