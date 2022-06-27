'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;//не синтаксис, а соглашение, что такие переменные скрыты от внешнего воздействия
  }

  //в новых версиях можно создавать свойства вне конструктора
  //также можно делать приватные свойства
  #surname = 'Sahno';
  //а также использовать стрелочные функции, чтобы не терять контекст
  say = () => {
    console.log(`Имя пользователя: ${this.name
      }${this.#surname}, возраст: ${this._age
      }`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof (age) == 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение');
    }
  }
}

const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);


//но если добавить подчеркивание все равно будет работать 
console.log(ivan.surname);
//и в классах эту проблему не решить
ivan.say();