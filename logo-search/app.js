"use strict";
/** DATA **/
var logoList = [
  { // 0
    education: 'k-12',
    program: 'none',
    src: 'images/aci-color.png'
  },
  { // 1
    education: 'high school',
    program: 'none',
    src: 'images/acm-color.png'
  },
  { // 2
    education: 'none',
    program: 'scholarship',
    src: 'images/afe-color.png'
  },
  { // 3
    education: 'none',
    program: 'loan',
    src: 'images/aci-color.png'
  },
  { // 4
    education: 'high school',
    program: 'scholarship',
    src: 'images/acm-color.png'
  },
  { // 5
    education: 'k-12',
    program: 'scholarship',
    src: 'images/afe-color.png'
  },
  { // 6
    education: 'k-12',
    program: 'loan',
    src: 'images/aci-color.png'
  },
  { // 7
    education: 'high school',
    program: 'scholarship',
    src: 'images/acm-color.png'
  },
  { // 8
    education: 'k-12',
    program: 'scholarship',
    src: 'images/afe-color.png'
  }
]


function searchLogos(){
  function displaySearchItem(event){
    var currentItem = $(event.currentTarget)
    var currentValue = $(currentItem).val();
    var selection = $(currentItem).text();
    var parentBtn = $(currentItem).parent().parent();
    var selectBtn = $(parentBtn)[0].childNodes[1];
    $(selectBtn).text(selection);
    $(selectBtn).attr('value', currentValue);
  }

  function displayLogos(){
    var logos = '';
    // var grayscale = logoList.match ?
    for(var i = 0; i < logoList.length; i++) {
      logos += '<img src="'+logoList[i].src+'" class="logo-image grayscale" data-program="'+ logoList[i].program +'" data-education="'+ logoList[i].education +'">';
    }
    $('.logos').html(logos);
  }

  function filterLogos(){
    var education = $('.education').val().toLowerCase();
    var program = $('.program').val().toLowerCase();
    var programType = $('.logo-image').attr('data-program');
    var educationLevel = $('.logo-image').data('education');
    $('.logo-image').addClass('grayscale');
    console.log(education);
    console.log(program);
    if(program === 'loan' || program === 'scholarship') {
      var targetProgramLogos = $('[data-program="'+ program +'"]');
      targetProgramLogos.removeClass('grayscale');
    }

    if(education === 'k-12' || education === 'high school') {
      var targetEducationLogos = $('[data-education="'+ education +'"]');
      targetEducationLogos.removeClass('grayscale');
    }




  }

  /** EVENT LISTENERS **/
  $('.dropdown-content').on('click', 'option', function(event){
    event.preventDefault();
    displaySearchItem(event);
  });

  $('.search-button').on('click', function(event){
    event.preventDefault();
    filterLogos();
    // reset the buttons to original text
    $('.education').text("EDUCATION LEVEL");
    $('.program').text("PROGRAM TYPES");
  });

  // set up logos list
  displayLogos();
}

$(document).ready(searchLogos);
