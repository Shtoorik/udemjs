import jQuery from 'jquery';
import $ from 'jquery';
//главную сущность нужно импортировать

// const btn = $('#btn');

// console.log(btn);

jQuery(function () {
  $('.list-item:first').hover(function () {
    $(this).toggleClass('active');
  });

  //on лучше click, так как он eventListener
  $('.list-item:eq(2)').on('click', function () {
    $('.image:even').fadeToggle('slow');
  });

  $('.list-item:eq(4)').on('click', function () {
    $('.image:odd').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 2000);
  });

});