const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




// const imagesEl = images.map(image => {
    
//     const imagesImgEl = document.createElement('img');
//     imagesImgEl.src = image.url;
//     imagesImgEl.alt = image.alt;
//     imagesImgEl.width = 320;
    
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('gallery__item');
//     itemEl.insertAdjacentElement('afterbegin',imagesImgEl);
    
    
//     return itemEl;
// });
// console.log(imagesEl);

// const imgListEl = document.querySelector('#gallery');
// imgListEl.append(...imagesEl);
// console.log(imgListEl);

const imagesEl = ((element) => {
  const ul = document.querySelector('#gallery')
  
  element.forEach(el => {
    ul.insertAdjacentHTML('beforeend', `<li class=gallery__list><img src='${el.url}' alt='${el.alt}'></li>`)
  });
  
});
imagesEl(images);

