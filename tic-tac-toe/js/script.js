function startGame () {
  for (var i = 1; i <=9; i++) {
  clearSquares(i);
  }
  document.turn="X";
  if (Math.random() <0.5) {
    document.turn = "O";
  }
  document.winner = null
  setMessage(document.turn + " gets to start.");
}

function setMessage (msg) {
  document.getElementById("messages").innerText = msg;
}
//var xWins = 0
//var oWins = 0
//var draws = 0
//function updateScoreboard () {
//document.getElementById("scoreboard").innerText = "X: "+ xWins + " O: " + oWins + " Draws: " + draws
//} if (document.winner = X) {
//    xWins == +1;
//}   else if (document.winner = O) {
//    oWins == +1;
//}   else (checkforTie = true)
//    draws == +1;

//updateScoreboard();


function nextMove(square) {
  if (document.winner !== null) {
      setMessage(document.winner + " has already won the game.");
  } else if (square.innerText == "") {
      square.innerText = document.turn;
      switchTurn();
  } else {
   setMessage("That square is no longer available.");
 }
}

function switchTurn() {
  if (checkWinner(document.turn)) {
      setMessage(document.turn + " wins!");
      startGame();
  } else if (checkforTie()) {
    setMessage("It's a Draw!");
    startGame();
  } else if (document.turn == "X") {
      document.turn = "O";
      setMessage("It's " + document.turn + "'s turn.");
  } else {
      document.turn = "X";
      setMessage("It's " + document.turn + "'s turn.");
  }
}

function checkWinner(move) {
  var result = false;
  if (checkRow(1,2,3, move) ||
      checkRow(4,5,6, move) ||
      checkRow(7,8,9, move) ||
      checkRow(1,4,7, move) ||
      checkRow(2,5,8, move) ||
      checkRow(3,6,9, move) ||
      checkRow(1,5,9, move) ||
      checkRow(3,5,7, move)) {
      result = true;
  }
return result;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getSquare(a) == move && getSquare(b) == move && getSquare(c) == move) {
  result = true;
  }
return result;
}

function checkforTie() {
  for (var i=1; i <10; i++) {
    if(getSquare(i) == "")
  return false;
  }
return true;
}

function getSquare(number) {
  return document.getElementById("s" + number).innerText;
}

function clearSquares(number) {
  document.getElementById("s" + number).innerText = "";
}
