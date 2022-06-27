'use strict';

const persone = {
  name: 'alex',
  tel: '+78',
  parents: {
    mom: 'Olga',
    dad: 'mike'
  }
};

const clone = JSON.parse(JSON.stringify(persone));

//переводим в json и обратно парсим, каждая свойство это строка

//также json позволяет делать глубокие копии объектов

clone.parents.mom = 'ann';

console.log(persone);//осталось olga
console.log(clone);