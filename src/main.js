class Game {
  constructor() {
    this.seed = Date.now();
    this.map = {
      width: 100,
      height: 100,
    };
  }
}

export default Game;
