'use strict';

/* function showThis(a,b) {
  console.log(this);//без строгого режима показывает window, иначе undefined
  function sum() {
    console.log(this);//тоже самое
    return a + b;
  }

  console.log(sum());
}
showThis(4, 3);

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);//функция как метод объекта - ссылается на объект
    function shout() {
      console.log(this);//уже не как метод
    }
    // shout();
  }
};
obj.sum(); */

//внутри функций конструкторов this для всех методов и свойств будет только что созданный объект

/* function sayName(surname) {
  console.log(this);
  console.log(this.name+surname);
}

const user = {
  name: 'john'
};

sayName.call(user,'smith');//присваиваем this функции
sayName.apply(user, ['smith']);//разница в синтаксисах

function count(num) {
  return this*num;
}

const double=count.bind(2);//создали функцию с привязанным контекстом
console.log(double(3)); */

// 1) Обычная функция: this = window, но если 'use strict' - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  console.log(this);//this сам элемент, на котором происходит событие
});//если стрелочная то контекст вызова теряется

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };

    say();
  }
};

obj.sayNumber();

//у стрелочных функций нет контекста вызова, она берет контекст от родителя

const double = (a) => {
  return a * 2;//если тело функции помещается в одну строку, то можно написать без фигурных скобок
};
const triple = a => a * 3;//и убираем return, если один аргумент скобки тоже можно опустить
