"use strict";

var state = {
  searchTerm: '',
  tweetLimit: '10',
  tweetsArray: []
};

function tweeterList() {
  var TWITTER_BASE_URL = 'https://morning-ravine-82145.herokuapp.com/';
  var YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

  function searchTwitter() {
    state.searchTerm = $('#twitter-keyword-entry').val();;
    state.tweetLimit = $('#limitTweeterItems').val();
    if(state.tweetLimit > 0) {
      state.tweetLimit = tweetLimit;
    } else {
      // set default tweetLimit
      state.tweetLimit = 3;
    }
    $('.tweet-list').removeClass('hidden');
    $('.tools').removeClass('hidden');
  }

  function getDataFromTwitter(searchTerm) {
    $.ajax({
      url: TWITTER_BASE_URL + searchTerm,
      dataType: 'jsonp',
      success: function(data) {
        displayTweetData(data);
      },
      type: 'GET'
    });
  }

  function displayTweetData(data) {
    var resultElement = '';
    if(data.statuses.length == 0) {
        resultElement += "<p>Search did not find anything.</p>";
      } else {
    for(var i = 0; i < state.tweetLimit; i++) {
        var individualTweets = data.statuses[i];
        var tweetText = individualTweets.text;
        var language = individualTweets.metadata.iso_language_code;
        var userInfo = individualTweets.user;
        state.tweetsArray.push(tweetText);

        var author = userInfo.name;
        var username = userInfo.screen_name;
        var avatar = userInfo.profile_image_url;
        var timestamp = userInfo.created_at;
        var tweetLink = individualTweets.id_str;

        resultElement += '<div class="individual-tweets"' + 'data-lang="' + language + '" data-index="' + i +'">'
        + '<div class="authorInfo"><img src="' + avatar + '" class="avatar">' + '<span class="authorName">'+ author +' </span>' + '<span class="authorHandle">@' + username+ ' </span></div>' + '<div class="tweetContent"><p class="tweetText">'+ tweetText + '</p><a class="js-toggle-languages action"> Toggle Original/Translated Language </a> <a href="https://twitter.com/intent/tweet?text='+tweetText+'" class="twitter-share-button action"> Tweet </a>'+ '  <a href="https://www.twitter.com/statuses/'+ tweetLink +'" target="_blank" class="action"> View on Twitter </a>' +'<p class="timestamp">' + timestamp + '</p></div></div>';
      }
    }
    $('.individual-tweets-list').html(resultElement);
  }

  function getDataFromYandex(text, language, index) {
    $.ajax({
      url: YANDEX_TRANSLATE_URL,
      dataType: 'json',
      data:{
          key: 'trnsl.1.1.20161212T153919Z.2c641cfa919addd2.4255914407af1a02e8559664527d9d96260beeca',
          lang: language,
          text: text,
      },
      success: function(data){
        displayYandexData(data,index);
      },
      type: 'GET',
      ui: language,
      format: "html",
      error: function(error) {
        console.log(this.url)
        console.log(error);
      }
    });
  }

  function displayYandexData(data, index) {
      var tweetResponse = data.text[0];  //translated text
      $('.tweetText:eq('+index+')').html(tweetResponse);
  }

  /** EVENT LISTENERS**/
  // watch for click on submit button
  $('.js-submit-search').on('click', function(event) {
      event.preventDefault();
  		searchTwitter();
  		getDataFromTwitter(state.searchTerm);
  });
  // watch for enter on keyword
  $('.js-submit-search').on('keypress', function(event) {
    if(event.key === 13) {
      event.preventDefault();
      searchTwitter();
      getDataFromTwitter(state.searchTerm);
    }
  });

  // select language and immediately translate all tweets
  $('.dropdown-content').on('click', 'option', function(event) {
      var language = $(this).val();
      var languageName = $(this).text();
      $('.language-choice').css('display', 'inline-block');
      $('.language-choice').html(languageName);
      for(var i= 0; i < state.tweetLimit; i++) {
        var text = state.tweetsArray[i];
        getDataFromYandex(text, language, i);
      }
  });
  function toggleLanguages(data){
    console.log("Hello");
    console.log(data);
  }
  // toggle original/translated language
  $('.js-toggle-languages').on('click', function(event){
    event.preventDefault();
    toggleLanguages(data);
  });
}

$(document).ready(tweeterList);
