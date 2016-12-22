/** FUNCTIONS **/
function setupBoard(){
  var board = '';
  for(var i = 1; i <= 9; i++) {
    board += '<p class="square" data-index="'+i+'"></p>';
  }
  $('.board').html(board);
}


/** EVENT LISTENER **/

$('.start').on('click', function(event){
  event.preventDefault();
  setupBoard();
});

$('.board').on('click', '.square', function(event){
  event.preventDefault();
  var index = $(this).attr("data-index");
  var currentSquare = $(this);
  if(currentSquare.text() == '') {
    currentSquare.text('X');
  }
});


// each index should record whether there is an X or O
