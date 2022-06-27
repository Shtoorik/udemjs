'use strict';

function* generator() {
  yield 'a';
  yield 'b';
  yield 'c';
  yield 'd';
  yield 'e';
  yield 'f';
}

const str=generator();

// console.log(str.next());

function* count(n) {
  for (let i = 0; i < n; i++) {
      yield i;
  }
}

const counter = count(7);

console.log(counter.next().value);
for (const k of count(10)) {
  console.log(k);
}//запустили функцию генератор максимальное количество раз
console.log(counter.next().value);
