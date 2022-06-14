var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];



//to track whether game started or not
var started = false;
var level = 0; // track how many level are you on

//detect keyboard pressed
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("level "+level);
    nextSequence();
    strted = true;
  }
});

//detect which button is Clicked
$(".btn").click(function(){

  //store the id of the button that got clicked
  var userChosenColour = $(this).attr("id");

  //push userChosenColour into userClickedPattern[]
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

});

function nextSequence(){

  //increase level by 1 every time nextSequence is called
  level++;

  //update h1
  $("#level-title").text("Level "+level);

  //get random integer number between 0-3
  var randomNumber = Math.floor(Math.random() * 4);
  //get random color from buttonColors
  var randomChosenColour =  buttonColours[randomNumber];

  //push random color into gamePattern array
  gamePattern.push(randomChosenColour);

  //flash the button with randomly gegenerated colour
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //play the sound for the button selected
  playSound(randomChosenColour);
}

function playSound(name){
  var audio  = new Audio("sounds/"+name+".mp3");
  audio.play();
}

//add animations to user clicks
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");

  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}
