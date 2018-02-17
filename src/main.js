class Map {
  constructor(width = 100, height = 100) {
    this.width = width;
    this.height = height;
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

