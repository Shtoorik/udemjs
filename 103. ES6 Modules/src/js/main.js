export let one = 1;

let two = 2;

export { two };

// export function sayHi() {
//   console.log('hi');
// }
export default function sayHi() {
  console.log('hi');
}

//инкапсуляция
//модули должны быть независимы друг от друга
//это не значит, что в одном модуле нельзя вызывать кусочек другого модуля
//это значит что модули не должны привязываться к одним и тем же сущностям

//каждый модуль может быть вызван несколько раз для разных элементов 
//надо создавать модули так, чтобы он зависели только от передаваемых им аргументов