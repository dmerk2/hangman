//alert('Guess the Word!')

var intervalId;
var lettersCorrect = [];
var lettersInCorrect = [];
var timeRemaining = 60;
var losses = 0;
var wins = 0;
var userGuess = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessesLeft = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//captures key clicks
document.onkeyup = function(event) {
		
	//determines what key was selected and makes it lowercase	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//Start timer
	setTimeout(timer, 60 * 1000);
	intervalId = setInterval(showTimeLeft, 1000);

};

	//if user guesses correctly and than there is an alert		
	if (userGuess == guessesSoFar) {
		alert("Winner");
		wins = wins + 1;
		$('wins').innerHTML = wins;
		$('losses').innerHTML = '';
		$('guessesSoFar').innerHTML = '0';

	} else {
 		guessesSoFar = guessesSoFar - 1;
	 	$('guessesSoFar').innerHTML = guessesSoFar;
	 	$('userGuess').innerHTML += userGuess + ', ';

	//end time remaining
	function showTimeLeft(){
		timeRemaining--;
		$('#timer').html(timeRemaining);
	if (timeRemaining === 0){
		clearInterval(intervalId);

	};
};
	