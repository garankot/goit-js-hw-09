const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  timerId = setInterval(() => {
    createBodyColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
}

function createBodyColor() {
  const bodyColor = getRandomHexColor();
  body.style.backgroundColor = bodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.addEventListener('click', onStop);

function onStop() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
}
