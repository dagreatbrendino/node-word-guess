var Letter = require("./Letter.js");
//Word constructor function that takes in a word as an argument
function Word(word){
    //create a Letter Object for each character in the word and store it in an array
    this.letters = [];
    this.word = word;
    
}
//function that calls toString for each Letter Object in the array
Word.prototype.revealedWord = function(ind){
    if(ind < this.letters.length){
       return (this.letters[ind] + " " + this.revealedWord(ind + 1));
    }
    //when we are at an index larger than the length of the word
    return "";
}
//function that builds creates a letter object for each char in the word and stores it in the array
Word.prototype.buildWord = function(ind){
    if (ind < this.word.length){
        var newLetter = new Letter(this.word.charAt(ind));
        this.letters.push(newLetter);
        this.buildWord(ind + 1);
    }
}

Word.prototype.checkLetters = function(guess){
    this.letters.forEach( function(item){
       item.updateGuessed(guess);
    });
}

var someWord = new Word("jack");

someWord.buildWord(0);

console.log(someWord.revealedWord(0));

console.log(someWord.letters);

someWord.checkLetters("l");

console.log(someWord.revealedWord(0));

console.log(someWord.letters);

someWord.checkLetters("k");
console.log(someWord.revealedWord(0));

console.log(someWord.letters);
someWord.checkLetters("j");
console.log(someWord.revealedWord(0));

console.log(someWord.letters);