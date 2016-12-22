/** GLOBAL **/
var state = {
  count: 1,
  boardState: [[],[],[]]
}

/** FUNCTIONS **/
function setupBoard(){
  var board = '';
  for(var i = 1; i <= 9; i++) {
    board += '<span class="square" data-index="'+i+'"></span>';
  }
  $('.board').html(board);
}

function markBoard(state, event) {
  event.preventDefault();
  var self = $(event.currentTarget);
  var index = $(self).attr("data-index");
  var currentSquare = $(self);
  var empty = currentSquare.text() == '';
  var turnDisplay = $('.turn-display');
  // odd number
  if(empty && state.count % 2 == 0) {
    currentSquare.text('O');
    turnDisplay.text("It's X's turn.");
  // even number
  } else if (empty && (Math.abs(state.count % 2 == 1))) {
    currentSquare.text('X');
    turnDisplay.text("It's O's turn.");
  }
  state.count++;
  console.log("Counter: " + state.count);
  console.log("Current index: " + index);
}

// function that checks the board to see if there are any matches
function checkBoard() {
  // do stuff
}


function setupDisplays() {
  $('.turn-display').removeClass('hidden');
  $('.start').addClass('hidden');
  $('.reset').removeClass('hidden');
}


/** EVENT LISTENER **/

$('.start').on('click', function(event){
  event.preventDefault();
  setupDisplays();
  setupBoard();
});

$('.reset').on('click', function(event){
  // clear out everything
});

$('.board').on('click', '.square', function(event){
  markBoard(state, event);
});
