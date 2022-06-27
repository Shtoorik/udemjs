'use strict';

//window.localStorage - не резиновый, поддерживает 5101к как и sessionStorage, свойство-объект
//a globalStorage не поддерживает мой браузер
//для каждого сайта свой, например запомнить какой цвет темы

// localStorage.setItem('number', '5');//добавление или перезапись 

// localStorage.removeItem('number');

// localStorage.clear();//полная очистка


// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red';
}
checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});

const pers = {
  name: 'alex',
  age: 25
};

const serializedPers = JSON.stringify(pers);
localStorage.setItem('alex', serializedPers);
console.log(JSON.parse(localStorage.getItem('alex')));