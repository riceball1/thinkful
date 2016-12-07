"use strict";

function tweeterList() {

$('input[type="text"').on('keypress', function(event){
	if(event.keyCode == 13) {
		event.preventDefault();
		console.log($(event.currentTarget).val());
	}
	
});

}

$(document).ready(tweeterList);