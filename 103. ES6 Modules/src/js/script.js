// import { one, two } from './main';
// import { one as first } from './main'; //переименовываем
import * as data  from './main.js'; //взять все, это будет как объект
import sayHip from './main.js';//экспорт по умолчанию на прямую экспортируется и может использоваться без объекта
// import {default ad sayHip} from './main'; как выглядит внутри, можно любое имя задать
//экспорт по умолчанию может быть только один

// console.log(first);
console.log(data.one);
// data.sayHi();
sayHip();
// console.log(`${first} and ${two}`);

// import 'slick-slider'; Такой синтаксис используется если мы установили npm пакет
