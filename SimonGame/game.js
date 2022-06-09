var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){

  //get random integer number between 0-3
  var randomNumber = Math.floor(Math.random() * 4);
  //get random color from buttonColors
  var randomChosenColour =  buttonColours[randomNumber];

  //push random color into gamePattern array
  gamePattern.push(randomChosenColour);

  return randomChosenColour;

}

//flash the button with randomly gegenerated colour
$("#"+nextSequence()).fadeOut(100).fadeIn(100);

//play the sound for the button selected
var playSound = new Audio("sounds/"+nextSequence()+".mp3");
playSound.play();
