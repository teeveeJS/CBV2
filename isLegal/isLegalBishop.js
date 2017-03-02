function isLegalBishop(move, board) {

  //redundant, but necessary for checking check
  if (move[0].alf === move[1].alf && move[0].num === move[1].num) return false;

  var deltaAlf = Math.abs(move[0].alf - move[1].alf);
  var deltaNum = Math.abs(move[0].num - move[1].num);
  var dirAlf = Math.sign(move[1].alf - move[0].alf);
  var dirNum = Math.sign(move[1].num - move[0].num);
  if (deltaAlf !== deltaNum) {
    return false;
  } else {
    for (var i = 1; i < deltaAlf; i++) {
      if (!isEmpty(move[0].num + dirNum * i, move[0].alf + dirAlf * i, board)) {
        return false;
      }
    }
  }
  return true;
}
