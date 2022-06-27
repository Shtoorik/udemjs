//* Присваивание объекта по ссылке

/* const obj = {
  a: 5,
  b: 1
};
const copy = obj;
copy.a = 10;
console.log(obj);
console.log(copy); */

//* Поверхностное копирование вручную

/* function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 2,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10; // в numbers.a=2, то есть не изменилось
newNumbers.c.x = 10; // в numbers.с.x=2, то есть изменилось и там, и там

console.log(numbers);
console.log(newNumbers); */

//* Поверхностная копия с помощью Object.assign

/* const add = {
  d: 17,
  e: 20,
  c: {
    x: 2,
    y: 4
  }
};

const clone = Object.assign({}, add); // Также может создать копию объединения объектов

clone.d = 20;
clone.c.x = 99;
console.log(add);
console.log(clone); // Аналогично примеру выше */

//* Копирование массивов

/* const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // slice без аргументов делает копию массива

newArray[1] = 'ass';
console.log(oldArray);
console.log(newArray); */

//* Spread оператор

/* const video = ['youtube', 'vimeo', 'tube'],
  blogs = ['lg', 'bl'],
  internet = [...video, ...blogs, 'cop']; // троеточие преобразует массив в набор элементов

console.log(internet); */

/* function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num); */

//* Копия массива и поверхностная копия объекта с помощью Spread

/* const array = ['a', 'b'];

const superArray = [...array];

const q = {
  one: 1,
  two: 2,
  c: {
    x: 2,
    y: 4
  }
};

const newObj = { ...q };

newObj.two = 3;
newObj.c.x = 999; // Аналогично

console.log(q);
console.log(newObj); */