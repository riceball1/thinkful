"use strict";

function tweeterList() {
  console.log("Document is ready!");
  var TWITTER_BASE_URL = 'https://morning-ravine-82145.herokuapp.com/';
  var YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json/detect?';

  function getDataFromTwitter(searchTerm, callback) {
    $.ajax({
      url: TWITTER_BASE_URL + $.param(searchTerm),
      dataType: 'jsonp',
      success: callback,
      type: 'GET'
    });
  }

  function displayTweetData(data) {
    var resultElement = '';
    console.log(data);
    if(data.statuses.length == 0) {
        console.log("Search did not find anything.");
        resultElement += "<p>Search did not find anything.</p>";
      } else {
    for(var i = 0; i < state.tweetLimit; i++) {
        var individualTweets = data.statuses[i];
        var userInfo = individualTweets.user;
        var author = userInfo.name;
        var username = userInfo.screen_name;
        var avatar = userInfo.profile_image_url;
        var timestamp = userInfo.created_at;
        var utc_offset = userInfo.utc_offset;
        var time_zone = userInfo.time_zone;
        var tweetText = individualTweets.text;
        var language = individualTweets.metadata.iso_language_code;
        resultElement += '<div class="individual-tweets"' + 'data-lang="' + language + '" data-index="' + i +'">'
        + '<div class="authorInfo"><img src="' + avatar + '" class="avatar">' + '<span class="authorName">'+ author +'</span>' + '<span class="authorHandle">@' + username+ '</div>' + '<div class="tweetText">'+ tweetText + '<span class="timestamp">' + timestamp +'<i class="fa fa-twitter" aria-hidden="true"></i></div></div>';
      }
    }
    $('.individual-tweets-list').html(resultElement);
  }

  function getDataFromYandex(text, language, callback) {
    $.ajax({
      // url: YANDEX_TRANSLATE_URL+ "&key=" + this.key + "&text=" + this.text + "&lang=" + this.lang,
      // dataType: 'jsonp',
      // key: 'trnsl.1.1.20161212T153919Z.2c641cfa919addd2.4255914407af1a02e8559664527d9d96260beeca',
      // success: callback,
      // text: text,
      // type: 'POST',
      // lang: language,
      // error: function(e) {
      //   console.log(e);
      // }
      url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20140720T191145Z.05605441c6ee16dc.eaaf6c6c8690cb5fb094cea2bfec4f787af6170c&lang=ru&text=C%27est+la+question',
      dataType: "jsonp",
      success: function (data) {
        console.log(data);
      }
    });
  }

  function displayYandexData(data) {
    console.log(data);
  }

// create a place for the data to be held
  var state = {
    searchTerm: '',
    language: 'en',
    tweetLimit: '10'
  };

  /** EVENT LISTENERS**/

  // watch for click on submit button
  $('.js-submit-search').on('click', function(event) {
  		event.preventDefault();
      var word = $('#twitter-keyword-entry').val();
  		var keyword = { q: word };
      // keep searchTerm in state
      state.searchTerm = word;
      var limitTweetAmount = $('#limitTweeterItems').val();
      console.log(limitTweetAmount);
      if(limitTweetAmount > 0) {
        state.tweetLimit = limitTweetAmount;
      } else {
        // set default tweetLimit
        state.tweetLimit = 10;
      }
      console.log("Keyword: ", keyword);
      console.log(word);
  		$('.tweet-list').removeClass('hidden');
      $('.tools').removeClass('hidden');
  		getDataFromTwitter(keyword, displayTweetData);
  });

  // watch for enter on keyword
  $('.js-submit-search').on('keypress', function(event) {
    if(event.key === 13) {
      event.preventDefault();
      var word = $('#twitter-keyword-entry').val();
      var keyword = { q: word };
      // keep searchTerm in state
      state.searchTerm = word;
      var limitTweetAmount = $('#limitTweeterItems').val();
      console.log(limitTweetAmount);
      if(limitTweetAmount > 0) {
        state.tweetLimit = limitTweetAmount;
      } else {
        // set default tweetLimit
        state.tweetLimit = 10;
      }
      console.log("Keyword: ", keyword);
      console.log(word);
      $('.tweet-list').removeClass('hidden');
      getDataFromTwitter(keyword, displayTweetData);
    }
  });

  // select language to translate tweets
  $('.dropdown-content').on('click', 'option', function(event) {
      var lang = $(this).val();
      var langName = $(this).text();
      state.language = lang;
      console.log(state.language);
      $('.language-choice').html(langName);

  });

  $('.translate-me').click(function() {
    var text = $('.original-text').text();
    var language = 'ru';
    getDataFromYandex(text, language, displayYandexData);
  });

}

$(document).ready(tweeterList);
