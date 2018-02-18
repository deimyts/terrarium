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

    const grid = new Array(this.width).fill([]);


    // const grid2 = grid.forEach((xCoord, xVal, arr) => {
    //   for (let y = 0; y < this.height; y += 1) {
    //     xCoord.push(`(${xVal}, ${y})`);
    //   }
    //   arr.push(xCoord);
    //   return arr;
    // });

    const grid3 = grid.map((xCoord, xVal) => {
      xCoord.push(xVal);
      //   xCoord.push(`(${xVal}, yVal)`);
      //   }
      return xCoord;
    });


    const a = new Array(this.width).fill([]);

    if (this.width < 10) {
      console.log('A: ', a);
    }
    // const b = a.map( (x, i) => new Array(this.height).fill(i));
    const b = a.map((x, i) => {
    //   for (let y = 0; y < this.height; y += 1) {
      // x.push(i);
      if (this.width < 10) {
        // console.log('x: ', x);
        // console.log('i: ', i);
        // console.log('this: ', this);
      }
    //   return new Array(this.height).fill(1).map((y, i) => i);
      return new Array(this.height).fill(0);

    });


    if (this.width < 10) {
      console.log('B: ', b);
    }

    const c = b.map(x => x.map((y, i, arr) => {
      const val = x.toString();

      const xVal = b.indexOf(x);
      const yVal = i;
      if (this.width < 10) {
        console.log('x: ', xVal);
        console.log('y: ', yVal);
      }
      const formattedVal = val.replace(',', ', ');
    //   const finalVal = `(${formattedVal})`;
    const finalVal = `(${xVal}, ${yVal})`;
      return finalVal;
    }));

    if (this.width < 10) {
      console.log('C: ', c);
    }
    return c;
    // return tiles;
  }
}

function createGrid(width, height) {
  const grid = new Array(this.width).fill([]);
  return grid;
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
