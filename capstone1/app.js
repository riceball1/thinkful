"use strict";

function tweeterList() {

/** API **/

var TWITTER_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: YOUTUBE_BASE_URL,
    data: {
      q: searchTerm,
      part: 'snippet',
      key: 'AIzaSyAuB6kqL52NjpIT8qi8y1MasDE5OXcjz7g'
    }, 
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}

function displayData() {
	console.log("Display Data");
}



/** EVENT LISTENERS**/

$('input[type="text"').on('keypress', function(event){
	if(event.keyCode == 13) {
		event.preventDefault();
		var keyword = $(event.currentTarget).val();
		$('.tweet-list').removeClass('hidden');
		getDataFromApi(keyword, displayData);
	}
});

}

$(document).ready(tweeterList);