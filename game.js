//npm packages
var inquirer = require("inquirer");
var request = require('request');

//modules
var Word = require('./word.js');
var letterGuess = require('./letter.js');

//array of words to loop through
 var sharks = ["great white", "mako","tiger","lemon","whale", "nurse"];

 //variables to manipulate 
 var lettersOfWords = [];
 var rightWord = [];
 var incorrectLetters = [];
 var underScore = [];
 var correctLetters = 0;
 var choosenWord ="";
 var guessesRemaining = 9;
 var lettersOfWords = null;

// function on how to start the game
 function start() {

	console.log("     Hangman - Shark Edition!    ");
	console.log("You are allowed " + guessesRemaining + " guesses per game.");
	
	//randomly picks word from array
	var pcPick = Math.floor(Math.random() * sharks.length);
 	choosenWord = sharks[pcPick];

 	//splits the letters within the choosen word.
	lettersOfWords = choosenWord.split("");
	// loops through the letters of the choosen word and pushes an underscore in.
	for (var i = 0; i < lettersOfWords.length; i++) {
		underScore.push("_");
  
	}

	 console.log("\n" +underScore.join(" "));

 };
 start();

 function checkLetters(newLetter) {
 	
	var wordView = "";
	// loop through the letter of words
	for (var i = 0; i < lettersOfWords.length; i++) {
		// if the new letter is within the letter of words
      if (newLetter.letter.indexOf(lettersOfWords[i]) !== -1) {
      	wordView += lettersOfWords[i];
      	// display the word view with the correct letter showing in between the underscores
      	console.log(wordView += "\n" +underScore.join(" ") );
      }
      else {
 
      }
    }
 };

// the prompt the runs in the command line 
inquirer.prompt([
  {
    name: "letter",
    message: "Choose a letter that you believe is in the word" }
]).then(function(data) {
	//function used for when the person enters a letter.
  	var newLetter = new letterGuess.Letter(data.letter);
 console.log(newLetter);
checkLetters(newLetter);

});







