'use strict';

/* try {
  console.log('normal');
  console.log(a);
  console.log('unreachable'); //если в try произойдет ошибка, то выполнение продолжиться в finally и далее
} catch(e) {
  console.log(e);//если поймаем ошибку
  console.log(e.name);//объект ошибки
  console.log(e.message);
  console.log(e.stack);
} finally {
  console.log('whatever');
}

console.log(yes); */
const but = document.querySelector('button');
try {
  but.addEventListener('click',()=>{console.log('clicked');});
  
} catch (error) {
  
}
