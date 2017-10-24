function isLegalBishop(move, board) {

  //redundant, but necessary for checking check
  if (move[0].alf == move[1].alf && move[0].num == move[1].num) return false;

  let deltaAlf = Math.abs(move[0].alf - move[1].alf);
  let deltaNum = Math.abs(move[0].num - move[1].num);
  let dirAlf = Math.sign(move[1].alf - move[0].alf);
  let dirNum = Math.sign(move[1].num - move[0].num);
  if (deltaAlf != deltaNum) {
    return false;
  } else {
    //check if there are pieces on the way
    for (let i = 1; i < deltaAlf; i++) {
      if (!board.isSqEmpty(move[0].num + i*dirNum, move[0].alf + i*dirAlf)) {
        return false;
      }
    }
  }
  return true;
}
