// create a variable (array) that will hold all the guesses (what was in $("#submit").val())
// when guessesLeft hits zero, we stop the game. when the game stops. do an alert
// if guessesLeft is zero and the user hits submit, do a startGame() (already done?)
// createa  word list
// reach: try to pick a random word, then turn it into an array of characters
// (google: javascript turn string into array of chars)

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var timeRemaining = 60;
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

		
		if (guessesLeft == 0) {
			stopGame();
		}
		updateStats();
	});
});

// ---- HELPER FUNCTIONS GO BELOW THIS LINE ----

function startGame(){			
	gameIsRunning = 1;
	setTimeout(timer, 60 * 1000);
	intervalID = setInterval(showTimeLeft, 1000);

	guessesLeft = 9;
	guessesSoFar = 0;
};

function stopGame(){
	clearTimeout(intervalID);
	gameIsRunning = 0;
}

//time counter going down by 1 second
function showTimeLeft() {
	timeRemaining--;
	$('#timer').html(timeRemaining);
	if (timeRemaining === 0) {
			//when clock hits 0 alert game over pops up
      	alert('game over!')
	
    	stopGame(); //instead, we should set gameIsRunning back to 0 and disable the timer
	}
};

function updateStats() {
	$('#wins').html(wins);
	$("#losses").html(losses);
	$('#guessesLeft').html(guessesLeft);
	$('#guessesSoFar').html(guessesSoFar);

};


  

