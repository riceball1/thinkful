/** GLOBAL **/
var state = {
  counter: 0,
  boardState: [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
  ],
  gameStatus: "started"
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
  var self = $(event.currentTarget);
  var index = $(self).attr("data-index");
  var currentSquare = $(self);
  var empty = currentSquare.text() == '';
  var turnDisplay = $('.turn-display');

  if(empty) {
      if(state.counter % 2 !== 0) { // odd number
      currentSquare.text('O');
      turnDisplay.text("It's X's turn.");
    } else { // even number
      currentSquare.text('X');
      turnDisplay.text("It's O's turn.");
    }
  }
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
  for(var i = 0; i < 3; i++){
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
  state.gameStatus = "started";
  state.boardState = [
      [" "," "," "],
      [" "," "," "],
      [" "," "," "]
    ];
}

function updateBoardState(event) {
  event.preventDefault();
  var self = $(event.currentTarget);
  var index = $(self).attr("data-index");
  var parent = self.parent();
  var className = parent[0].className;
  var value = self.text();

  if(className === 'line-one') {
    state.boardState[0][index] = value;
  } else if (className === 'line-two') {
    state.boardState[1][index] = value;
  } else if (className === 'line-three') {
    state.boardState[2][index] = value;
  }
}
/** EVENT LISTENER **/
$('.start').on('click', function(event){
  event.preventDefault();
  setupDisplays();
  setupBoard();
});

$('.reset').on('click', function(event){
  event.preventDefault();
  resetGame(state, event);
});

$('.board').on('click', '.square', function(event){
  event.preventDefault();
  if(state.gameStatus != "ended") {
    markBoard(state, event);
    state.counter++;
    updateBoardState(event);
    var checkState = checkBoard(state);
    if(state.counter == 9 && !checkState) {
      $('.turn-display').text('Game Tied!');
      state.gameStatus = "ended";
      setTimeout(function() { resetGame(state, event)}, 2000);
    }

    if (checkState){
      var currentPlayer = $(event.currentTarget).text();
      $('.turn-display').text('The winner is '+ currentPlayer);
      state.gameStatus = "ended";
      setTimeout(function() {resetGame(state, event);}, 2000);
    }
  }
});
