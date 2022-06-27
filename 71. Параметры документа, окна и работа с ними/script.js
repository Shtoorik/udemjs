'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

// const width = box.clientWidth;//ширина+два паддинга-скролл если без бордер бокс, иначе ширина - скролл
// const height = box.clientHeight;

// const width = box.offsetWidth; //ширина, два падинга, бордер и паддинг и скролллл
// const height = box.offsetHeight; //видимая часть

const width = box.scrollWidth;//без скролла вертикального
const height = box.scrollHeight;//насколько может прокручиваться
//box.scrollTop//сколько контента проскролено скролллефт слева


btn.addEventListener('click', () => {
  box.style.height = box.scrollHeight + 'px';
});

console.log(box.getBoundingClientRect());//полные координаты элемента, отсчитываются с левоверхнего угла


const style = window.getComputedStyle(box);//вторым аргументом можно получить стили псевдоэлемента

console.log(style.display);

console.log(document.documentElement.scrollTop);//можно вручную изменять

window.scrollBy(0,400);//пролистать на столько то
window.scrollTo(0,400);//пролистать до