'use strict';

// Преимущества модулей:
// 1. Модули самодостаточны и независимы
// 2. Частота глобального пространства
// 3. Инкапсуляция. Можно улучшать модуль при использовании в других объектах

const app = '123';

const number = 1;

// Есть два способа модулизации

// 1) Анонимная самовызывающаяся функция

(function () {

  // Собственная область видимости
  
  let number = 2;
  console.log(number);
  console.log(number + 3);
}());

console.log(number);

// 2) Использование объектного интерфейса

// Модуль записываем в переменную и в неё возвращаем методы, доступные снаружи

const user = (function () {
  const veryPrivate = function () {
    console.log('i am very private!');
  };

  return {
    sayHello: veryPrivate
  };
}());

user.sayHello();