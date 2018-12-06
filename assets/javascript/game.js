/* tracking variables */
var wins;
var loses;
var guesses_left;
var guesses_count;
var win_count;
var userGuess;

/* List random array */
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("winsText");
var losesText = document.getElementById("losesText");
var guesses_left = document.getElementById("guesses_left");
var guesses_count = document.getElementById("guesses_count");
var win_count = document.getElementById("win_count");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the word to Guess.
    var wordToGuest = letters[Math.floor(Math.random() * letters.length)];

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === wordToGuest) {
        guesses_count++;
        win_count++;
        userGuess.textContent = "You chose: " + userGuess;
        else if (userGuess === wordToGuest) {
            guesses_count++;
            loses++;

        }

        // Display the user and computer guesses, and wins/losses/ties.

        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
    }
};