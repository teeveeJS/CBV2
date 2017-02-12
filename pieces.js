function CP(name, color, Alf, Num) {
  this.name = name;
  this.color = color;
  this.Alf = Alf;
  this.Num = Num;
  this.isCaptured = false; //OBSOLETE
  this.hasMoved = false; //will not matter unless pawn, king, or rook

  //this.src = "img/" + color + name + ".gif";

  this.moveTo = function(a, n){
    this.Alf = a;
    this.Num = n;
    return this;
  }
};

//currently just used for defaults
function createPieces(){
  ps = []; //empties the array for a new game
  for (j=0; j<8; j++) {
    ps[j] = new CP("p", "w", j, 1);
  };
  for(j=8; j<16; j++){
    ps[j] = new CP("p", "b", j-8, 6);
  };
  ps[16] = new CP("K", "w", 4, 0);
  ps[17] = new CP("K", "b", 4, 7);
  ps[18] = new CP("Q", "w", 3, 0);
  ps[19] = new CP("Q", "b", 3, 7);
  ps[20] = new CP("R", "w", 0, 0);
  ps[21] = new CP("R", "w", 7, 0);
  ps[22] = new CP("R", "b", 0, 7);
  ps[23] = new CP("R", "b", 7, 7);
  ps[24] = new CP("B", "w", 2, 0);
  ps[25] = new CP("B", "w", 5, 0);
  ps[26] = new CP("B", "b", 2, 7);
  ps[27] = new CP("B", "b", 5, 7);
  ps[28] = new CP("N", "w", 1, 0);
  ps[29] = new CP("N", "w", 6, 0);
  ps[30] = new CP("N", "b", 1, 7);
  ps[31] = new CP("N", "b", 6, 7);
  return ps;
};
