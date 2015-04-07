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
				var hints = document.getElementById('hints')
				hints.setAttribute('class', 'hide-this')
				var wonRound2 = document.getElementById('congrats2')
				wonRound2.setAttribute('class', 'show-this')
			} else {
				console.log('Guess again!');
				var hints = document.getElementById('hints')
				hints.setAttribute('class', 'show-this')
					if (guesses === 0) {
						var hint1 = document.getElementById('hint1')
						hint1.setAttribute('class', 'show-this')
						guesses++;
						console.log(guesses);
					} else if (guesses === 1) {
						var hint2 = document.getElementById('hint2')
						hint2.setAttribute('class', 'show-this')
						guesses++;
						console.log(guesses);
					} else if (guesses === 2) {
						var hint3 = document.getElementById('hint3')
						hint3.setAttribute('class', 'show-this')
						guesses++;
						console.log(guesses);
					} else if (guesses === 3) {
						var hint4 = document.getElementById('hint4')
						hint4.setAttribute('class', 'show-this')
						guesses++;
						console.log(guesses);
					} else if (guesses === 4) {
						var hint5 = document.getElementById('hint5')
						hint5.setAttribute('class', 'show-this')
						guesses++;
						console.log(guesses);
					} else {
						var guessForm = document.getElementById('next-state')
						guessForm.setAttribute('class', 'hide-this')
						var hideHints = document.getElementById('hints')
						hideHints.setAttribute('class', 'hide-this')
						var lostRound2 = document.getElementById('fail-msg')
						lostRound2.setAttribute('class', 'show-this')
					}
			}			
		})
	}
})();