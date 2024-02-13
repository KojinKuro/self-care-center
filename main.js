let messageBox = document.querySelector('#message-random');
let messageInput = document.querySelector('button[type="submit"]');
let affirmationRadio = document.querySelector('input[type="radio"]');

messageInput.addEventListener('click', function(event) {
  event.preventDefault();
  var message = (affirmationRadio.checked) ? randomAffirmation() : randomMantra();
  setMessage(message);
});

function setMessage(text) {
  messageBox.innerText = text;
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