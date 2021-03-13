/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var positionX = 0
  var positionY = 0
  var speedX = 0
  var speedY = 0

  //key setup
  var left = {
  "LEFT": 37,
}
  var right = {
  "RIGHT": 39,
}
  var up = {
  "UP": 38,
}
  var down = {
  "DOWN": 40,
}


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
 //key down event
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  function handleKeyDown(event) {
  if(event.which === left.LEFT){
    speedX = -5;
   console.log("left pressed");    
 }else if(event.which === right.RIGHT){
     speedX = 5;
   console.log("right pressed");   
 }else if(event.which === up.UP){
     speedY = 5;
   console.log("up pressed");
 }else if(event.which === down.DOWN){
     speedY = -5;
   console.log("down pressed");
 }else{
     console.log("wrong key")
 }  
}   

//key up event
 $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle
  function handleKeyUp(event) {
  if(event.which === left.LEFT){
    speedX = 0;
}else if(event.which === right.RIGHT){
     speedX = 0;
}else if(event.which === up.UP){
     speedY = 0;
}else if(event.which === down.DOWN){
     speedY = 0;
 }else{
     console.log("wrong key")
 }  
}   


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    positionX =  positionX += speedX;
    positionY = positionY += speedY;

  }
    
  
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(box) {
    positionX += speedX;
    positionY += speedY;
} 
  function redrawGameItem(box) {
    $("#box").css("left", positionX);
    $("#box").css("top", positionY);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
