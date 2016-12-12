"use strict";

function tweeterList() {
  console.log("Document is ready!");
  var TWITTER_BASE_URL = 'https://morning-ravine-82145.herokuapp.com/';
  var YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';

  function getDataFromTwitter(searchTerm, callback) {
    $.ajax({
      url: TWITTER_BASE_URL + $.param(searchTerm),
      dataType: 'jsonp',
      success: callback,
      type: 'GET'
    });
  }

  function displayTweetData(data, lengthToDisplay=10) {
    var resultElement = '';
    for(var i = 0; i < lengthToDisplay; i++) {
        // do stuff here to render onto html
    }
    $('.individual-tweets-list').html(resultElement);
  }

  function getDataFromYandex(text, callback) {
    $.ajax({
      url: YANDEX_TRANSLATE_URL,
      dataType: 'jsonp',
      key: 'trnsl.1.1.20161212T153919Z.2c641cfa919addd2.4255914407af1a02e8559664527d9d96260beeca',
      success: callback,
      type: 'GET'
    });
  }


// create a place for the data to be held
  var state = {
    searchTerm: ''
  };

  /** EVENT LISTENERS**/

  // watch for enter in keyword
  $('input[type="text"').on('keypress', function(event){
    // watches for 'enter'
  	if(event.keyCode == 13) {
  		event.preventDefault();
      var word = $(event.currentTarget).val();
  		var keyword = { q: word };
      // keep searchTerm in state
      state.searchTerm = word;
      console.log("Keyword: ", keyword);
      console.log(word);
  		$('.tweet-list').removeClass('hidden');
      // clears the results when doing a new search
      resultElement = '';
  		getDataFromTwitter(keyword, displayTweetData);
  	}
  });

  $('.translator').click(function() {
    var text = $('.js-google-translate')[0].innerText;
    console.log(text);
  });

}

$(document).ready(tweeterList);
