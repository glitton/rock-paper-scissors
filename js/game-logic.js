//Logic for Rock paper scissors game as seen here
//https://s3.amazonaws.com/codecademy-content/programs/build-apis/projects/build-apis-project-1-rock-paper-scissors-x99/project/index.html

// Twelve global variables representing each player's move types and values
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player, m1t, m2t, m3t, m1v, m2v, m3v) => {
  //m1t and m1v stands for move one type and move one value
  if (player === "Player One") {
    playerOneMoveOneType = m1t;
    playerOneMoveOneValue = m1v;
  }
};

const getRoundWinner = roundNumber => {
  //compare playerOneMove type and value with playerTwo's
};
