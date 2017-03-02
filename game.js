function new_game() {
  //createPieces();
  //initBoard();
  MOVE_WHITE = true;
  MOVES_LIST = [];
  move(prompt("white to move"), UNIVERSAL_BOARD);
}
