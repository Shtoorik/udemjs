'use strict';

//у объекта свойства делятся на свойства-данные и свойства-аксессоры

const person = {
  name: 'alex',
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num;
  }
};

console.log(person.userAge = 30);//не ставим скобки
console.log(person.userAge);//не ставим скобки