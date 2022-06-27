'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(m => { //часовой, коллбек функция -  что происходит при изменении элемента
  console.log(m); //m список изменений
});
//после действий, нельзя например запретить писать что то
observer.observe(box, {
  childList: true//за чем следить и конфигурация
});

observer.disconnect();//отключение