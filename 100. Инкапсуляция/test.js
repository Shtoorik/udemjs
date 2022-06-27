'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  #surname = 'Sahno';

  say() {
    console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this.age}`);
  }

  get surname() {
    return this.#surname;
  }

  set surname(sur) {
    this.#surname = sur;
  }
}

const ivan = new User('Ivan', 27);

ivan.say();