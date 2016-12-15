"use strict";

function tweeterList() {
  console.log("Document is ready!");
  var TWITTER_BASE_URL = 'https://morning-ravine-82145.herokuapp.com/';
  var YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

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
        + '<div class="authorInfo"><img src="' + avatar + '" class="avatar">' + '<span class="authorName">'+ author +' </span>' + '<span class="authorHandle">@' + username+ ' </span></div>' + '<div class="tweetContent"><p class="tweetText">'+ tweetText + '</p><span class="timestamp">' + timestamp +'<a href="https://twitter.com/intent/tweet?text='+tweetText+'" class="twitter-share-button">Tweet</a></div></div>';
      }
    }
    $('.individual-tweets-list').html(resultElement);
  }

  function getDataFromYandex(text, language, callback) {
    console.log(text);
    $.ajax({
      url: YANDEX_TRANSLATE_URL,
      dataType: 'json',
      data:{
          key: 'trnsl.1.1.20161212T153919Z.2c641cfa919addd2.4255914407af1a02e8559664527d9d96260beeca',
          lang: language,
          text: text,
      },
      success: callback,

      type: 'GET',
      ui: language,
      format: "html",
      success: callback,
      error: function(error) {
        console.log(this.url)
        console.log(error);
      }
    });
  }

  function displayYandexData(data) {
    // for(var i = 0; i < tweetLimit; i++) {
      var tweetResponse = data.text[0];  //translated text. 
      state.originalTweetText = tweetResponse;
      console.log(tweetResponse);
      $('.tweetText:first').html(state.tweetText);
    // }
  }

  function searchTwitter(word, limitTweetAmount) {
      state.searchTerm = word;
      if(limitTweetAmount > 0) {
        state.tweetLimit = limitTweetAmount;
      } else {
        // set default tweetLimit
        state.tweetLimit = 10;
      }
      $('.tweet-list').removeClass('hidden');
      $('.tools').removeClass('hidden');
}

// create a place for the data to be held
  var state = {
    searchTerm: '',
    language: 'en',
    tweetLimit: '10',
    originalTweetText: ''
  };

  /** EVENT LISTENERS**/

  // watch for click on submit button
  $('.js-submit-search').on('click', function(event) {
      event.preventDefault();
      var word = $('#twitter-keyword-entry').val();
      var keyword = { q: word };
      var limitTweetAmount = $('#limitTweeterItems').val();
  		searchTwitter(word, limitTweetAmount);
  		getDataFromTwitter(keyword, displayTweetData);
  });

  // watch for enter on keyword
  $('.js-submit-search').on('keypress', function(event) {
    if(event.key === 13) {
      event.preventDefault();
      var word = $('#twitter-keyword-entry').val();
      var keyword = { q: word };
      var limitTweetAmount = $('#limitTweeterItems').val();
      searchTwitter(word, limitTweetAmount);
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
    state.language = '';
    var text = $('.tweetText:first').text();
    var language = state.language;
    getDataFromYandex(text, language, displayYandexData);
  });

  // // add modal feature to selected tweet
  // $('.individual-tweets-list').on('click', '.individual-tweets', function() {
  //   $(this).toggleClass('modal-content');
  //   $('.overlay').toggleClass('hidden');
  //   // $(this).attr('contentEditable', true);
  // });

}

$(document).ready(tweeterList);
