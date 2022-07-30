let advice = "";

const button = document.querySelector('[data-generator-role="trigger"]');
const textField = document.querySelector('[data-generator-role="output"]');

button.addEventListener(('click'), el => {
    getAdvice();
})

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        adv = data.slip.advice
        changeQuote(adv);
    });
}

function changeQuote(message){
    textField.innerText = `"${message}" ` 
}