'use strict';

const user = {
  name: 'alex',
  surname: 'smith',
  // birthday: '20/04/1993',
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  }
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, 'birthday', { value: prompt('date?'), enumerable: true.valueOf, configurable: true });

Object.defineProperty(user, 'name', { writable: false });

// Если такого свойства не будет, то будет создано по умолчанию с флагами false
Object.defineProperty(user, 'gender', { value: 'male' });

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

Object.defineProperty(user, 'showMyPublicData', { enumerable: false });

for (const item in user) {
  console.log(item);
}

Object.defineProperty(user, {
  name:{writable:false},
  surname:{writable:false}
});

// writable
// enumerable
// configure
// Изначально флаги true

// Object.preventExtensions()
// Предотвращает любое расширение объекта.

//   Object.seal()
// Метод Object.seal() запечатывает объект, предотвращая добавление новых свойств к объекту и делая все существующие свойства не настраиваемыми.Значения представленных свойств всё ещё могут изменяться, поскольку они остаются записываемыми.

//   Object.freeze()
// Замораживает объект: другой код не сможет удалить или изменить никакое свойство.
