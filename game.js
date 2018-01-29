var inquirer = require("inquirer");
var request = require('request');
var Word = require('./word.js');
var letterGuess = require('./letter.js');

 var sharks = ["great white", "mako","tiger","lemon","whale", "nurse"];
 var lettersOfWords = [];
 var rightWord = [];
 var incorrectLetters = [];
 var underScore = [];
 var correctLetters = 0;
 var choosenWord ="";
 var guessesRemaining = 9;
 var lettersOfWords = null;


 function start() {


	console.log("     Hangman - Shark Edition!    ");
	console.log("You are allowed " + guessesRemaining + " guesses per game.");
	
	var pcPick = Math.floor(Math.random() * sharks.length);
 	choosenWord = sharks[pcPick];
	lettersOfWords = choosenWord.split("");

	for (var i = 0; i < lettersOfWords.length; i++) {
		underScore.push("_");
  
	}

	 console.log("\n" +underScore.join(" "));

 };
 start();



 function checkLetters(newLetter) {

	var wordView = "";

	for (var i = 0; i < lettersOfWords.length; i++) {

      if (newLetter.letter.indexOf(lettersOfWords[i]) !== -1) {
      	wordView += lettersOfWords[i];
      	console.log(wordView);
      }
      else {
      	wordView += "_";
      }
    }
 };


inquirer.prompt([
  {
    name: "letter",
    message: "Choose a letter that you believe is in the word" }
]).then(function(data) {
  	var newLetter = new letterGuess.Letter(data.letter);
 console.log(newLetter);
checkLetters(newLetter);

});







