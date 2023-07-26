// if (!sessionStorage.getItem("reloading")) {
//   sessionStorage.setItem("reloading", true);
// } else {
//   const randomNumber1 = Math.floor(Math.random() * 6 + 1);
//   const randomNumber2 = Math.floor(Math.random() * 6 + 1);

//   const heading = document.querySelector("h1");

//   const randomImage1 = `/images/dice${randomNumber1}.png`;
//   const image1 = document.querySelector(".img1");
//   const randomImage2 = `/images/dice${randomNumber2}.png`;
//   const image2 = document.querySelector(".img2");

//   image1.setAttribute("src", randomImage1);
//   image2.setAttribute("src", randomImage2);

//   if (randomNumber1 > randomNumber2) {
//     heading.innerHTML = "🚩 Player 1 Wins";
//   } else if (randomNumber1 < randomNumber2) {
//     heading.innerHTML = "Player 2 Wins 🚩";
//   } else {
//     heading.innerHTML = "Draw 🖕🏻🖕🏻";
//   }
// }

function play() {
  const randomNumber1 = Math.floor(Math.random() * 6 + 1);
  const randomNumber2 = Math.floor(Math.random() * 6 + 1);

  const heading = document.querySelector("h1");

  const randomImage1 = `./images/dice${randomNumber1}.png`;
  const image1 = document.querySelector(".img1");
  const randomImage2 = `./images/dice${randomNumber2}.png`;
  const image2 = document.querySelector(".img2");

  image1.setAttribute("src", randomImage1);
  image2.setAttribute("src", randomImage2);

  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins 🚩";
  } else {
    heading.innerHTML = "Draw 🖕🏻🖕🏻";
  }
}
