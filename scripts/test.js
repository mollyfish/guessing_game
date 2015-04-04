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

		playFirstRound();

		function playFirstRound() {
			var answer = 32;
  		while (true) {
    		if (guess === answer) {
    			var wonRound1 = document.getElementById('congrats1');
					wonRound1.setAttribute('class', 'show-this')
					var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'hide-this')
					var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'hide-this')
					var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'hide-this')
					var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'hide-this')
					var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'hide-this')
					var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'hide-this')
    			break;
	    	} else if (guess >= 51) {
	    		var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'show-this')
					var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'hide-this')
					var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'hide-this')
					var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'hide-this')
					var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'hide-this')
					var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'hide-this')
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess >= 37) {  
	    		var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'show-this')
					var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'hide-this')
					var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'hide-this')
					var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'hide-this')
					var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'hide-this')
					var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'hide-this')
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess >= 33) {
	    		var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'show-this')
					var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'hide-this')
					var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'hide-this')
					var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'hide-this')
					var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'hide-this')
					var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'hide-this')
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess >= 27) {   
	    		var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'show-this')
					var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'hide-this')
					var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'hide-this')
					var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'hide-this')
					var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'hide-this')
					var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'hide-this')
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else if (guess < 27) {
	    		var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'show-this')
					var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'hide-this')
					var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'hide-this')
					var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'hide-this')
					var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'hide-this')
					var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'hide-this')
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	    	} else {
	    		var invalidAns = document.getElementById('invalid1');
					invalidAns.setAttribute('class', 'show-this')
					var over50 = document.getElementById('51+');
					over50.setAttribute('class', 'hide-this')
					var over36 = document.getElementById('>=37');
					over36.setAttribute('class', 'hide-this')
					var over32 = document.getElementById('>=33');
					over32.setAttribute('class', 'hide-this')
					var over28 = document.getElementById('>=27');
					over28.setAttribute('class', 'hide-this')
					var less27 = document.getElementById('<27');
					less27.setAttribute('class', 'hide-this')
					guess = Number.parseInt(document.getElementById('round1-guess').value);
					break;
	  		};
  		};
  	} //end function playFirstRound
	}) //end event listener

	var elSecondButton = document.getElementById('round2-start');
	elSecondButton.onclick = startRoundTwo;

	function Hint(text) {
    this.text = text;

  }
  var hint1 = new Hint('The state motto is "Agriculture and Commerce"');
  var hint2 = new Hint('The state bird is the Mockingbird');
  var hint3 = new Hint('The highest point in the state is Clingman\'s Dome');
  var hint4 = new Hint('The state capitol is Nashville');
  var hint5 = new Hint('The largest city in the state is Memphis');
  var hintList = ['holder', hint1, hint2, hint3, hint4, hint5];

	function startRoundTwo() {
		var endRoundOne = document.getElementById('round1');
		endRoundOne.setAttribute('class', 'hide-this')
		var begRoundTwo = document.getElementById('round2-question');
		begRoundTwo.setAttribute('class', 'show-this')
	}

	var userInputTwo;
	var form2 = document.getElementById('round2-button');
	
	form2.addEventListener("click", function (event) {
		event.preventDefault();
		var userInputTwo = document.getElementById('round2-guess').value;
		var guess2 = userInputTwo;

		playSecondRound();

		function playSecondRound() {
			var answer2 = 'tennessee';
			var counter = 0;
  		while (true) {
  			
    		if (guess2 === answer2) {
    			var wonRound2 = document.getElementById('congrats2');
					wonRound2.setAttribute('class', 'show-this')
    			break;
	    	} else {
	    		counter++;
	    		console.log(counter);
	    			if (counter > 5){
	    				var lostRound2 = document.getElementById('fail-msg');
							lostRound2.setAttribute('class', 'show-this')
							var shownHint = document.getElementById('hintbox')
	    				shownHint.setAttribute('class', 'hide-this')
							break;
	    			}
	    		function displayHint() {
	    			var hintToShow = '<p>' + hintList[counter].text + '</p>';
	    			console.log(hintToShow);
	    			var shownHint = document.getElementById('hintbox')
	    			shownHint.setAttribute('class', 'show-this')
	    			document.getElementById('hintbox').innerHTML = hintToShow;
	    		}
	    		displayHint();
	    		

	    	};	/*else {
	    		var lostRound2 = document.getElementById('fail-msg');
					lostRound2.setAttribute('class', 'show-this')
					break;
				};*/
			};
		}
	})
		

	//functions that should be called whenever someone hits Submit should be placed inside this event listener



	

})();