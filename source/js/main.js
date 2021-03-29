'use strict';

(function(){
  var pageHeader = document.querySelector('.page-header');
  var menu = document.querySelector('.menu');
  var headerToggle = document.querySelector('.page-header__toggle');


  menu.classList.remove('menu--nojs');
  pageHeader.classList.remove('page-header--nojs');

  headerToggle.addEventListener('click', function () {
    headerToggle.classList.toggle('page-header__toggle--opened');

    if (menu.classList.contains('menu--closed')) {
      menu.classList.remove('menu--closed');
      menu.classList.add('menu--opened');
    } else {
      menu.classList.add('menu--closed');
      menu.classList.remove('menu--opened');
    }
  });
})();

