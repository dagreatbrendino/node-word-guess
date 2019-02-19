var Word = require("./Word.js");
var inquirer = require("inquirer");
var current;
var words = ["word", "someword", "anotherword"];
var guesses = 8;
//picks a random word from the words array 
var pickWord = function(){
    var index = Math.round(Math.random() * (words.length - 1));
    current = new Word(words[index]);
    current.buildWord(0);
    console.log(current.revealedWord(0));
}

var getGuess = function(revealed){
    //if there are guesses remaining and the word has not been fully guessed 
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        }
    ]).then(function(answer){
        //check to see if the guess is in the letter
        current.checkLetters(answer.guess);
        var displayWord = current.revealedWord(0);
        //if the display word has not been changed
        if (revealed === displayWord){
            guesses --;
            console.log("Incorrect guess!\n" + guesses + " guesses remaining");
        }
        console.log(current.revealedWord(0));
        //if there are no more guesses remaining
        if (guesses === 0){
            console.log("You ran out of guesses! The word was " + current.word);
            gameOver()
        }
        //if there are no more letters to reveal
        else if (displayWord.indexOf("_") === -1){
            console.log("You got the word!");
            gameOver()
        }
        //allow for another guess
        else{
            getGuess(current.revealedWord(0));
        }        
    })
    
}
var gameOver = function(){
    inquirer.prompt([
        {
        type: "confirm",
        name: "play",
        message: "Do you want to play again? "
        }
    ]).then(function(ans){
        if (ans.play === true){
            guesses = 8;
            pickWord();
            getGuess(current.revealedWord(0));
        }
    })

}
pickWord();
getGuess(current.revealedWord(0));