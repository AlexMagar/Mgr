var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){

  //get random integer number between 0-3
  var randomNumber = Math.floor(Math.random() * 4);
  //get random color from buttonColors
  var randomChosenColour =  buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
}
