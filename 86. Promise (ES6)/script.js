'use strict';

// console.log('Запрос данных...');


// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//       name: 'tv',
//       price: 2000
//     };

//     //если до этого успешно выполнилось, запускаем следующее
//     resolve(product);
//   }, 2000);
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//       // reject();
//     }, 2000);
//   });
// }).then(data => {//пришло из прошлой функции
//   data.modify = true;
//   return data;
// }).then((data) => {
//   console.log(data);
// }).catch(() => {//если что то пойдет не так
//   console.error('ошибка');
// }).finally(() => {//выполниться в любом случае
//   console.log('Final');
// });

const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('ALL');
// });
Promise.race([test(1000), test(2000)]).then(() => {
  console.log('ALL');
});//выполняем действия как только первый завершил работу

//чтобы убедились что все промисы выполнились
