import Map from './map';

class Game {
  constructor() {
    this.seed = Date.now();
    this.map = new Map(this.seed);
  }
}

export {
  Game,
  Map,
};
