let body = document.body;
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let btn = document.querySelectorAll("button");
let choosing = document.querySelector("#choosing");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let Crock = document.querySelector("#Crock");
let Cpaper = document.querySelector("#Cpaper");
let Cscissors = document.querySelector("#Cscissor");
let reset = document.querySelector("#reset");
let score1 = 0;
let score2 = 0;

rock.addEventListener("click", () => {
  navigator.vibrate(500);
  rock.style.border = "2px solid blue";
  choosing.innerText = "Computer is choosing...";
  let computer = Math.floor(Math.random() * 3);
  btn.forEach((b) => {
    b.disabled = true;
  });
  setTimeout(() => {
    if (computer === 0) {
      Crock.style.border = "2px solid red";
      choosing.innerText = "It's a Draw! (Computer chose Rock!)";
    } else if (computer === 1) {
      score2 += 1;
      computerScore.innerText = score2;
      Cpaper.style.border = "2px solid red";
      choosing.innerText = "Computer Won! (Computer chose Paper!)";
    } else {
      score1 += 1;
      playerScore.innerText = score1;
      Cscissors.style.border = "2px solid red";
      choosing.innerText = "You Won! (Computer chose Scissor!)";
    }
    navigator.vibrate(500);
  }, 1000);
});

paper.addEventListener("click", () => {
  navigator.vibrate(500);
  btn.forEach((b) => {
    b.disabled = true;
  });
  paper.style.border = "2px solid blue";
  choosing.innerText = "Computer is choosing...";
  let computer = Math.floor(Math.random() * 3);

  setTimeout(() => {
    if (computer === 0) {
      score1 += 1;
      playerScore.innerText = score1;
      Crock.style.border = "2px solid red";
      choosing.innerText = "You Won! (Computer chose Rock!)";
    } else if (computer === 1) {
      Cpaper.style.border = "2px solid red";
      choosing.innerText = "It's a Draw! (Computer chose Paper!)";
    } else {
      score2 += 1;
      computerScore.innerText = score2;
      Cscissors.style.border = "2px solid red";
      choosing.innerText = "Computer Won! (Computer chose Scissor!)";
    }
    navigator.vibrate(500);
  }, 1000);
});

scissor.addEventListener("click", () => {
  navigator.vibrate(500);
  btn.forEach((b) => {
    b.disabled = true;
  });
  scissor.style.border = "2px solid blue";
  choosing.innerText = "Computer is choosing...";
  let computer = Math.floor(Math.random() * 3);

  setTimeout(() => {
    if (computer === 0) {
      score2 += 1;
      computerScore.innerText = score2;
      Crock.style.border = "2px solid red";
      choosing.innerText = "Computer Won! (Computer chose Rock!)";
    } else if (computer === 1) {
      score1 += 1;
      playerScore.innerText = score1;
      Cpaper.style.border = "2px solid red";
      choosing.innerText = "You Won! (Computer chose Paper!)";
    } else {
      Cscissors.style.border = "2px solid red";
      choosing.innerText = "It's a Draw! (Computer chose Scissor!)";
    }
    navigator.vibrate(500);
  }, 1000);
});

reset.addEventListener("click", () => {
  btn.forEach((b) => {
    b.disabled = false;
  });
  Crock.style.border = "none";
  Cpaper.style.border = "none";
  Cscissors.style.border = "none";
  rock.style.border = "none";
  paper.style.border = "none";
  scissor.style.border = "none";
  choosing.innerText = "";

  playerScore.innerText = score1;
  computerScore.innerText = score2;
});
