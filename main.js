const numberAdvice = document.querySelector('.number');
const advice = document.querySelector('.advice');
const dice = document.querySelector('.dice');
const link = "https://api.adviceslip.com/advice";

dice.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * link.length) + 1;
  numberAdvice.textContent = "Advice #" + randomNumber;

  fetch(link)
    .then(response => response.json())
    .then(data => {
      advice.textContent = data.slip.advice;
    })
    .catch(error => console.log(error));
});





