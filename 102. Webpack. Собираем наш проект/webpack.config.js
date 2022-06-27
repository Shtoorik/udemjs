'use strict';

let path = require('path');

module.exports = {
  mode: 'development',//режим работы
  entry: './src/js/script.js',
  //основной файл с зависимостями require и с importaми
  output: {
    //файл выхода
    filename: 'bundle.js',//название
    path: __dirname + '/dist/js'//куда складывать 
    //__dirname - корень папки
  },
  watch: true,
  //webpack после вызова будет отслеживать изменения
  //в файлах и автоматически дальше собирать проект

  devtool: "source-map",
  //после сборки файл нечитаем, соурсмап хранит исходники

  module: {}//модули джс
  //также есть свойство плагинс
};
