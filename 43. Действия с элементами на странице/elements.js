'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');//hearts.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor='blue';
// box.style.width = '500px';

box.style.cssText = 'background-color:red; width:500px;';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = "red";

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text=document.createTextNode('тут');

div.classList.add('black');

// wrapper.appendChild(div);
wrapper.append(div);
// wrapper.insertBefore(div, hearts[0]);


// document.body.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0],hearts[0]);

div.innerHTML="<h1>hi</h1>";

// div.textContent="hello  ";

div.insertAdjacentHTML('afterend','<h2>lego</h2>');