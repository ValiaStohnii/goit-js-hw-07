const counterValue = document.querySelector('#value');

const increment=()=>counterValue.textContent++;

const decrement=() =>counterValue.textContent--;

const actions = document.querySelectorAll('#counter button');

actions[0].addEventListener('click',decrement);
actions[1].addEventListener('click', increment);