//Create array of letters in alphabet
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Randomly generate a number to select an element of the array
var compSelect = compChoices[Math.floor(Math.random()*compChoices.length)];

//Log to console for testing, remove this later
console.log(compSelect);

//Set variables and initial values, and print to screen
var w = 0;
var l = 0;
var gl = 9;

// Create counter for manual push to array (didn't use)
// var counter = 0;

//Create empty array to keep all user guesses
var guessArray = [];

//Print starting points to the screen
document.getElementById("wins").innerHTML = w;
document.getElementById("losses").innerHTML = l;
document.getElementById("guessRemain").innerHTML = gl;

//Listen for user input
document.onkeyup = function(event) {
    
    //Determine what key was pressed
    var userGuess = event.key;

    //Put guess into array
    guessArray.push(" " + userGuess);

    // A manual way of pushing to an array that I didn't use
    // guessArray[counter] = userGuess
    // counter ++;

    //Put the guesses into id guessSoFar on the screen
    document.getElementById("guessSoFar").innerHTML = guessArray;
    
    //Check to see if there are any guesses remaining
    if (gl > 1){

        //Run if/else to see if correct guess, add points to win or lose score
        if (userGuess === compSelect){
            w++;
            alert("You got it!  +1 Win!  Want to play again?  I'm thinking of a different letter now.  You'll start over with 9 guesses.");
            //computer picks another letter
            compSelect = compChoices[Math.floor(Math.random()*compChoices.length)];
            //Log to console for testing, remove this later
            console.log(compSelect);
            gl = 9;
            //Clear array of guesses
            guessArray = [];
            //Show cleared array on screen
            document.getElementById("guessSoFar").innerHTML = guessArray;
        }
        else{
            gl--;
            alert("Aww, nope... -1 Guess");
        }

        //Update all scores
        document.getElementById("wins").innerHTML = w;
        document.getElementById("losses").innerHTML = l;
        document.getElementById("guessRemain").innerHTML = gl;
    }
    else{
        alert("Aww, nope... that was your last guess... Want to play again?  I'm thinking of a different letter now.  You'll start over with 9 guesses.")
        gl = 9;
        l++;
        //Update all scores
        document.getElementById("wins").innerHTML = w;
        document.getElementById("losses").innerHTML = l;
        document.getElementById("guessRemain").innerHTML = gl;
        //computer picks another letter
        compSelect = compChoices[Math.floor(Math.random()*compChoices.length)];
        //Log to console for testing, remove this later
        console.log(compSelect);
        //Clear array of guesses
        guessArray = [];
        //Show cleared array on screen
        document.getElementById("guessSoFar").innerHTML = guessArray;
    }

}
