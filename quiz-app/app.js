"use strict";


/* DATA */

var quizInfo = [
	// 1
		{
			question: "Where is tiramisu from?",
			choices: ["Italy", "France", "Libya", "Canada"],
			// Italy
			correct: 0,
			src: "https://i.ytimg.com/vi/om_c_HHoYHc/maxresdefault.jpg"
		},
	// 2
		{
			question: "Where are egg rolls from?",
			choices: ["Japan", "China", "Vietnam", "Singapore"],
			// China
			correct: 1,
			src: "http://www.thelittlekitchen.net/wp-content/uploads/2011/12/jadens-egg-rolls-6.jpg"

		},
	// 3
		{
			question: "Where is beef stroganoff from?",
			choices: ["Ukraine", "Poland", "France", "Russia"],
			// Russia
			correct: 3,
			src: "http://www.finecooking.com/cms/uploadedimages/Images/Cooking/Articles/Issues_111-120/051115062-01-classic-beef-stroganoff-recipe_xlg.jpg"
		},
		// 4
		{
			question: "Where is cheesecake from?",
			choices: ["Italy", "France", "Greece", "Morocco"],
			// Greece
			correct: 2,
			src: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2009/4/23/0/64372_Giadas-Dessert_s4x3.jpg"
		},
		// 5
		{
			question: "Where is Danish pastry from?",
			choices: ["The Netherlands", "Iceland", "Austria", "United Kingdom"],
			// Austria
			correct: 2,
			src: "https://static1.squarespace.com/static/54fd0599e4b056e886645788/551e5906e4b06a5b2a86dbbd/551e5940e4b07f2b9a26a46a/1428052288327/Danish+Pastry3.jpg"
		},
		// 6
		{
			question: "Where are french fries from?",
			choices: ["France", "Belgium", "Kenya", "Ireland"],
			// Belgium 
			correct: 1,
			src: "http://www.livescience.com/images/i/000/086/534/original/french-fries.jpg?interpolation=lanczos-none&fit=inside%7C660:*"
		},
		// 7
		{
			question: "Where are fajitas from?",
			choices: ["United States", "Germany", "Mexico", "Cuba"],
			// USA
			correct: 0, 
			src: "http://www.cheatsheet.com/wp-content/uploads/2015/12/mexican-food-beef-fajitas-and-bell-peppers1.jpg?b6542f"
		},
		// 8
		{
			question: "Where is kiwi from?",
			choices: ["New Zealand", "China", "Japan", "Laos"],
			// China
			correct: 1,
			src: "http://listsurge.com/wp-content/uploads/2015/08/kiwi.jpg"
		},
		// 9
		{
			question: "Where is Chicken Tikka Masla from?",
			choices: ["India", "Nepal", "United Kingdom", "The Netherlands"],
			// United Kingdom
			correct: 2,
			src: "http://rasamalaysia.com/wp-content/uploads/2016/03/chicken-tikka-masala-thumb.jpg"
		},
		// 10
		{
			question: "Where are pancakes from?",
			choices: ["France", "Portugal", "Austra", "Greece"],
			// Greece
			correct: 3,
			src: "https://redtricom.files.wordpress.com/2013/03/pancakes-1.jpg"
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
		$('.try-again-section').removeClass('hidden');
	}
	
} 

function displayCorrectAnswer() {

}

// resets all data and starts quiz from beginning
function startAgain() {

}

/* EVENT LISTENERS */


// start quiz
$('.js-start-quiz').click(function(){
	$('.quiz-start-screen').addClass('hidden');
	$('.quiz-section').removeClass('hidden');
	// render first question when user starts quiz
	displayQuestion(state, quizInfo, $('.multiple-choices'));
});

// click on answer choice
$('.multiple-choices').on('click', 'li', function(event) {
	// data-index to determine which answer was chosen
	var index = $(this).attr("data-index");



});



$('.js-submit-answer').on('click', function() {
	// update the counter each time an answer is submitted
	updateCounter();
	// then displayCorrect Answer
	// displayCorrectAnswer();
	// render next question
	displayQuestion(state, quizInfo, $('.multiple-choices'));
	// 
});


$('.try-again').on('click', function() {
	// reset quiz
	startAgain(state, quizInfo);
});
