"use strict";

function tweeterList() {
  console.log("Document is ready!");
  

  var TWITTER_BASE_URL = 'https://morning-ravine-82145.herokuapp.com/';
  var YANDEX_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2?parameters';


  function getDataFromTwitter(searchTerm, callback) {
    $.ajax({
      url: TWITTER_BASE_URL + $.param(searchTerm),
      dataType: 'jsonp',
      success: callback,
      type: 'GET'
    });
  }

  function displayTwitterData(data) {
    // get data into state
    for(var i = 0; i < 5; i++) {
      console.log(data.statuses[i]);
  }
    
  function getDataFromYandex(text, callback) {
    $.ajax({
      url: YANDEX_TRANSLATE_URL,
      dataType: 'jsonp',
      success: callback,
      type: 'GET'
    });
  }




  }





  /** EVENT LISTENERS**/

  // watch for enter in keyword
  $('input[type="text"').on('keypress', function(event){
  	if(event.keyCode == 13) {
  		event.preventDefault();
  		var keyword = { q: $(event.currentTarget).val() };
      console.log("Keyword: ", keyword);
  		$('.tweet-list').removeClass('hidden');
  		getDataFromTwitter(keyword, displayTwitterData);
  	}
  });

   // watch for translate
   // getDataFromGoogleTranslate()

}

$(document).ready(tweeterList);
