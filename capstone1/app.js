"use strict";

function tweeterList() {
  console.log("Document is ready!");
  /** API **/

  /** need a twitter authorization access **/

  var TWITTER_BASE_URL = 'https://api.twitter.com/1.1/search/tweets.json?';
  var GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2?parameters';

  /**
  Google Translate API: AIzaSyAtJKvopaIjH35PWmSG8yuDv65u94bvwxg
  Twitter API:
  NikTLag7fpTj0yW7xU7k0neWL

  **/

  function getDataFromTwitter(searchTerm, callback) {
    var settings = {
      url: TWITTER_BASE_URL,
      param: {
    	q: searchTerm
    	// result_type: 'recent'
      },
      dataType: 'jsonp',
    	// key: 'NikTLag7fpTj0yW7xU7k0neWL',
      // type: 'GET',
      success: callback
    };
    $.ajax(settings);
  }

  function displayTwitterData(data) {
  	console.dir(data);
  }



  /** EVENT LISTENERS**/

  // watch for enter in keyword
  $('input[type="text"').on('keypress', function(event){
  	if(event.keyCode == 13) {
  		event.preventDefault();
  		var keyword = $(event.currentTarget).val();
  		$('.tweet-list').removeClass('hidden');
  		getDataFromTwitter(keyword, displayTwitterData);
  	}
  });

   // watch for translate
   // getDataFromGoogleTranslate()

}

$(document).ready(tweeterList);
