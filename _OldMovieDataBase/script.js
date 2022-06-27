"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');//конвертация в число, если пусто то ноль

    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Один из последних просмотренных фильмов?', '');
      while (a == null || a.length == 0 || a.length > 50) {
        alert("Вы ввели пустое или длиннее 50 название фильма");
        a = prompt('Один из последних просмотренных фильмов?', '');
      }
      let b = prompt('На сколько оцените его?', '');
      while (b == null || b.length == 0 || b.length > 50) {
        alert("Вы ввели пустое или длиннее 50 оценку");
        b = prompt('На сколько оцените его?', '');
      }
      this.movies[a] = b;
    }
  },
  detectPersonalLevel() {
    if (this.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (this.count <= 30) {
      console.log("Вы классический зритель");
    }
    else if (this.count > 30) {
      console.log("Вы киноман");
    }
    else {
      console.log("error");
    }
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(this);
    }
  },
  writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      while (genre === null || genre === "") {
        alert("не то ввели");
        genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      }
      this.genres[i] = genre;
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB() {
    this.privat = !this.privat;
  }
};
console.log(typeof ([] + false - null + true));
console.log(typeof (+"Infinity"));
//[] -> "" 
