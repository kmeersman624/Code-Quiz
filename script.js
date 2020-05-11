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
    
      //take time away if question is ansered incorrectly
      if (questions === 0)


      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
      }, 6000);
  }


  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);



  // We start the game with a score of 0.
  var score = 0;
  // if answer is correct
if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;

// Show total at end
alert("You got " + score + "/" + questions.length);

//Save user Initials and score
