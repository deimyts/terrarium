class Map {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
    this.tiles = [];
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

