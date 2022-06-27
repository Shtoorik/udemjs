// 'use strict';

// let user = { name: 500 };

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map.has(user));

// //ссылка осталась только в weakmap и поэтому сборщик мусора удаляет объект

let cache = new WeakMap();

function cahcheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }

  return cache.get(user);
}

let lena={name:'elena'};
let alex={name:'alex'};

cahcheUser(lena);
cahcheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));