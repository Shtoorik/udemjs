'use strict';

// new RegExp('pattern','flags');
// /pattern/f

const ans = prompt('Введите ваше имя');

const reg = /n/ig;

//флаги можно комбинировать

//три глобальных флага
//i - регистр не важен
//g - несколько вхождений
//m - многострочный режим


//search ищет первое совпадение
// console.log(ans.search(reg));

//match возвращает массив
//c g массив результатов
// console.log(ans.match(reg));

const pass = prompt('Password');

// . - любые элементы
//заменяем все на звездочку
//если нужна точка - \. 
// console.log(pass.replace(/./g, '*'));

console.log('12-34-56'.replace(/-/g, ':'));

console.log(reg.test(ans));//проверяет наличие

// \d - класс цифры
// \w - класс слова и буквы
// \s - класс пробелы
// если большая буква то 'не'

const str = 'my name is R2D2';
console.log(str.match(/\w\d\w\d/i));