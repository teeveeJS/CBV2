// File for all functions that handle checking if king is in check


function assumeMove(p, m, board) {
  //copies the object from the initial square to the output square
  board.entity[m[1].num][m[1].alf] = board.entity[m[0].num][m[0].alf];

  if (enPassant(p, m, board)) {
    let dir = m[0].num === 3 ? 1 : -1; //up or down? based on color
    board.removePieceFrom(m[1].num + dir, m[1].alf);
  } else if (checkCastle(p, m, board)) {
    let r = selectRook(m, board);
    let side = (r.Alf === 7) ? -1 : 1;
    let r_move = [{num: r.Num, alf: r.Alf}, {num: m[1].num, alf: m[1].alf + side}];
    moveRook(r, r_move, board);
  }

  board.removePieceFrom(m[0].num, m[0].alf);

  return !isInCheck((board.move_white) ? "w" : "b", board);
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

function getThreatsPawn(init_sq, board) {
  let threats = [];
  let dir = Math.sign((board.entity[init_sq.num][init_sq.alf].color == "w") - 0.5);
  threats.push({num: init_sq.num + dir, alf: init_sq.alf - 1});
  threats.push({num: init_sq.num + dir, alf: init_sq.alf + 1});
  return threats;
}


function isInCheck(color, board, l) {
  let kingLocation = l || getKing(color, board); //if not given by the user;
  let t = listThreatsByColor((color == "w") ? "b" : "w", board);

  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < t[i].length; j++){
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
