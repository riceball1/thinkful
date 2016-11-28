"use strict";


// list of questions/answers

var quizInfo = {
	info: [
	// 1
		{
			question: "Where is tiramasu from?",
			choices: ["Italy", "France", "Libya", "Canada"],
			correct: "Italy",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"  
		},
	// 2
		{
			question: "Where are egg rolls from?",
			choices: ["Japan", "Vietnam", "China", "Singapore"],
			correct: "China",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"

		},
	// 3
		{
			question: "Where is beef stroganoff from?",
			choices: ["Ukraine", "Poland", "France", "Russia"],
			correct: "Russia",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		},
		// 4
		{
			question: "Where is cheesecake from?",
			choices: ["Italy", "France", "Greece", "Morocco"],
			correct: "Greece",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		},
		// 5
		{
			question: "Where is Danish pastry from?",
			choices: ["The Netherlands", "Iceland", "Austria", "United Kingdom"],
			correct: "Austria",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		},
		// 6
		{
			question: "Where are french fries from?",
			choices: ["France", "Belgium", "Kenya", "Ireland"],
			correct: "Belgium",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		},
		// 7
		{
			question: "Where are fajitas from?",
			choices: ["United States", "Germany", "Mexico", "Cuba"],
			correct: "United States",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		},
		// 8
		{
			question: "Where is kiwi from?",
			choices: ["New Zealand", "China", "Japan", "Laos"],
			correct: "China",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		},
		// 9
		{
			question: "Where is Chicken Tikka Masla from?",
			choices: ["India", "Nepal", "United Kingdom", "The Netherlands"],
			correct: "United Kingdom",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		},
		// 10
		{
			question: "Where are pancakes from?",
			choices: ["France", "Portugal", "Austra", "Greece"],
			correct: "Greece",
			incorrectFeedback: "You got the answer wrong!",
			correctFeedback: "You got the answer correct!"
		}
	]
}

/*FUNCTIONS */

// render question 
function displayQuestion() {
	
} 



/* EVENT LISTENERS */

$('.quiz-body-header').click(function() {
	$('.quiz-feedback').toggleClass('hidden');
});

// start quiz
$('.js-start-quiz').click(function(){
	$('.quiz-start-screen').addClass('hidden');
	$('.quiz-section').removeClass('hidden');
	// render first question when user starts quiz
});
