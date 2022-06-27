'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
}

User.prototype.exit = function (name) {
  console.log(1);
};

const ivan = new User('ivan', 28);
const alex = new User('alex', 24);