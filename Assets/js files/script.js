var StartScreen = document.getElementById("startscreen");
var Questionsdiv = document.getElementById("questions");
var StartBtn = document.getElementById("startbtn");
StartBtn.onclick = startquiz; 
var CurrentQuestionIndex = 0;
var questiontitle = document.getElementById("questiontitle");
var choices = document.getElementById("choices");
var CurrentQuestion;
var EndScreen = document.getElementById("endscreen");

//idnetify all elements from html (ID and class)
function startquiz(){
  setTime();
  document.getElementById("startscreen");
  //hide start screen
  StartScreen.setAttribute("hidden", "true");
  //display question screen
  Questionsdiv.removeAttribute("class");
  getQuestions();
}

function getQuestions() {
  CurrentQuestion = questions[CurrentQuestionIndex];
  questiontitle.textContent = CurrentQuestion.title;
    // Loop over every question object
    for (var i = 0; i < CurrentQuestion.choice.length; i++) {
      var ChoiceBtn = document.createElement("button");
      ChoiceBtn.textContent = i + 1 + ". " + CurrentQuestion.choice[i];
      // console.log(CurrentQuestion.choice[i]);
      choices.appendChild(ChoiceBtn);
    }
}

// add time countdown function
var timeEl = document.querySelector("#timer");
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
    }, 1000);
  }
  
//   // We start the game with a score of 0.
  var score = 0;
//   // if answer is correct
// if(userAnswer === currentQuestion.correctAnswer){
//     // add to the number of correct answers
//     numCorrect++;
  // } 
// Show total at end
function endGame () {
  document.getElementById("endscreen");
  EndScreen.setAttribute("hidden", "true");
  alert("You got " + score + "/" + questions.length);
}

// //Save user Initials and score
// prompt(Enter Initials:)