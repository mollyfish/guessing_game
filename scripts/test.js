(function() {

	Element.prototype.prependChild = function(child) { //Googled to find this - sweet!
		this.insertBefore(child, this.firstChild); 
	}; 

	var elFirstButton = document.getElementById('play-now');
	var userInputOne;
	var form = document.getElementById('round1-button');

	elFirstButton.onclick = startRoundOne;

	function startRoundOne() {	
		var roundOne = document.getElementById('round1-question');
		roundOne.setAttribute('class', 'show-this')
		var playButton = document.getElementById('play-now');
		playButton.setAttribute('class', 'hide-this')
	}

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		userInputOne = Number.parseInt(document.getElementById('round1-guess').value);
		var guess = userInputOne;
		console.log(guess);
		playFirstRound;

		function playFirstRound() {
			console.log('begun');
			var answer = 32;
			//var guess = userInputOne;
  		while (true) {
    		if (guess === answer) {
    			console.log('working');
	    	} else if (guess >= 51) {
	      	guess = Number.parseInt(prompt('Ummm, how many states are there, again?'));
	    	} else if (guess >= 37) {  //guess is within 5
	      	guess = Number.parseInt(prompt('Nice try, but TOO HIGH.'));
	    	} else if (guess >= 33) {
	      	guess = Number.parseInt(prompt('So close, but TOO HIGH.'));
	    	} else if (guess >= 27) {  //guess is within 5
	      	guess = Number.parseInt(prompt('So close, but TOO LOW.'));
	    	} else if (guess < 27) {
		      guess = Number.parseInt(prompt('Guess again, Molly has been to waaaaay more states than that.'));
	    	} else {
	      	guess = Number.parseInt(prompt('I didn\'t understand your answer. Please try again.'));
	  		};
  		};
  	}
	})



	//functions that should be called whenever someone hits Submit should be placed inside this event listener



	

})();