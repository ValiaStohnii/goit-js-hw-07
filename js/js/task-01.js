const categoriesEl = document.querySelectorAll('.item');
console.log(`У списку ${categoriesEl.length} категорії.`);

const categoriesTitleEl = document.querySelectorAll('.item');
categoriesTitleEl.forEach((item) => {
    console.log(`Категорія ${item.querySelector('h2').textContent}`);
    console.log(`Кількість ${item.querySelectorAll('li').length}`);
});