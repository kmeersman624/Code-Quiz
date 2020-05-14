var highscores = localStorage.getItem("highScores");
if (highscores) {
  highscores = JSON.parse(highscores);
} else {
  highscores = [];
}
//loop over high scores
for (var i = 0; i < highscores.length; i++) {
  var highscores = highscores[i];
  //   highscores.append("<li>");
}

//go back to start when go back button is clicked
goback.addEventListener("click", function (event) {
  var goback = document.getElementById("goback");
  window.location.href = "index.html";
});
