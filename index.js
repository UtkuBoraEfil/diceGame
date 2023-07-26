function random() {
  var n = Math.random();
  n = n * 6;
  n = Math.floor(n) + 1;
  return n;
}

function main() {
  var n = random();
  if (n === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  } else if (n === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  } else if (n === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  } else if (n === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  } else if (n === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  } else if (n === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  }

  var r = random();

  if (r === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  } else if (r === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  } else if (r === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  } else if (r === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  } else if (r === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  } else if (r === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  }

  if (n > r) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
  } else if (n === r) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
  } else if (n < r) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
  }
}
