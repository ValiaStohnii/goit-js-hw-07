const rangeEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

rangeEl.addEventListener('input', inputChange);

function inputChange(event) {
    textEl.style.fontSize = event.target.value +'px';
}
console.log(inputChange);