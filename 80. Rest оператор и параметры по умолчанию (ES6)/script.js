const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

//rest пишется последним, массив неопределенного количества аргументов

log('a','b','c','d');

function calc(number = 2, bas = 2) {
  console.log(number*bas);
  //старый прием bas=bas||2;
}
calc();