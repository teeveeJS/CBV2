class Board {
  constructor() {
    this.entity = DEFAULT_BOARD;
    this.move_white = true; //TODO: enums??
    this.moves_list = []; //for en passant, read the previous move in the list
    this.result = null;
    this.orientation = true; //true: white in front; false: black in front
  }

  clear() {
    this.entity = DEFAULT_BOARD;
  }

  initBoard(pieces) {
    for (let i = 0; i < pieces.length; i++) {
      this.entity[pieces[i].Num][pieces[i].Alf] = pieces[i];
    }
  }

  isSqEmpty(num, alf) {
    return this.entity[num][alf].color == undefined;
  }

  printBoard() {
    //TODO: board orientation
    //console.clear();
    for (let i = 7; i >= 0; i--) {
      var str = "";
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

}


/*
//orientation??
function invertedBoard(board) {
  //console.clear();
  for (var i = 0; i < 8; i++) {
    var str = "";
    for (var j = 0; j < 8; j++) {
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
