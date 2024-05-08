const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoicesBtn = document.querySelectorAll("button");
let userBet = "";

possibleChoicesBtn.forEach((possible) =>
  possible.addEventListener("click", (e) => {
    userBet = e.target.id;
    userChoice.innerText = userBet;
    computerGenerator();
  })
);

const resultGenerator = (userBet, computerBet) => {
  console.log(userBet, computerBet);
  if (userBet === "rock" && computerBet === "paper") {
    result.innerText = "You Lose!";
  } else if (userBet === "paper" && computerBet === "rock") {
    result.innerText = "You Win!";
  } else if (userBet === "rock" && computerBet === "scissor") {
    result.innerText = "You Win!";
  } else if (userBet === "scissor" && computerBet === "rock") {
    result.innerText = "You Lose!";
  } else if (userBet === "paper" && computerBet === "scissor") {
    result.innerText = "You Lose!";
  } else if (userBet === "scissor" && computerBet === "paper") {
    result.innerText = "You Win!";
  } else {
    result.innerText = "It's a Tie!";
  }
};

const computerGenerator = () => {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  let computerBet = "";
  if (randomNum === 1) {
    computerBet = "rock";
  } else if (randomNum === 2) {
    computerBet = "paper";
  } else if (randomNum === 3) {
    computerBet = "scissor";
  }
  computerChoice.innerText = computerBet;
  resultGenerator(userBet, computerBet);
};
