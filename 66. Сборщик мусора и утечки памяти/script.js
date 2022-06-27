function func() {
  // smth = 'srt';
  //window.smth - глобальная переменная автоматически не удалится
}

const someRes = getData();
const node = document.querySelector('.class');

setInterval(function () {
  if (node) {
    node.innerHTML = someRes;
  }
}, 1000);
//если удалим node из DOM, то в памяти он все равно останется, так как есть ссылка в setInterval
//!останавливайте ненужные таймеры

//также раньше была утечка памяти, связанной с тем, что обработчик события мог оставаться после удаления элемента
//на который он назначен, и по этому элементы, на которые внутри обработчика события были ссылки, не удалялись
//однако в современных браузерах это не проблема и они научились очищать ненужные обработчики

function outer() {
  const potentiallyHugeArray = [];
  return function inner() {
    potentiallyHugeArray.push('Hello');
    console.log('hi');
  };
}

const sayHello = outer();

//в данном коде у нас через замыкание сохраняется огромный массив, надо иметь в виду

function createElement() {
  const div=document.createElement('div');
  div.id='test';
  // return div;
  document.body.append(testDiv);
}

// const testDiv=createElement();

createElement();

// document.body.append(testDiv);

function deleteElement() {
  document.body.removeChild(document.getElementById('test'));
}

deleteElement();

//в данном коде элемент удаляется из DOM, но в JS данный элемент сохраниться из-за testDiv