
// check whether jQuery is ready or not, if you put script tag at above we have to check whether jQuery loaded or not
// $(document).ready(function(){
//   $("h1").css("color","yellow");
// });

// add Class
$("h1").addClass("big-title");

// add more than one class
//$("h1").addClass("big-title title");

// check for the class
//$("h1").hasClass("big-title");

//change the defalut text to defined one
//$("h1").text("Click me or not");
$("h1").text("Bye");

//to change the html tag
$("button").html("Click Me");

// remove class
//$("h1").removeClass("big-title");

// change the h1 title to color green
//$("h1").css("color", "green");


//event listiner
// using js
// for(var i = 0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }


//using jQuery event Event Listener
//we are not using for loop because jquery will look through the website and select all the button
$("button").click(function(){
  $("h1").css("color", "purple");
});

//keypress Event
$(document).keypress(function(event){
  $("h1").text(event.key);
  //console.log(event.key); // to print the console
});


//before(), after(), prepend(), append(), remove()
$("h1").before("<button>New</button>");


//hide(), show(), toogle(), fadeOut(), slideUp() slideDown(), slideToogle() the element
//$("h1").hide();
//.animate();

//chain method
// $("h1").slideUp().slideDown().animate(opacity: 0.5);
