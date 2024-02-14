const html = document.querySelector('html');
const messageBox = document.querySelector('#message-random');
const messageInput = document.querySelector('button[type="submit"]');
const affirmationRadio = document.querySelector('input#affirmation[type="radio"]');
const mantraRadio = document.querySelector('input#mantra[type="radio"]');

const chime = new Audio('./sounds/bell.wav');

let previousMessage = affirmationRadio;
let previousTimer;

messageInput.addEventListener('click', function(event) {
  event.preventDefault();
  clearTimeout(previousTimer);
  chime.cloneNode().play();

  changeBackground();
  loading();
  previousTimer = setTimeout(() => {
    const message = (affirmationRadio.checked) ? randomAffirmation() : randomMantra();
    setMessage(message);
  }, 500 + getRandomIndex(1500));
});

function loading() {
  messageBox.innerHTML = '<img src="./assets/loading.gif">';
}

function changeBackground() {
  if(previousMessage === affirmationRadio && affirmationRadio.checked) return;
  if(previousMessage === mantraRadio && !affirmationRadio.checked) return;

  if (affirmationRadio.checked) { 
    html.style.setProperty('--fade-style', 'fade-out'); 
    previousMessage = affirmationRadio;
  }
  else { 
    html.style.setProperty('--fade-style', 'fade-in');
    previousMessage = mantraRadio;
  }
}

function setMessage(text) {
  messageBox.innerHTML = `<span class='fade-in'>${text}</span>`
  messageBox.style.fontSize = '1.75rem';
}

function randomAffirmation() {
  return affirmationData[getRandomIndex(affirmationData.length)];
}

function randomMantra() {
  return mantraData[getRandomIndex(mantraData.length)];
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}