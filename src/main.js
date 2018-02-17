class Map {
  constructor() {
    this.width = 100;
    this.height = 100;
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
