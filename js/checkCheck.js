// File for all functions that handle checking if king is in check


function assumeMove(p, m, board) {
  //duplicate board so no moves are made on the real one
  dup_board = new Board(board.entity);

  dup_board.movePieces(p, m, false);

  return !isInCheck((dup_board.move_white) ? "w" : "b", dup_board);
}

function getKing(color, board) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board.entity[j][i].color == color && board.entity[j][i].name == "K") {
        return {num: j, alf: i};
      }
    }
  }
  return false; //this case should never occur
  //the king can't not be on the board
}


function isInCheck(color, board, l) {
  let kingLocation = l || getKing(color, board); //if not given by the user;
  let t = listThreatsByColor((color == "w") ? "b" : "w", board);

  for (let i in t) {
    for (let j in t[i]){
      if(t[i][j].num == kingLocation.num && t[i][j].alf == kingLocation.alf) {
        return true;
      }
    }
  }

  return false;
}


function isRookThreat(move, board) {
  if (move[0].num - move[1].num == 0 && move[0].alf - move[1].alf != 0) {
    return checkRank(move, board);
  } else if (move[0].num - move[1].num != 0 && move[0].alf - move[1].alf == 0) {
    return checkFile(move, board);
  } else {
    return false;
  }
}
