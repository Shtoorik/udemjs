const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;

  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }

  const id = setInterval(frame, 10);
}



// btn.addEventListener('click', () => {
//   // const timerId = setTimeout(logger, 2000);//миллисекунды, а затем аргументы
//   timerId = setInterval(logger, 2000);//каждые
//   //локальная, тогда лучше заранее объявить глобально
// });

btn.addEventListener('click', myAnimation);

//setInterval не учитывает как долго работает функция внутри него
//если logger три секунды то setInterval не будет ждать после этого 2 секунды, а запустит следующую, так как считает
//что 3>2 и задержка пройдена
//обычно если функция моментальная, то она выполняется, а затем ждет указанное время, сначала тоже ожидание

function logger() {
  if (i == 3) {
    clearInterval(timerId);//очистить таймер
  }
  console.log('res');
  i++;
}

//рекурсивный setTimeout

let id = setTimeout(function log() {
  console.log('hello');
  id = setTimeout(log, 500);
}, 500);

//данный код будет ждать указанное время после выполнения функции