"use strict";

function tweeterList() {
  console.log("Document is ready!");
  /** API **/

  /** need a twitter authorization access **/

  var TWITTER_BASE_URL = 'http://search.twitter.com/search.json?';
  var GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2?parameters';

  /**
  Google Translate API: AIzaSyAtJKvopaIjH35PWmSG8yuDv65u94bvwxg
  Twitter API:
  NikTLag7fpTj0yW7xU7k0neWL

  **/


  function getDataFromTwitter(searchTerm) {
    var settings = {
      url: TWITTER_BASE_URL +
    	$.param(searchTerm),
      dataType: 'jsonp',
      success: function (data) {
      	console.dir(data);
      }
    };
    $.ajax(settings);
  }

  // function displayTwitterData(data) {
  // 	console.dir(data);
  // }



  /** EVENT LISTENERS**/

  // watch for enter in keyword
  $('input[type="text"').on('keypress', function(event){
  	if(event.keyCode == 13) {
  		event.preventDefault();
  		var keyword = { q: $(event.currentTarget).val() };
      console.log("Keyword: ", keyword);
  		$('.tweet-list').removeClass('hidden');
  		getDataFromTwitter(keyword);
  	}
  });

   // watch for translate
   // getDataFromGoogleTranslate()

}

$(document).ready(tweeterList);
