function createNewElem(tagName , className, parentName, text = "", addBefore = false){
  let elem = document.createElement(tagName);
  elem.className = className;
  elem.textContent = text;
  if (addBefore) {
    parentName.prepend(elem);
  } else {
    parentName.append(elem);
  }
  return elem;
}

let word = 'internship'.toUpperCase();

const main = createNewElem('main', 'main', document.body, '', true);
const mainBlock = createNewElem('div', 'main__block', main);
mainBlock.classList.add('container');

const question = createNewElem('div', 'question', mainBlock);
let text = 'Name the process when you forget about everithing and practice hard in hope to receive a job offer';
const questionText = createNewElem('p', 'question__text', question, text)

const wordBlock = createNewElem('div', 'word', mainBlock);
for (let char of word) {
  const wordItem = document.createElement('div');
  wordItem.className = 'word__item';
  wordItem.textContent = char;
  wordItem.classList.add('hidden');
  wordBlock.append(wordItem);
}

const lettersBlock = createNewElem('div', 'letters', mainBlock);
for (let i = 65; i <= 90; i++) {
  const letter = document.createElement('div');
  letter.className = 'letter__item';
  letter.textContent = String.fromCodePoint(i);
  lettersBlock.append(letter);
}

const chance = createNewElem('div', 'chance', mainBlock);

const rightAnswer = createNewElem('div', 'rightAnswer', main);
rightAnswer.classList.add('hideBlock');
const wrongAnswer = createNewElem('div', 'wrongAnswer', main);
wrongAnswer.classList.add('hideBlock');
const gameOver = createNewElem('div', 'gameOver', main);
gameOver.classList.add('hideBlock');
