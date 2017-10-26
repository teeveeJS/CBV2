class Board {
  constructor(init_pos) {
    this.entity = init_pos || INIT_BOARD;
    this.move_white = true; //TODO: enums??
    this.moves_list = []; //for en passant, read the previous move in the list
    this.result = null;
    this.orientation = true; //true: white in front; false: black in front
  }

  clear_empty() {
    this.entity = EMPTY_BOARD;
  }

  clear_start() {
    this.entity = INIT_BOARD;
  }

  isCapture(move) {
    return this.entity[move[1].num][move[1].alf].color != undefined;
  }

  isSqEmpty(num, alf) {
    return this.entity[num][alf].color == undefined;
  }

  movePieces(p, m) {
    //console.clear();

    //let notation = toAlgebraic(m);
    //console.log(notation);


    //special conditions
    if (promotion(p, m)) {
      //TODO: handle BOTH capture and promotion (exd8=Q) ONLY AFFECTS GRAPHICS
      let Pn;
      while (Pn != "Q" && Pn != "R" && Pn != "B" && Pn != "N") {
        Pn = prompt("Promote to: Q|R|B|N").toUpperCase();
      }
      this.entity[m[0].num][m[0].alf].name = Pn;
    } else if (checkCastle(p, m, this)) {
      //moves the rook
      let r = selectRook(m, this);
      let side = (r.Alf == 7) ? -1 : 1;
      let r_move = [{num: r.Num, alf: r.Alf}, {num: m[1].num, alf: m[1].alf + side}];
      moveRook(r, r_move, this); //this seems very sketchy
    } else if (isCapture(m)) {
      // updateGraphicsCapture(p, m); forget about graphic for now
    } else if (enPassant(p, m, this)) {
      let dir = m[0].num == 3 ? 1 : -1; //up or down? based on color
      this.removePieceFrom(m[1].num + dir, m[1].alf);
      //updateGraphicsEnPassant(p, m);
    } else {
      null; //are there some unhandled cases?
    }


    //copies the object from the initial square to the output square
    this.entity[m[1].num][m[1].alf] = this.entity[m[0].num][m[0].alf];

    //sets the initial square back to normal
    this.removePieceFrom(m[0].num, m[0].alf);
    this.entity[m[1].num][m[1].alf].hasMoved = true;

    // add the move to notation
    this.moves_list.push(m);

    //switches the turn
    this.move_white = !this.move_white;

    this.printBoard();

    return;
  }

  printBoard() {
    //TODO: board orientation
    //console.clear();
    for (let i = 7; i >= 0; i--) {
      let str = "";
      for (let j = 0; j < 8; j++) {
        if (this.entity[i][j].color != undefined) {
          str += this.entity[i][j].color + this.entity[i][j].name + " ";
        } else {
          str += "o  "; //the board-array never actually contains "o";
        }
      }
      console.log(String(i + 1) + " " + str);
    }
    console.log(". a  b  c  d  e  f  g  h");
  }

  removePieceFrom(num, alf) {
    this.entity[num][alf] = num*10 + alf;
  }

  //for creating a custom board
  setNewPieceTo(p, c, n, a) {
    return this.entity[n][a] = new Piece(p, c, a, n);
  }

}


/*
//orientation??
function invertedBoard(board) {
  //console.clear();
  for (let i = 0; i < 8; i++) {
    let str = "";
    for (let j = 0; j < 8; j++) {
      if (board[i][j].color !== undefined) {
        str += board[i][j].color + board[i][j].name + " ";
      } else {
        str += "o  "; //the board-array never actually contains "o";
      }
    }
    console.log(String(i + 1) + " " + str);
  }
  console.log(". a  b  c  d  e  f  g  h");
}*/
