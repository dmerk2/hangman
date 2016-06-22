//alert('Guess the Word!')

var losses = 0
var wins = 0;
var userGuess = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessesLeft = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//captures key clicks
document.onkeyup = function(event) {
		
	//determines what key was selected and makes it lowercase	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
};

	//if user guesses correctly and than there is an alert		
	if (userGuess == guessesLeft) {
		alert("Winner");
		wins = wins + 1;
		$('wins').innerHTML = wins;
		$('losses').innerHTML = '';
		$('guessesLeft').innerHTML = '0';

	} else {
 		guessesLeft = guessesLeft - 1;
	 	$('guessesLeft').innerHTML = guessesLeft;
	 	$('userGuess').innerHTML += userGuess + ', ';