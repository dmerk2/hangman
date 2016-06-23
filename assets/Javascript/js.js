$(document).ready(function){

alert('Guess the Word!')

//variables
var words = ['Sublime', 'ACDC', 'Rolling Stones', 'Green Day']
var intervalId;
var lettersCorrect = [];
var lettersIncorrect = [];
var timeRemaining = 120 * 1000;
var losses = 0;
var wins = 0;
var userGuess = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessesLeft = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//captures key clicks
document.onkeyup = function(event) {
		
	//determines what key was selected and makes it lowercase	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//Start timer
	setTimeout(timer, 120 * 1000);
	intervalId = setInterval(showTimeLeft, 1000);

};

	//if user guesses correctly and than there is an alert		
	if (userGuess === wins) {
		alert("Winner");
		wins = wins + 1;
		$('wins').html = wins;
		$('losses').html = '';
		$('guessesSoFar').html = '0';

	} else {
 		guessesSoFar = guessesSoFar - 1;
	 	$('guessesSoFar').html = guessesSoFar;
	 	$('userGuess').html += userGuess + ', ';
	};
    
    //when link is refreshed other links are still there
    $(".refresh_link").click(function(){
     window.location="#";
	

	//end time remaining
	function showTimeLeft(){
		timeRemaining--;
		$('#timer').html(timeRemaining);
	if (timeRemaining === 0){
		clearInterval(intervalId);
	alert('Try again?')

	};
  };
};
 	