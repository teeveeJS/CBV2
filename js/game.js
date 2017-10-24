function new_game() {
  pieces_list = createPieces();

  game_board = new Board();
  game_board.initBoard(pieces_list);

  move(prompt("white to move"), game_board);
}
