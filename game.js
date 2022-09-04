//used the load to prepare first the html , window to work on different browsers

window.addEventListener("load", function () {

  //started by getting the id's and classes by DOM
  var start = document.getElementById("start");
  var game = document.getElementById("game");
  var end = document.getElementById("end");
  var boundaries = document.getElementsByClassName("boundary");
  var displayScore = document.querySelector(".example");

  //defined some variables I'm Gonna be using
  var result = "";
  var score = 0;
  var trials=0;

  //defind the events I'm gonna be using
  start.addEventListener("mouseover", startGame);
  end.addEventListener("mouseover", endGame);
  start.addEventListener("click", resetGame);

  //for loop to loop over the array of boundary objects
  /*for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", touchBoundaries);
  }*/

  //Functions section down here
  function touchBoundaries() {
    score = score - 10;
    console.log("Your score is: " + score);
    for (var j = 0; j < boundaries.length; j++) {
      boundaries[j].style.background = "red";
    }
    displayScore.innerText ="YOU LOST";
    console.log("TEST");
  }
  function startGame() {
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addEventListener("mouseover", touchBoundaries);
    }
  }

  function resetGame() {
    
    console.log("reset");
    trials +=1;
    for (var j = 0; j < boundaries.length; j++) {
      boundaries[j].style.background = " #eeeeee";
    }
    score = 0;
    result = "";
    displayScore.innerText = result;
  }
  function endGame() {
    score = score + 5;
    result = "YOU WON";
    console.log("Your acore is: " + score);
    displayScore.innerText = result;
  }
});
