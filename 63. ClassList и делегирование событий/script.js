const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);//сколько классов
// console.log(btns[0].classList.item(1));//получить класс
// console.log(btns[0].classList.add('red','tttt'));//добавить класс
// console.log(btns[0].classList.remove('blue'));//удалить класс
// console.log(btns[0].classList.toggle('blue'));//переключать класс

// if (btns[1].classList.contains('red')) {//проверить наличие класса
//   console.log('red');
// }

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  btns[1].classList.toggle('red');
});

// console.log(btns[0].className);//устаревшее

//?Делегирование событий
wrapper.addEventListener('click', (event) => {
  //не все элементы поддерживают событие клика, так что проверяем
  if (event.target && event.target.tagName == 'BUTTON') {
  // if (event.target && event.target.matches('button.red')) {
    console.log('hi');
  }
});

//неправильно
// btns.forEach(btn => {
  // btn.addEventListener('click', () => {
    // console.log('hello');
  // });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); //динамически