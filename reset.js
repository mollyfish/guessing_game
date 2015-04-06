(function() {
	makeAGuess();
	
	function makeAGuess() {
	var userInputOne;
	var guess2;	
	var guesses = 0;
	var answer2 = 'tennessee';
	var form = document.getElementById('round2-button');
	
		form.addEventListener("click", function (event) {

			event.preventDefault();
			var userInputOne = (document.getElementById('round2-guess').value).toLowerCase();
			var guess2 = userInputOne;
			console.log(userInputOne);
			document.getElementById('next-state').reset();

			if (guess2 === answer2) {
				console.log('You win!');
				var guessForm = document.getElementById('next-state')
				guessForm.setAttribute('class', 'hide-this')
			} else {
				console.log('You lose!');
				guesses++;
				console.log(guesses);
			}

			if (guesses > 4) {
				var guessForm = document.getElementById('next-state')
				guessForm.setAttribute('class', 'hide-this')
			}
		})

	}
})();