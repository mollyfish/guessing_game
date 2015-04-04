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

	var userInputTwo;
	var form2 = document.getElementById('round2-start');
	
	form2.addEventListener("click", function (event) {
		event.preventDefault();
		var userInputTwo = document.getElementById('round2-guess');
		var guess2 = userInputTwo;
		console.log('working');
		var endRoundOne = document.getElementById('round1');
		endRoundOne.setAttribute('class', 'hide-this')
		var begRoundTwo = document.getElementById('round2-question');
		begRoundTwo.setAttribute('class', 'show-this')

		playSecondRound();

		function playSecondRound() {
			console.log('working!!!')
			var guesses = 1;
  		var gotIt = false;
		  var answer2 = 'tennessee';
		  var unVisitedStates = ['nebraska', 'michigan', 'indiana', 'ohio', 'kentucky', 'oklahoma', 
                     		   'kansas', 'missouri', 'arkansas', 'georgia', 'florida', 'tennessee', 
                 		       'south carolina', 'north carolina', 'connecticut', 'west virginia', 
                    		    'delaware', 'new jersey'];
		  var visitedStates = ['oregon', 'alaska', 'idaho', 'colorado', 'california', 'nevada', 
		                      'hawaii', 'montana', 'wyoming', 'north dakota', 'south dakota', 
		                      'minnesota', 'wisconsin', 'iowa', 'illinois', 'arizona', 'new mexico',
		                      'utah', 'texas', 'louisiana', 'mississippi', 'alabama', 'maine', 
		                      'vermont', 'new hampshire', 'rhode island', 'massachusetts', 
		                      'virginia', 'maryland', 'pennsylvania','new york'];
 			var toVisit = unVisitedStates.join(', ');

		  function Hint(text) {
    	this.text = text;
 			}

 			var hint1 = new Hint('The state motto is "Agriculture and Commerce"');
		  var hint2 = new Hint('The state bird is the Mockingbird');
		  var hint3 = new Hint('The highest point in the state is Clingman\'s Dome');
		  var hint4 = new Hint('The state capitol is Nashville');
		  var hint5 = new Hint('The largest city in the state is Memphis');
		  var hintList = ['holder', hint1, hint2, hint3, hint4, hint5];
			
			for (var guesses = 1; guesses <= 5; guesses++) {
        if (guess2 === answer2) {
          gotIt = true
          break;
        }
        guess2 = prompt('Nope!\n\nHere\'s a hint: ' + hintList[guesses].text + '.').toLowerCase();
      }
      if (gotIt) {
        alert('You got it! It took you ' + guesses + ' guesses.');
        
      } else {
        alert('You didn\'t get it. Sorry! Molly will be heading for Tennessee next.');
        
      };



			}

	})
		

	//functions that should be called whenever someone hits Submit should be placed inside this event listener



	

})();