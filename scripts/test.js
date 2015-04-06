(function() {

	Element.prototype.prependChild = function(child) { //Googled to find this - sweet!
		this.insertBefore(child, this.firstChild); 
	}; 

	var elFirstButton = document.getElementById('play-now');

	elFirstButton.onclick = startRoundOne;

	function startRoundOne() {	
		var roundOne = document.getElementById('round1-question');
		roundOne.setAttribute('class', 'show-this')
		var playButton = document.getElementById('play-now');
		playButton.setAttribute('class', 'hide-this')
	}

	var userInputOne;
	var form = document.getElementById('round1-button');
	form.addEventListener("click", function (event) {
		event.preventDefault();
		var userInputOne = Number.parseInt(document.getElementById('round1-guess').value);
		var guess = userInputOne;

		function hide51() {
			var over50 = document.getElementById('51+'); //0
			over50.setAttribute('class', 'hide-this')
		}
		function hide37() {
			var over36 = document.getElementById('>=37'); //1
			over36.setAttribute('class', 'hide-this')
		}
		function hide33() {
			var over32 = document.getElementById('>=33'); //2
			over32.setAttribute('class', 'hide-this')
		}
		function hide27() {
			var over28 = document.getElementById('>=27'); //3
			over28.setAttribute('class', 'hide-this')
		}
		function hide26() {
			var less27 = document.getElementById('<27'); //4
			less27.setAttribute('class', 'hide-this')
		}
		function hideInvalid() {
			var invalidAns = document.getElementById('invalid1'); //5
			invalidAns.setAttribute('class', 'hide-this')
		}
		playFirstRound();

		function playFirstRound() {
			var answer = 32;
  		while (true) {
    		if (guess === answer) {
    			var wonRound1 = document.getElementById('congrats1');
					wonRound1.setAttribute('class', 'show-this')
					hide51();
					hide37();
					hide33();
					hide27();
					hide26();
					hideInvalid();
    			break;
	    	} else if (guess >= 51) {
	    		var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'show-this')
					hide37();
					hide33();
					hide27();
					hide26();
					hideInvalid();
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess >= 37) {  
	    		var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'show-this')
					hide51();
					hide33();
					hide27();
					hide26();
					hideInvalid();
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess >= 33) {
	    		var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'show-this')
					hide51();
					hide37();
					hide27();
					hide26();
					hideInvalid();
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess >= 27) {   
	    		var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'show-this')
					hide51();
					hide37();
					hide33();
					hide26();
					hideInvalid();
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess < 27) {
	    		var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'show-this')
					hide51();
					hide37();
					hide33();
					hide27();
					hideInvalid();
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else {
	    		var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'show-this')
					hide51();
					hide37();
					hide33();
					hide27();
					hide26();
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	  		};
  		};
  	} //end function playFirstRound
	}) //end event listener

	var elSecondButton = document.getElementById('round2-start');
	elSecondButton.onclick = startRoundTwo;

	function startRoundTwo() {
		var endRoundOne = document.getElementById('round1');
		endRoundOne.setAttribute('class', 'hide-this')
		var begRoundTwo = document.getElementById('round2-question');
		begRoundTwo.setAttribute('class', 'show-this')
	}

	var userInputTwo;
	var form2 = document.getElementById('round2-button1');
	var counter = 1;

	for (var guesses = 1; guesses <=5; guesses++) {
		stateGuess();
	};

	function stateGuess() {
		form2.addEventListener("click", function (event) {
			//this is when it needs to go get the new guess
			event.preventDefault();
			var userInputTwo = document.getElementById('round2-guess1').value;
			var guess2 = userInputTwo;
			document.getElementById('next-state').reset();

			function Hint(text) {
		    this.text = text;
		  }

		  var hint1 = new Hint('The state motto is "Agriculture and Commerce"');
			var hint2 = new Hint('The state bird is the Mockingbird');
			var hint3 = new Hint('The highest point in the state is Clingman\'s Dome');
			var hint4 = new Hint('The state capitol is Nashville');
			var hint5 = new Hint('The largest city in the state is Memphis');
			var hintList = ['holder', hint1, hint2, hint3, hint4, hint5];

			function displayHint() {
				console.log(counter);
				var hintToShow = '<p>Nope, here\'s a hint:</p><p>' + hintList[counter].text + '</p>';
				console.log(hintToShow);
				var shownHint = document.getElementById('hintbox')
				shownHint.setAttribute('class', 'show-this')
				document.getElementById('hintbox').innerHTML = hintToShow;
				console.log(counter + 'started doing stuff. hint:' + hintToShow);
			}
			playSecondRound();
			function playSecondRound() {
				var answer2 = 'tennessee';	
	    		if (guess2 === answer2) {
	    			var wonRound2 = document.getElementById('congrats2');
						wonRound2.setAttribute('class', 'show-this')
		    	} else {
		    		displayHint();
		    		counter++;
		    		console.log(counter);
		    			if (counter >5) {
		    				var shownHint = document.getElementById('hintbox')
								shownHint.setAttribute('class', 'hide-this')
		    				var lostRound2 = document.getElementById('fail-msg');
								lostRound2.setAttribute('class', 'show-this')
		    			}
		    	}
		  }
		})
	}
})();