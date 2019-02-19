//Contructor function for Letter Objects takes in a char as an argument
function Letter(char){

//char
this.character = char
//guessed (t or f) intially false
this.guessed = false;
}
//prototype function that returns either the character if guessed = t or _ if guessed = f
Letter.prototype.toString = function(){
    if(this.guessed){
        return this.character;
    }
    else{
        return "_"
    }
}
//prototype function that checks if a passed char is equal to char property of the letter object, updates guessed to true if they are equal
Letter.prototype.updateGuessed = function(guess){
    if(guess === this.character){
        this.guessed = true;
    }
}
module.exports = Letter;