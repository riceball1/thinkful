var BASE_URL = 'https://morning-ravine-82145.herokuapp.com/something';

function getDataFromApi(callback) {
  var settings = {
    url: BASE_URL,
    dataType: 'jsonp',
    type: 'GET',
    success: callback,
    crossdomain: true
  };
  $.ajax(settings);
}

function displaySearchData(data) {
  console.log(data);
}


$('.btn').click(function() {
  getDataFromApi(displaySearchData);
});
