const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', inputChange);
refs.input.addEventListener('blur', inputBlur);

function inputChange(event) {
    console.log(event.currentTarget.value);
    refs.name.textContent = event.currentTarget.value;
}

function inputBlur() {
    refs.name.textContent = 'незнакомец';
}