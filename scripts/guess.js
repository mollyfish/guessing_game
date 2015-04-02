
(function() {
  var guesses = 1;
  var gotIt = false;
  var answer = 32;
  var guess = document.getElementById('first-guess');
  console.log(guess);
  var answer2 = 'tennessee';
  var unVisitedStates = ['nebraska', 'michigan', 'indiana', 'ohio', 'kentucky', 'oklahoma', 
                        'kansas', 'missouri', 'arkansas', 'georgia', 'florida', 'tennessee', 
                        'south carolina', 'north carolina', 'connecticut', 'west virginia', 
                        'delaware', 'new jersey'];
  var visitedStates = ['oregon', 'alaska', 'idaho', 'colorado', 'california', 'nevada', 
                      'hawaii', 'montana', 'wyoming', 'north dakota', 'south dakota', 
                      'minnesota', 'wisconsin', 'iowa', 'illinois', 'arizona', 'new mexico',
                      'utah', 'texas', 'louisiana', 'mississippi', 'alabama', 'maine', 
                      'vermont', 'new hampshire', 'rhode island', 'massachusetts', 'virginia', 
                      'maryland', 'pennsylvania','new york'];
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

  while (true) {
    if (guess === answer) {
    	alert('You got it! Molly has visited 32 states.');
      var guess2 = prompt('Molly has 18 states left to visit. Where will she go next?'+'\n\n'+toVisit).toLowerCase();
      for (var guesses = 1; guesses <= 5; guesses++) {
        if (guess2 === answer2) {
          gotIt = true
          break;
        }
        guess2 = prompt('Nope!\n\nHere\'s a hint: ' + hintList[guesses].text + '.').toLowerCase();
      }
      if (gotIt) {
        alert('You got it! It took you ' + guesses + ' guesses.');
        break;
      } else {
        alert('You didn\'t get it. Sorry! Molly will be heading for Tennessee next.');
        break;
      };
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
})();

