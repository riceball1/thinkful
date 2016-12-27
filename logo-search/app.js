"use strict";
/** DATA **/
var logoList = [
  { // 0
    education: 'k-12',
    program: '',
    id: 0,
    src: 'images/aci-color.png'
  },
  { // 1
    education: 'high school',
    program: '',
    id: 1,
    src: 'images/acm-color.png'
  },
  { // 2
    education: '',
    program: 'scholarship',
    id: 2,
    src: 'images/afe-color.png'
  },
  { // 3
    education: '',
    program: 'loan',
    id: 3,
    src: 'images/aci-color.png'
  },
  { // 4
    education: 'high school',
    program: 'scholarship',
    id: 4,
    src: 'images/acm-color.png'
  },
  { // 5
    education: 'k-12',
    program: 'scholarship',
    id: 5,
    src: 'images/afe-color.png'
  },
  { // 6
    education: 'k-12',
    program: 'loan',
    id: 6,
    src: 'images/aci-color.png'
  },
  { // 7
    education: 'high school',
    program: 'loan',
    id: 7,
    src: 'images/acm-color.png'
  },
  { // 8
    education: 'k-12',
    program: 'scholarship',
    id: 8,
    src: 'images/afe-color.png'
  }
]


function searchLogos(){
  function displaySearchItem(event){
    var currentItem = $(event.currentTarget);
    var currentValue = $(currentItem).val();
    var selection = $(currentItem).text();
    var parentBtn = $(currentItem).parent().parent();
    var selectBtn = $(parentBtn)[0].childNodes[3];
    console.log(selectBtn);
    $(selectBtn).text(selection);
    $(selectBtn).attr('value', currentValue);
  }

  function displayLogos(){
    var logos = '';
    // var grayscale = logoList.match ?
    for(var i = 0; i < logoList.length; i++) {
      logos += '<img src="'+logoList[i].src+'" class="logo-image grayscale" data-id="'+
      logoList[i].id +'">';
    }
    $('.logos').html(logos);
  }

  function filterLogos(){
    var education = $('.education').val().toLowerCase();
    var program = $('.program').val().toLowerCase();
    var results = logoList;
    if(education !== 'search all' || education == '') {
      results = results.filter(function(logo){
        return logo.education == education
      });
    }
    if(program !== 'search all' || program == '' ) {
      results = results.filter(function(logo){
        return logo.program == program
      });
    }
    colorLogos(results)
  }

  function colorLogos(coloredLogosArray){
      $('.logo-image').addClass('grayscale');
      for(var i = 0; i < coloredLogosArray.length; i++){
        var targetLogos = $('[data-id="'+ coloredLogosArray[i].id +'"]');
        targetLogos.removeClass('grayscale');
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
  });
  displayLogos();   // set up logos list
}

$(document).ready(searchLogos);
