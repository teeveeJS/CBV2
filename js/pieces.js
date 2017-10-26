class Piece {
  constructor(name, color, Alf, Num) {
    this.name = name;
    this.color = color;
    this.Alf = Alf;
    this.Num = Num;
    this.isCaptured = false; //OBSOLETE
    this.hasMoved = false; //will not matter unless pawn, king, or rook

    //this.src = "img/" + color + name + ".gif";
  }

  moveTo(a, b) {
    this.Alf = a;
    this.Num = n;
  }
};

//currently just used for defaults
//TODO: null pieces?
function createPieces() {
  let ps = [];
  for (let j = 0; j < 8; j++) {
    ps[j] = new Piece("p", "w", j, 1);
  };
  for(let j = 8; j < 16; j++){
    ps[j] = new Piece("p", "b", j-8, 6);
  };
  ps[16] = new Piece("K", "w", 4, 0);
  ps[17] = new Piece("K", "b", 4, 7);
  ps[18] = new Piece("Q", "w", 3, 0);
  ps[19] = new Piece("Q", "b", 3, 7);
  ps[20] = new Piece("R", "w", 0, 0);
  ps[21] = new Piece("R", "w", 7, 0);
  ps[22] = new Piece("R", "b", 0, 7);
  ps[23] = new Piece("R", "b", 7, 7);
  ps[24] = new Piece("B", "w", 2, 0);
  ps[25] = new Piece("B", "w", 5, 0);
  ps[26] = new Piece("B", "b", 2, 7);
  ps[27] = new Piece("B", "b", 5, 7);
  ps[28] = new Piece("N", "w", 1, 0);
  ps[29] = new Piece("N", "w", 6, 0);
  ps[30] = new Piece("N", "b", 1, 7);
  ps[31] = new Piece("N", "b", 6, 7);
  return ps;
};

function getPieceSrc(nc) {
  //returns the upper left-hand corner coordinate of the piece's image
  let sz = 1000 / 3;
  switch (nc) {
    case "wK": return {x: 0, y: 0};
    case "wQ": return {x: sz, y: 0};
    case "wB": return {x: 2 * sz, y: 0};
    case "wN": return {x: 3 * sz, y: 0};
    case "wR": return {x: 4 * sz, y: 0};
    case "wp": return {x: 5 * sz, y: 0};
    case "bK": return {x: 0, y: sz};
    case "bQ": return {x: sz, y: sz};
    case "bB": return {x: 2 * sz, y: sz};
    case "bN": return {x: 3 * sz, y: sz};
    case "bR": return {x: 4 * sz, y: sz};
    case "bp": return {x: 5 * sz, y: sz};
    default: return null;
  }
}
