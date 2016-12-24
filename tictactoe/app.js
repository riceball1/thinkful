/** GLOBAL **/
var state = {
  count: 1,
  counter: 0,
  boardState: [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]
  ]
}

/** FUNCTIONS **/
function setupBoard(){
  var board = '';
  for(var i = 0; i < 3; i++) {
    board += '<span class="square" data-index="'+i+'"></span>';
  }
  $('.line-one').html(board);
  $('.line-two').html(board);
  $('.line-three').html(board);
  $('.board').removeClass('hidden');
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
}

function setupDisplays() {
  $('.turn-display').removeClass('hidden');
  $('.start').addClass('hidden');
  $('.reset').removeClass('hidden');
}

function checkBoard(state){
  var board = state.boardState;
  return checkDiagonal(board) || checkHorizontal(board) || checkVertical(board);
}

function checkDiagonal(board){
  var leftRight = (board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[1][1] != ' ');
  var rightLeft = (board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[1][1] != ' ');
  return leftRight||rightLeft;
}

function checkHorizontal(board) {
  // var times=0;
  for(var i = 0; i < 3; i++){
    // times++;
    // console.log(`ran ${times}`);
    if(board[i][0]== board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ') {
      return true;
    }
  }
  return false;
}

function checkVertical(board){
  for(var i=0; i<3; i++){
    if(board[0][i]==board[1][i] && board[1][i]==board[2][i] && board[0][i] != ' '){
      return true;
    }
  }
  return false;
}

function resetGame(state, event){
  event.preventDefault();
  var self = $(event.currentTarget);
  $('.square').text('');
  $('.turn-display').addClass('hidden');
  $('.turn-display').text("Click to a square to start playing.");
  $('.reset').addClass('hidden');
  $('.start').removeClass('hidden');
  $('.board').addClass('hidden');
  state.counter = 0;
  state.count = 1;
  state.boardState[0] = ['1', '2', '3'];
  state.boardState[1] = ['4', '5', '6'];
  state.boardState[2] = ['7', '8', '9'];
}

function updateBoardState(event) {
  event.preventDefault();
  var self = $(event.currentTarget);
  var index = $(self).attr("data-index");
  var parent = self.parent();
  var className = parent[0].className;
  var value = self.text();
  var array1 = state["boardState"][0];
  var array2 = state["boardState"][1];
  var array3 = state["boardState"][2];

  if(className === 'line-one') {
    if(index == "0"){
      array1[index] = value;
    } else if (index == "1") {
      array1[index] = value;
    } else if (index == "2") {
      array1[index] = value;
    }
  } else if (className === 'line-two') {
    if(index == "0"){
      array2[index] = value;
    } else if (index == "1") {
      array2[index] = value;
    } else if (index == "2") {
      array2[index] = value;
    }
  } else if (className === 'line-three') {
    if(index == "0"){
      array3[index] = value;
    } else if (index == "1") {
      array3[index] = value;
    } else if (index == "2") {
      array3[index] = value;
    }
  }
}
/** EVENT LISTENER **/
$('.start').on('click', function(event){
  event.preventDefault();
  setupDisplays();
  setupBoard();
});

$('.reset').on('click', function(event){
  resetGame(state, event);
});

$('.board').on('click', '.square', function(event){
  markBoard(state, event);
  state.counter++;
  updateBoardState(event);
  checkBoard(state);
  //onClick.
  // if(counter==9)// css declare tie, end game/reset button (modal)
  // if(checkBoard(board) { // css declare winner|tie, end game}

  if(state.counter == 9) {
    console.log("Game Tied!");
    setTimeout(function() { resetGame(state, event)}, 2000);
  } else if (checkBoard(state)){
    // disable clicks for the board
    console.log("There's a winner!");
    setTimeout(function() {resetGame(state, event)}, 2000);
  }


});
