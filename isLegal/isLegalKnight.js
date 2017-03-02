function isLegalKnight(move) {
  return Math.abs(move[0].alf - move[1].alf) === 1 &&
        Math.abs(move[0].num - move[1].num) === 2 ||
        Math.abs(move[0].alf - move[1].alf) === 2 &&
        Math.abs(move[0].num - move[1].num) === 1;
}
