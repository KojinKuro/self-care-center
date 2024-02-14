let html = document.querySelector('html');
let messageBox = document.querySelector('#message-random');
let messageInput = document.querySelector('button[type="submit"]');
let messageForm = document.querySelector('#message-form');
let affirmationRadio = document.querySelector('input#affirmation[type="radio"]');
let mantraRadio = document.querySelector('input#mantra[type="radio"]');

messageForm.addEventListener('change', changeBackground);
messageInput.addEventListener('click', function(event) {
  event.preventDefault();
  var message = (affirmationRadio.checked) ? randomAffirmation() : randomMantra();
  setMessage(message);
});

function changeBackground() {
  if (affirmationRadio.checked) { html.classList.remove('background-alt'); }
  else { html.classList.add('background-alt') };
}

function setMessage(text) {
  messageBox.innerHTML = `<span class='fade-up'>${text}</span>`
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