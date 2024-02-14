let html = document.querySelector('html');
let messageBox = document.querySelector('#message-random');
let messageInput = document.querySelector('button[type="submit"]');
let affirmationRadio = document.querySelector('input#affirmation[type="radio"]');
let mantraRadio = document.querySelector('input#mantra[type="radio"]');

let chime = new Audio('./sounds/bell.wav');

messageInput.addEventListener('click', function(event) {
  event.preventDefault();
  chime.cloneNode().play();
  let message = (affirmationRadio.checked) ? randomAffirmation() : randomMantra();
  setMessage(message);
  changeBackground();
});

function changeBackground() {
  if (affirmationRadio.checked) html.style.setProperty('--fade-style', 'fade-out');
  else html.style.setProperty('--fade-style', 'fade-in');
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