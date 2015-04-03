(function() {

	Element.prototype.prependChild = function(child) { //Googled to find this - sweet!
		this.insertBefore(child, this.firstChild); 
	};

	var elOne = document.getElementById('round1-guess');
	elOne.onclick = doIt;

	function doIt() {	
		var newSection = document.createElement('section');
		newSection.textContent = 'you did it!'
		var position = document.getElementsByTagName('main')[0];
		position.prependChild(newSection);

}

})();