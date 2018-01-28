var inquirer = require("inquirer");
var Word = require('./word.js');
var Letter = require('./letter.js');

 var sharks = ["great white", "mako","tiger","lemon","whale", "nurse"];
 var lettersOfWords = [];
 var rightWord = [];
 var incorrectLetters = [];
 var correctLetters = 0;


 //console.log(choosenWord);

function start() {
	var pcPick = Math.floor(Math.random() * sharks.length);
 	var choosenWord = sharks[pcPick];
	var lettersOfWords = choosenWord.split("");
	guessesRemaining = 9;
	console.log("     Hangman - Node style!    ");
	console.log("You are allowed " + guessesRemaining + " guesses per game.");
	console.log(lettersOfWords);

};
start();


//runs inquirer to ask player about letters

inquirer.prompt([
  {
    name: "letter",
    message: "Choose a letter that you believe is in the word" }
]).then(function(data) {
  	var newLetter = new Letter(data.letters);

 console.log(newLetter);
});







