function toAlgebraic(piece, arr, board) {
  console.log(arr);
  //will likely be used to display the coordinates after the move
  //should be called before the move is made on the board
  let move;
  let p = piece.name == "p" ? "" : piece.name.toString();
  let x = capture(arr, board) ||
      enPassant(piece, arr, board) ? "x" : "";
  if (!p && x) p = numToAlf(arr[0].alf);
  if (checkCastle(piece, arr, board)) {
    move = arr[1].alf == 2 ? "0-0-0" : "0-0";
  } else {
    move = p + x + numToAlf(arr[1].alf) + (arr[1].num + 1).toString();
  }
  return move;
}

function numToAlf(str) {
  let atn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let i = 0; i < atn.length; i++) {
    if (str == i) str = atn[i];
    //if(arr[1].alf == i) arr[1].alf = atn[i];
  }

  return str;
}

function alfToNum(str) {
  //REMEMBER 0-BASED INDEXING!!
  //input will be in the form g1-f3
  let atn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  let start = {
    num: str.substring(1,2) - 1, //0
    alf: str.substring(0,1) //g
  };

  let end = {
    num: str.substring(4,5) - 1, //2
    alf: str.substring(3,4) //f
  }

  for (let i = 0; i < atn.length; i++) {
    if (start.alf == atn[i]) {
      start.alf = i; //changes g to 6
    };
    if (end.alf == atn[i]) {
      end.alf = i; //changes f to 5
    };
  }

  if (parseInt(start.alf) == NaN || parseInt(end.alf) == NaN) {
    start = {alf: -1, num: -1};
    end = {alf: -1, num: -1};
    //basically sets the objects so that piece will be null
  }

  let mov = [start, end];
  return mov;
}

function mouseToCoord(mouseX, mouseY, board) {
  let mT = parseInt(document.getElementById("board").style.marginTop) + 8;
  let mL = parseInt(document.getElementById("board").style.marginLeft) + 8;

  mX = mouseX - mL;
  mY = mouseY - mT;

  let sq = {
    alf: Math.floor(mX / SQ_SIZE),
    num: Math.floor(mY / SQ_SIZE)
  }

  //console.log(sq.num);

  if (board.orientation) {
    sq.num = 7 - sq.num;
  }

  //console.log(sq);
  return sq;
}
