(function() {

	Element.prototype.prependChild = function(child) { //Googled to find this - sweet!
		this.insertBefore(child, this.firstChild); 
	}; 

	var elFirstButton = document.getElementById('play-now');
	elFirstButton.onclick = startRoundOne;

	function startRoundOne() {	
		var newSection = document.createElement('section');
		var position = document.getElementsByTagName('main')[0];
		position.prependChild(newSection);

		var newH3 = document.createElement('h3');
		newH3.textContent = 'How many states has Molly visited?';
		var position = document.getElementsByTagName('section')[0];
		position.prependChild(newH3);

		var newForm = document.createElement('form');
		var position = document.getElementsByTagName('section')[0];
		position.appendChild(newForm);
		newForm.setAttribute('name', 'visited-states')

		var newLabel = document.createElement('label');
		newLabel.textContent = 'Put your guess here: ';
		var position = document.getElementsByTagName('form')[0];
		position.appendChild(newLabel);
		newLabel.setAttribute('type', 'text')

		var newInput = document.createElement('input');
		var position = document.getElementsByTagName('form')[0];
		position.appendChild(newInput);
		newInput.setAttribute('id', 'first-guess')
		newInput.setAttribute('name', 'first-guess')
		newInput.setAttribute('placeholder', '50')
		newInput.setAttribute('maxlength', '2')
		newInput.setAttribute('size', '4')

		var newButton = document.createElement('button');
		newButton.textContent = 'Submit';
		var position = document.getElementsByTagName('form')[0];
		position.appendChild(newButton);
		newButton.setAttribute('id', 'second-button')

		var elFirstInput = document.getElementById('second-button');
		elFirstInput.onclick = playFirstRound;
		
		/*var oldButton = document.getElementById('play-now');
		var oldContainer = oldButton.parentNode;
		oldContainer.removeChild(oldButton);*/
	}

	

	function playFirstRound() {
		var answer = 32;
		var guess = Number.parseInt(prompt('How many states has Molly visited?'));
  	
  	while (true) {
    	if (guess === answer) {

    		
	    	alert('You got it! Molly has visited 32 states.');
	    	break;
	    } else if (guess >= 51) {
	      guess = Number.parseInt(prompt('Ummm, how many states are there, again?'));
	    } else if (guess >= 37) {  //guess is within 5
	      guess = Number.parseInt(prompt('Nice try, but Molly\'s nowhere near that well traveled.'));
	    } else if (guess > answer) {
	      guess = Number.parseInt(prompt('So close! Molly hasn\'t been to that many states yet.'));
	    } else if (guess >= 27) {  //guess is within 5
	      guess = Number.parseInt(prompt('So close! Molly has been to more states than that.'));
	    } else if (guess < 27) {
	      guess = Number.parseInt(prompt('Guess again, Molly has been to waaaaay more states than that.'));
	    } else {
	      guess = Number.parseInt(prompt('I didn\'t understand your answer. Please try again.'));
	  	};
  	};
  }

})();