"use strict";


/* DATA */

var quizInfo = [
	// 1
		{
			question: "Where is tiramisu from?",
			choices: ["Italy", "France", "Libya", "Canada"],
			// Italy
			correct: 0,
			src: "images/tiramisu.jpg"
		},
	// 2
		{
			question: "Where are egg rolls from?",
			choices: ["Japan", "China", "Vietnam", "Singapore"],
			// China
			correct: 1,
			src: "images/egg-rolls.jpg"

		},
	// 3
		{
			question: "Where is beef stroganoff from?",
			choices: ["Ukraine", "Poland", "France", "Russia"],
			// Russia
			correct: 3,
			src: "images/beef-stroganoff.jpg"
		},
		// 4
		{
			question: "Where is cheesecake from?",
			choices: ["Italy", "France", "Greece", "Morocco"],
			// Greece
			correct: 2,
			src: "images/cheesecake.jpg"
		},
		// 5
		{
			question: "Where is Danish pastry from?",
			choices: ["The Netherlands", "Iceland", "Austria", "United Kingdom"],
			// Austria
			correct: 2,
			src: "images/danish-pastry.jpg"
		},
		// 6
		{
			question: "Where are french fries from?",
			choices: ["France", "Belgium", "Kenya", "Ireland"],
			// Belgium 
			correct: 1,
			src: "images/french-fries.jpg"
		},
		// 7
		{
			question: "Where are fajitas from?",
			choices: ["United States", "Germany", "Mexico", "Cuba"],
			// USA
			correct: 0, 
			src: "images/fajitas.jpg"
		},
		// 8
		{
			question: "Where is kiwi from?",
			choices: ["New Zealand", "China", "Japan", "Laos"],
			// China
			correct: 1,
			src: "images/kiwi.jpg"
		},
		// 9
		{
			question: "Where is Chicken Tikka Masla from?",
			choices: ["India", "Nepal", "United Kingdom", "The Netherlands"],
			// United Kingdom
			correct: 2,
			src: "images/chicken-tikka-masala.jpg"
		},
		// 10
		{
			question: "Where are pancakes from?",
			choices: ["France", "Portugal", "Austra", "Greece"],
			// Greece
			correct: 3,
			src: "images/pancakes.jpg"
		}
	]

// things that change all the time
var state = {
	currentQuestionIndex: 0,
	totalCorrect: 0
}


/*FUNCTIONS */

/** modifies the state **/

function updateCurrentQuestionIndex() {
	state.currentQuestionIndex++;
}

function updateTotalCorrect() {
	state.totalCorrect++;
}

/** renders state **/

function displayQuestion(state, data, element) {
	// determine which quiz to render
	var curIndex = state.currentQuestionIndex;

	// if questions are still running
	if(curIndex < 10) {
			// add question to header
		$('.quiz-body-header h1').html(data[curIndex].question);

		// display current question number
		$('.quiz-number').html(curIndex + 1);

		// add image to header
		$('.question-image').attr('src', data[curIndex].src);

		// add multiple choices
		var itemsHTML = "";
		var choiceList = data[curIndex].choices;
		for(var i = 0; i < choiceList.length; i++) {
			itemsHTML += '<li class="choice" data-index =' + i + '>'+ choiceList[i] +'</li>';
		}	    
		 element.html(itemsHTML);
		} 
	// if all questions are finished run this
	else {
		$('.quiz-section').addClass('hidden');
		$('.track-status').addClass('hidden');
		$('.try-again-section').removeClass('hidden');
		if(state.totalCorrect > 9) {
			$('.correct-answers').html("<h1>Score: " + state.totalCorrect +"/" + quizInfo.length +"</h1>" + "<p>Great Job! You really are a food expert!</p>");
		} else if(state.totalCorrect > 7) {
			$('.correct-answers').html("<h1>Score: " + state.totalCorrect +"/" + quizInfo.length +"</h1>" + "<p>Not bad! Let's eat more food to improve our score!</p>");
		} else {
			$('.correct-answers').html("<h1>Score: " + state.totalCorrect +"/" + quizInfo.length +"</h1>" + "<p>Awww.. looks like someone needs to do a food tour around the world. Maybe next time you'll get your score higher.</p>");
		}
		
	}
	
} 


// resets all data and starts quiz from beginning
function startAgain(state) {
 // hide try-again
 $('.try-again-section').addClass('hidden');
 // zero out state
 state.currentQuestionIndex = 0;
 state.totalCorrect = 0;
 // unhide quiz-start screen
 $('.quiz-start-screen').removeClass('hidden');

}

/* EVENT LISTENERS */


// start quiz
$('.js-start-quiz').click(function(){
	$('.quiz-start-screen').addClass('hidden');
	$('.quiz-section').removeClass('hidden');
	$('.track-status').removeClass('hidden');
	// render first question when user starts quiz
	displayQuestion(state, quizInfo, $('.multiple-choices'));
});

// click on answer choice
/// then show correct/incorrect answers
/// move user to next question
$('.multiple-choices').on('click', 'li', function(event) {
	// disabled clicking of other choices
	$('.choice').prop("disabled", true);
	// data-index to determine which answer was chosen
	var answer = $(this).attr("data-index");
	var correctAnswer = quizInfo[state.currentQuestionIndex].correct;
	if( answer == correctAnswer) {
		updateTotalCorrect();
		// green for correct answer
		$(this).css('background-color', '#57D256');
	} else {
		// highlight incorrect answer
		// E63663 = red
		$(this).css('background-color', '#E63663');
		// #57D256 = green
	}
	
	// find correct answer and highlight green
	// $(this).parent().children().eq(correctAnswer).css('background-color', '#57D256');
	var selectItem = "[data-index='"+correctAnswer+"']";
	$(selectItem).css('background-color', '#57D256');

	// update the counter
	updateCurrentQuestionIndex();

	setTimeout(function() {
		displayQuestion(state, quizInfo, $('.multiple-choices'));
	}, 900);

});


$('.js-try-again').on('click', function() {
	startAgain(state);
});
