var bigNum = Math.floor(Math.random() * (60 - 30)) + 30;
document.getElementById("numToMatch").innerHTML = bigNum;


var crystal1 = Math.floor(Math.random() * (10 - 1)) + 1;
var crystal2 = Math.floor(Math.random() * (10 - 1)) + 1;
var crystal3 = Math.floor(Math.random() * (10 - 1)) + 1;
var crystal4 = Math.floor(Math.random() * (10 - 1)) + 1;
var score = 0;

document.getElementById("C1").addEventListener("click", addCrystal1);
document.getElementById("C2").addEventListener("click", addCrystal2);
document.getElementById("C3").addEventListener("click", addCrystal3);
document.getElementById("C4").addEventListener("click", addCrystal4);

document.getElementById("totalScore").innerHTML = score;

function doesNumMatch() {

  if (score > bigNum) {
    document.getElementById("gameOver").innerHTML = "You Lose";
  } else if (score == bigNum) {
    document.getElementById("gameOver").innerHTML = "You WIN";
  }
}



function addCrystal1() {
  var score = score + crystal1.ValueOf();
  document.getElementById("totalScore").innerHTML = score;
  doesNumMatch();
  return score;

}

function addCrystal2() {
  var score = score + crystal2.ValueOf();
  document.getElementById("totalScore").innerHTML = score;
  doesNumMatch();
  return score;
}

function addCrystal3() {
  // document.getElementById("totalScore").innerHTML = score + crystal1;
  var score = score + crystal3.ValueOf();
  document.getElementById("totalScore").innerHTML = score;
  doesNumMatch();
  return score;
}

function addCrystal14() {
  var score = score + crystal4.ValueOf();
  document.getElementById("totalScore").innerHTML = score;
  doesNumMatch();
  return score;
}

console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);

