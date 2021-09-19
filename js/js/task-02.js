const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listEl = document.createElement('ul');
console.log(listEl);

// const listItemEl = document.createElement('li');
// console.log(listItemEl);

const ingredEl = ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    return listItemEl;
});
console.log(ingredEl);

listEl.append(...ingredEl);

const ingredListEl = document.querySelector('#ingredients');
ingredListEl.append(listEl);