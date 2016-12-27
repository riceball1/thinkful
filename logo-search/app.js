function searchLogos(){
  function displaySearchItem(event){
    var currentItem = $(event.currentTarget)
    var selection = $(currentItem).val();
    var parentBtn = $(currentItem).parent().parent();
    var selectBtn = $(parentBtn)[0].childNodes[1];
    $(selectBtn).text(selection);
  }

  /** EVENT LISTENERS **/
  $('.dropdown-content').on('click', 'option', function(event){
    event.preventDefault();
    displaySearchItem(event);
    // send selectBtn info to a function that will do a filter
    // and color the logos that match the query
  });

  $('.search-button').on('click', function(event){
    event.preventDefault();
    var inputValues = $('.dropbtn').text();
    console.log(inputValues);
  });
}

$(document).ready(searchLogos);
