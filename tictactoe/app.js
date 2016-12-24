/** GLOBAL **/
var state = {
  count: 1,
  counter: 0,
  boardState: [
    ["","",""],
    ["","",""],
    ["","",""]
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


/** EVENT LISTENER **/

$('.start').on('click', function(event){
  event.preventDefault();
  setupDisplays();
  setupBoard();
});

$('.reset').on('click', function(event){
  // clear out everything
});

function resetBoard(event){
  event.preventDefault();
  var self = $(event.currentTarget);
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
      console.log("index is " + index);
      array1[index] = value;
      console.log(array1[index]);
    } else if (index == "1") {
      console.log("index is " + index);
      array1[index] = value;
      console.log(array1[index]);
    } else if (index == "2") {
      console.log("index is " + index);
      array1[index] = value;
      console.log(array1[index]);
    }
  } else if (className === 'line-two') {
    if(index == "0"){
      console.log("index is " + index);
      array2[index] = value;
      console.log(array2[index]);
    } else if (index == "1") {
      console.log("index is " + index);
      array2[index] = value;
      console.log(array2[index]);
    } else if (index == "2") {
      console.log("index is " + index);
      array2[index] = value;
      console.log(array2[index]);
    }
  } else if (className === 'line-three') {
    if(index == "0"){
      console.log("index is " + index);
      array3[index] = value;
      console.log(array3[index]);
    } else if (index == "1") {
      console.log("index is " + index);
      array3[index] = value;
      console.log(array3[index]);
    } else if (index == "2") {
      console.log("index is " + index);
      array3[index] = value;
      console.log(array3[index]);
    }
  }
}

// // click on line-one and set boardState to specific click value
// $('.line-one, .line-two, .line-three').on('click', '.square', function(event){
//   updateBoardState(event);
// });

// issue with

$('.board').on('click', '.square', function(event){
  markBoard(state, event);
  state.counter++;
  // console.log(state.counter);
  updateBoardState(event);
  checkBoard(state);
  //onClick.
  // if(counter==9)// css declare tie, end game/reset button (modal)
  // if(checkBoard(board) { // css declare winner|tie, end game}
  if(state.counter == 9) {
    console.log("Game Tied!");
    // reset game
    // reset counter
  }

  if (checkBoard(state)){
    // disable clicks for the board
    console.log("There's a winner!");
    // reset game
    // reset counter
  }
});
