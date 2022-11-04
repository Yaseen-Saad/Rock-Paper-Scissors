let game = document.querySelector("main >div:last-child"),
  start = document.querySelector("main >div:first-child"),
  imgs = document.querySelectorAll(
    "body main > div:last-of-type div:first-of-type img"
  ),
  compchoise = document.querySelector("img.comp"),
  choise,
  wins = document.querySelector(".result"),
  comp,
  done = false,
  again = document.querySelector(".again"),
  res,
  rps = ["rock", "paper", "scissors"];
console.log(again);
function choose(src) {
  src = src.match(/\/[a-z]+\.svg/gi)[0].split(".")[0];
  choise = src;
}
function CompChoise() {
  comp = rps[parseInt(Math.random() * 3)];
  compchoise.src = `./${comp}.svg`;
  judge();
}

function judge() {
  if (choise == comp) {
    res = "Tie";
    done = true;
  } else if (choise == "rock") {
    if (comp == "paper") {
      res = "Comp Wins";
      done = true;
    } else {
      done = true;
      res = "You Wins";
    }
  } else if (choise == "paper") {
    if (comp == "rock") {
      res = "You Wins";
      done = true;
    } else {
      res = "Comp Wins";
      done = true;
    }
  } else if (choise == "scissors") {
    if (comp == "paper") {
      done = true;
      res = "You Wins";
    } else {
      done = true;
      res = "Comp Wins";
    }
  }
}
function starrt(ele) {
  if (!done) {
    ele.classList.add("active");
    choose(ele.src);
    CompChoise();
    again.style.display = "block";

    wins.innerText = res;
    return;
  }
  again.classList.add("active");
  setTimeout(() => {
    again.classList.remove("active");
  }, 1500);
}
imgs.forEach((ele) => {
  ele.onclick = () => {
    starrt(ele);
  };
});
function startGame() {
  start.style.display = "none";
  game.style.display = "flex";
}
again.onclick = () => {
  location.reload();
};
