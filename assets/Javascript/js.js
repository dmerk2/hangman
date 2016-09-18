
//ADDED EACH WORD IN SEPERATE ARRAY
var words = [["pink floyd"], ["rolling stones"], ["sublime"], ["red hot chilli peppers"], ["led zeppelin"]];
var alphabet = [];          //letters in the word we are trying to solve   ['t', 'i', 'l', 't']
var userGuess = [];         //letters user has guessed                     ['i']
var partialSolution = []; //fill it in as the user guesses correctly       ['_', '_', '_', '_']
var wins = 0;
var losses = 0;
var timeRemaining = 0;
var intervalID;
var correct = 0;
var incorrect = 0;
var guessesSoFar = 0;
var guessesLeft = 0;
var gameIsRunning = 0;

//When submitButton is click timer will start
//document.ready will wait until ALL files are fully downloaded and running
//before it starts execution.  This means any functions in other files
//any HTML that needs to load, and any functions in THIS file below here
//will already be fully loaded before this starts to run
// (aka. this is the LAST thing to happen)
$(document).ready(function(){


	$('#submitButton').click(function(){

		if (gameIsRunning == 0) {
			startGame();
		}

		guessesSoFar++;
		guessesLeft--;

		//if the letter the user guessed is in alphabet, we need to remove it from alphabet and put into partialSolution

		if (userGuess == alphabet) {
			partialSolution--
		}


		//if all the letters in alphaet are underscores
		//	wins++
		//  stopGame();
		//}
		
		if (guessesLeft == 0) {
			//if user losses the Losses HTML will add 1
			losses++;
			stopGame();
		}
		updateStats();
	});
});



	//MAKING DASHES????
	// for(var i = 0; i<length.words; i++) {

	// }


// ---- HELPER FUNCTIONS GO BELOW THIS LINE ----

function startGame(){			
	gameIsRunning = 1;

	//setTimeout(timer, 5 * 1000); //this runs "timer" after 5 seconds
	timeRemaining = 10;
	guessesLeft = 9;
	guessesSoFar = 0;
	userGuess = [];

	var wordPicked = words[Math.floor(Math.random()*words.length)];
	console.log("hint: picked " + wordPicked);
	//NOW you use a for loop to put wordPicked into the alphabet array
	
	for(var i=0; i<wordPicked.length; i++)
	{
		alphabet[i] = wordPicked[i];
		partialSolution[i] = '_';
	}
	console.log("Alphabet array: " + alphabet);
	console.log("Partial solution: " + partialSolution);

	intervalID = setInterval(showTimeLeft, 1000); //this runs "showTimeLeft" every 1 second


};

function stopGame(){
	clearTimeout(intervalID);
	gameIsRunning = 0;

}

//time counter going down by 1 second
function showTimeLeft() {
	timeRemaining--;
	$('#timer').html(timeRemaining);
	
	if (timeRemaining == 0) {

		stopGame();

		losses++;
		//when clock hits 0 alert game over pops up
    	alert('game over!')
	}
};

function updateStats() {
	$('#wins').html(wins);
	$("#losses").html(losses);
	$('#guessesSoFar').html(guessesSoFar);
	$('#guessesLeft').html(guessesLeft);
	
};

  

