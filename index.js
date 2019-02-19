var Word = require("./Word.js");
var inquirer = require("inquirer");
var current;
var words = ["word", "someword", "anotherword"];
//picks a random word from the words array 
var pickWord = function(){
    var index = Math.round(Math.random() * (words.length - 1));
    current = new Word(words[index]);
    current.buildWord(0);
}

var getGuess = function(){
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        }
    ]).then(function(answer){
        current.checkLetters(answer.guess);
        console.log(typeof answer.guess)
        console.log(current.letters);
        console.log(current.revealedWord(0));
        getGuess();
    })
    
}
pickWord();
getGuess();