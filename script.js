var numberOfCorrectGuesses = 0;

var main = function (input) {
  // First step is to create a variable and assign the secretWord function to it.
  var secretWord = getSecretWord();
  var myOutputValue = "You guessed ";
  // Next step is to check if the input matches the secret word generated.
  // If it matches, then this is the 1st correct guess. Add 1 to numberOfCorrectGuesses.
  if (secretWord == input) {
    numberOfCorrectGuesses = numberOfCorrectGuesses + 1;
    myOutputValue =
      "You got it right! Number of correct guesses: " + numberOfCorrectGuesses;
  }
  // If it does not match, this is an incorrect guess. Do not add 1 to numberOfCorrectGuesses.
  if (!(secretWord == input)) {
    myOutputValue =
      "You got it wrong! Number of correct guesses: " + numberOfCorrectGuesses;
  }
  // If numberOfCorrectGuesses == 2, the player wins.
  if (numberOfCorrectGuesses == 2) {
    myOutputValue =
      "Congratulations! You have won. Number of correct guesses: " +
      numberOfCorrectGuesses;
    // If player wins the game, the game resets and numberOfCorrectGuesses goes back to 0.
    numberOfCorrectGuesses = 0;
  }
  return myOutputValue;
};

var wordGenerator = function () {
  // Generate a random number from 0 to 2.999 recurring.
  var randomDecimal = Math.random() * 3;
  // Convert the decimal numbers into integers.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to generate a random integer between 1 and 3.
  var oneToThree = randomInteger + 1;

  return oneToThree;
};

var getSecretWord = function () {
  // The default word is faucet if the RNG is 3 (i.e. 3 = faucet).
  var chosenNumber = wordGenerator();
  var chosenWord = "faucet";
  console.log("The chosen number is " + chosenNumber);
  // If the RNG is 2, the word selected will be chisel (i.e. 2 = chisel).
  if (chosenNumber == 2) {
    chosenWord = "chisel";
  }
  // If the RNG is 1, the word selected will be banana (i.e. 1 = banana)
  if (chosenNumber == 3) {
    chosenWord = "banana";
  }

  return chosenWord;
};
