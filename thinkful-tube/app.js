var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

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

function displaySearchData(data) {
  var resultElement = '';
  for(var i = 0; i < (data.items).length; i++) {
    var item = data.items[i];
    var dataInfo = item.snippet;
    var src = dataInfo.thumbnails.medium.url;
    var kind = item.id.kind;
    if(kind == "youtube#video") {
      var videoId = item.id.videoId;
      resultElement += '<div class="items"><a href="https://www.youtube.com/watch?v='+ videoId +'" target="_blank"><img src="'+ src +'" class="thumbnails"></a>' + '</div>';
    } else if (kind == "youtube#channel") {
      var channelId = dataInfo.channelId;
      resultElement += '<div class="items"><a href="https://www.youtube.com/channel/'+ channelId +'" target="_blank"><img src="'+ src +'" class="thumbnails"></a>' + '</div>';
    } 
  }
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    if(query.length > 0) {
      resultElement = '';
      getDataFromApi(query, displaySearchData);
    } else {
      alert("Please type something to begin search");
    }
  });
}

$(function(){watchSubmit();});
