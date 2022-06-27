'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

//input - каждый раз когда что то вводиться или удаляется в инпут
//change - возникает когда инпут уходит из фокуса

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open("GET", 'js/current.json');//собирает настройки, которые помогут в будущем сделать запрос
  //ajax запросы по умолчанию асинхронные 
  //путь относительно index.html

  //надо донастроить - что именно мы отправляем чтобы протоколы и сервер правильно обработали запрос
  request.setRequestHeader("Content-type", 'application/json; charset=utf-8');
  request.send();
  
  //status
  //statusText
  //response - ответ
  //readyState - текущее состояние запроса

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'warning';
    }
  });
  //это событие отслеживает статус готовности нашего запроса в данный момент
  //то есть если меняется readyState то происходит событие

  //'load'-срабатывает когда наш запрос полностью загрузился и мы получили результат
});