setTimeout(() => console.log('timeout'), 0);//5

Promise.resolve()
  .then(() => console.log('promise'));//2

queueMicrotask(() => console.log('wow'));//3

//микрозадачи до рендерастраницы

Promise.resolve()
  .then(() => console.log('promise-2'));//4

//then catch finally в промисах и await- это микрозадачи
//!сам промис макрозадача

console.log('code');//1

//после каждой макрозадачи, движок исполняет очередь микрозадач, перед тем как выполнить следующую макрозадачу
//показать изменения на странице, сделать что-то ещё

// ()=> {}
// microtasks
// render
// ()=> {}
// microtasks
// render
// ()=> {}