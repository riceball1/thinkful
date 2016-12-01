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
	// current question --> index 
		/// counter for current question
	// correct answers
	counter: 0,
	totalCorrect: 0,
	answerChoice: 0
}


/*FUNCTIONS */

/** modifies the state **/
	// update counter
function updateCounter() {
	state.counter++;
	// console.log(state.counter);
}

	// update correct answers


/** renders state **/

// renders questions
function displayQuestion(state, data, element) {
	// determine which quiz to render
	var curIndex = state.counter;

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
			itemsHTML += '<li data-index =' + i + '>'+ choiceList[i] +'</li><br>';
		}	    
		 element.html(itemsHTML);
		} 
	// if all questions are finished run this
	else {
		$('.quiz-section').addClass('hidden');
		$('.track-status').addClass('hidden');
		$('.try-again-section').removeClass('hidden');
	}
	
} 


// resets all data and starts quiz from beginning
function startAgain(state, data) {


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
	// data-index to determine which answer was chosen
	var answer = $(this).attr("data-index");
	// add css styling for chosen answer
	$(this).css('background-color', '#56D262');
	// update the counter
	updateCounter();
	// display answers
	

	// if answer correct
	/// add correct answer score
	if( answer === quizInfo[answer]["correct"]) {
		state.totalCorrect += 1;
		console.log(state.totalCorrect);
	}
	

	// display next question
	setTimeout(function() {
		displayQuestion(state, quizInfo, $('.multiple-choices'));
	}, 900);

});


// remove submit option
// $('.js-submit-answer').on('click', function() {
// 	// update the counter each time an answer is submitted
// 	updateCounter();
// 	// then displayCorrect Answer
// 	// displayCorrectAnswer();
// 	// render next question
// 	displayQuestion(state, quizInfo, $('.multiple-choices'));
// 	// 
// });


$('.js-try-again').on('click', function() {
	// reset quiz
	// startAgain(state, quizInfo);
	window.location.reload(true);

});
