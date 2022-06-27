const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');
let pos = 0;

//У CSS3 анимаций есть недостатки
//не умеют анимировать canvas элементы
//нельзя создать рванную и не стандартную анимацию

//Просто делать js анимации с помощью SetTimeout нецелесообразно
//Потому что частота обновления экрана будет не совпадать с прописанной частотой в коде
//Также это вызывает проблемы с производительностью
//Поэтому есть requestAnimationFrame, который вызывает функцию в момент обновления экрана
function myAnimation() {
  pos++;
  elem.style.top = pos + "px";
  elem.style.left = pos + "px";
  if (pos < 300) { //внутри себя зацикливает
    requestAnimationFrame(myAnimation);
  }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);