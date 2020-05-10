var StartBtn = document.getElementById("startbtn");
StartBtn.onclick = startquiz; 
//idnetify all elements from html (ID and class)
function startquiz(){
    document.getElementById("startscreen");
    var StartScreen = document.getElementById("startscreen");
    //hide start screen
    //display question screen
}
// add time counter function
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
      }, 1000);
  }
  
  // We start the game with a score of 0.
  var score = 0;



  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);





// Show total at end
alert("You got " + score + "/" + questions.length);
