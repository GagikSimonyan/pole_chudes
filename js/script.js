document.addEventListener("DOMContentLoaded", function () {
  word = word.split("");
  let attemptCount = 5;
  let counter = 0;
  const chance = document.querySelector(".chance");
  chance.textContent = `Chances left: ${attemptCount}`;

  const rightAnswer = document.querySelector(".rightAnswer");
  const wrongAnswer = document.querySelector(".wrongAnswer");
  const gameOver = document.querySelector(".gameOver");

  const wordItems = document.querySelectorAll(".word__item");
  const letterItems = document.querySelectorAll(".letter__item");

  letterItems.forEach((letterItem) => {
    letterItem.addEventListener("click", checkLetter);
  });

  function checkLetter(e) {
    let item = e.target;
    let letter = item.textContent;

    if (!word.includes(letter)) {
      disableClick(item);
      showBlock(wrongAnswer);
      hideBlock(wrongAnswer);
      chance.textContent = `Chances left: ${--attemptCount}`;
      checkRemainingAttempts(attemptCount);
    } else {
      for (let wordItem of wordItems) {
        if (wordItem.textContent === letter) {
          wordItem.classList.remove("hidden");
          counter += 1;
        }
        if (counter === word.length) {
          disableAllButtons();
          chance.textContent = "Congratulations!!! You won";
          showBlock(gameOver);
        }
      }
      disableClick(item);
      showBlock(rightAnswer);
      hideBlock(rightAnswer);
    }
  }

  function showBlock(item) {
    item.classList.remove("hideBlock");
    item.classList.add("showBlock");
  }

  function hideBlock(block) {
    setTimeout(() => {
      block.classList.remove("showBlock");
      block.classList.add("hideBlock");
    }, 1000);
  }

  function disableClick(item) {
    item.classList.add("disable");
    item.removeEventListener("click", checkLetter);
  }

  function disableAllButtons() {
    letterItems.forEach((letterItem) => {
      disableClick(letterItem);
    });
  }

  function checkRemainingAttempts(attempt) {
    if (attempt === 0) {
      disableAllButtons();
      chance.textContent = "GAME OVER";
      showBlock(gameOver);
    }
  }
});
