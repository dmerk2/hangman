var wins = '';
var losses = '';
var timeRemaining = 60;
var intervalID;
var correct = 0;
var incorrect = 0;
var guessesSoFar = 0;
var guessesLeft = 0;

$(document).ready(function(){
	$('#submitButton').click(function(){
		setTimeout(timer, 60 * 1000);
		intervalID = setInterval(showTimeLeft, 1000);
	});
});

function showTimeLeft() {
	timeRemaining--;
	$('#timer').html(timeRemaining);
		if (timeRemaining == 0) {
			clearInterval(intervalID);
		};
};


$('#wins').html(wins);
$("#losses").html(losses);
$('#guessesLeft').html(guessesLeft);
$('#guessesSoFar').html(guessesSoFar);
