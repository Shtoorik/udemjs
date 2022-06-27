'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcAreal() {
    return this.height * this.width;
  }
}

class ColoredRectangleWidthText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);//конструктор родителя, должно быть на первой строке конструктора
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWidthText(25, 10, 'hi', 'red');

div.showMyProps();
console.log(div.calcAreal());

// const square=new Rectangle(10,10);
// const long=new Rectangle(20,100);

// console.log(long.calcAreal());
// console.log(square.calcAreal());