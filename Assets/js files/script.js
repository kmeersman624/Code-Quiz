var StartScreen = document.getElementById("startscreen");
var Questionsdiv = document.getElementById("questions");
var StartBtn = document.getElementById("startbtn");
StartBtn.onclick = startquiz;
var CurrentQuestionIndex = 0;
var questiontitle = document.getElementById("questiontitle");
var choices = document.getElementById("choices");
var CurrentQuestion;
var EndScreen = document.getElementById("endscreen");
var finalscore = document.getElementById("finalscore");

//idnetify all elements from html (ID and class)
function startquiz() {
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
  choices.innerHTML = "";
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
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}
// start the game with a score of 0.
var score = 0;
// add event listener to listen for user button click.
choices.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button") === true) {
    //Determine if answer is correct
    // console.log("Button Text: " + element.textContent);
    // console.log("Answer: " + questions[0].answer);
    var answer = element.textContent.substring(3);
    var outcome;
    //add to score if correct answer
    if (
      element.textContent.substring(3) ===
      questions[CurrentQuestionIndex].answer
    ) {
      score = score + 1;
      outcome = "Correct!";
    }
    //take time away if question is ansered incorrectly
    else {
      secondsLeft = secondsLeft - 10;
      outcome = "Incorrect!";
    }
    document.getElementById("outcome").innerHTML = outcome;
    CurrentQuestionIndex++;
    if (CurrentQuestionIndex === questions.length) {
      endGame();
    } else {
      getQuestions();
    }
  }
});

// Show total at end
function endGame() {
  // document.getElementById("endscreen");
  Questionsdiv.setAttribute("hidden", "true");
  EndScreen.removeAttribute("hidden");
  finalscore.textContent = score + "/" + questions.length;
}

//Save user Initials and score
// var highscores = document.getElementById("highscores");
// intials.addEventListener("Click", function (event) {

// }

function highscores() {
  endscreendiv.setAttribute("hidden", "true");
  highscores.removeAttribute("hidden");
  //get stored scores from local storage
  var storedScores = JSON.parse(localStorage.getItem("highscores"));
  // Render a new li for each score
  highSList.innerHTML = "";
  highSCountSpan.textContent = highS.length;
  for (var i = 0; i < highS.length; i++) {
    var highS = highS[i];

    var li = document.createElement("li");
    li.textContent = highS;
    li.setAttribute("data-index", i);

    highSList.appendChild(li);
  }
}
