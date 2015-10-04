function solve() {
  var CONSTANTS = {
    MIN_RANDOM_VALUE: 1,
    MAX_RANDOM_VALUE: 10,
    LEN: 4
  },
    highScore = [],
    numberToBeGuess = '';

  function getRandomInt() {
    return Math.floor(Math.random() * (CONSTANTS.MAX_RANDOM_VALUE - CONSTANTS.MIN_RANDOM_VALUE)) + CONSTANTS.MIN_RANDOM_VALUE;
  }


  function init(playerName, endCallback) {
    /*
 Starts a new game
 Generates a new number
 playerName is the name of the player in the high-score
 endCallback is a function that must be called when the game ends (the player wins)
 It is called after the high-score is updated
    */

    var i,
      j, jLen,
      currentDigit,
      isSame;

    //numberToBeGuess += getRandomInt();

    for (i = 0; i < CONSTANTS.LEN; i += 1) {
      currentDigit = getRandomInt();
      isSame = false;
      for (j = 0, jLen = numberToBeGuess.length; j < jLen; j += 1) {
        if (currentDigit == +numberToBeGuess[j]) {
          isSame = true;
          break;
        }
      }

      if (isSame) {
        i -= 1;
      } else {
        numberToBeGuess += currentDigit;
      }
    }

    console.log(numberToBeGuess);
  }

  function guess(number) {
    var guessedDigits = {},
      sheep = 0,
      rams = 0,
      i,
      digitIndex;
    
    /*
    Available only after init() is invoked
    Should throw otherwise
    The player makes a guess agains the number
    Returns as a result an object in the format:
    { sheep: 3, rams: 1 }
    */

    number = number.toString();

    if (!numberToBeGuess) {
      throw Error('First invoke init function!');
    }

    for (i = 0; i < CONSTANTS.LEN; i += 1) {
      digitIndex = numberToBeGuess.indexOf(number[i]);

      if (digitIndex == i) {
        rams += 1;
      } else if (digitIndex != -1) {
        sheep += 1;
      }
    }

    guessedDigits = { sheep: sheep, rams: rams };

    return guessedDigits;
  }

  function getHighScore(count) {
    /*
    Returns the top count players of the high-score
    If count is greater than the total count of players in the high-score, return the actual number of player in the high-score
    The returned players are returned in an array, where each player is in the format:
    {name: 'Sheep master', score: 5}
    */


  }

  return {
    init, guess, getHighScore
  }
}

//module.exports = solve;

var m = solve();
m.init();
m.guess(1234);
