//upper case: white
//lower case: black
//starting position
//rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1

function posToFen() {

}

function fenToPos(fen) {
  var b = [
            [00, 01, 02, 03, 04, 05, 06, 07],
            [10, 11, 12, 13, 14, 15, 16, 17],
            [20, 21, 22, 23, 24, 25, 26, 27],
            [30, 31, 32, 33, 34, 35, 36, 37],
            [40, 41, 42, 43, 44, 45, 46, 47],
            [50, 51, 52, 53, 54, 55, 56, 57],
            [60, 61, 62, 63, 64, 65, 66, 67],
            [70, 71, 72, 73, 74, 75, 76, 77]
          ];

  var all = fen.split(" "); //first get rids of the back end of the String
  //must be of length 6
  var rank = all[0].split("/"); //splits into eight ranks
  for (var i = 0; i < rank.length; i++) {
    rank[i] = rank[i].split("");
  }


}

function isUpperCase(str) {
  return str === str.isUpperCase();
}
