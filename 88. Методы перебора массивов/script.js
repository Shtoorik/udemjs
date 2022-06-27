'use strict';

//!filter

/* const names = ['ivan', 'ann', 'ksenia', 'voldemart'];

const shortNames = names.filter(function (name) {
  return name.length < 5;//текущий элемент возвращается, если коллбек возвращает тру
});

console.log(shortNames);
console.log(names.filter(item => item.length > 5));
console.log(names); */

//!map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());
// //текущий элемент становится возращенным значением коллбека
// console.log(result);
// console.log(answers);

//! every/some

// const some = [4, 'asa', 'asas'];

// console.log(some.some(item => typeof (item) == 'object'));
// //если встретит хотя бы одно, выведет элемент и дальше перебор не продолжит
// console.log(some.every(item => typeof (item) == 'string'));
// //если встретит хотя бы один не подходящий, остановится и вернет ложь

//! reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, item) =>/* sum=*/ sum + item);
// console.log(res);

// const arr = ['1','2','3','4'];
// //аккумулятор на каждой итерации становится возращаемым значением
// const res = arr.reduce((sum, item) =>/* sum=*/ sum + item);
// console.log(res);
// //второй аргумент reduce это значение по умолчанию для аккумулятора

// const obj = {
//   ivan: 'pers',
//   ann: 'pers',
//   dog: 'animal',
//   cat:'animal'
// };

// const newArr = Object.entries(obj).filter(item=>item[1]==='pers').map(item=>item[0]);
// console.log(newArr);

function setFilmsIds(arr) {
  return arr.map((item, i) => { item.id = i;  return item; });
}
const films = [
  {
    name: 'Titanic',
    rating: 9
  },
  {
    name: 'Die hard 5',
    rating: 5
  },
  {
    name: 'Matrix',
    rating: 8
  },
  {
    name: 'Some bad film',
    rating: 4
  }
];

console.log(setFilmsIds(films));

function checkFilms(arr) {
  return arr.every(item => 'id' in item);
}

