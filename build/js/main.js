'use strict';

(function(){
  var pageHeader = document.querySelector('.page-header');
  var menu = pageHeader.querySelector('.page-header__menu');
  var headerToggle = pageHeader.querySelector('.page-header__toggle');

  pageHeader.classList.remove('page-header--nojs');

  headerToggle.addEventListener('click', function () {
    headerToggle.classList.toggle('page-header__toggle--opened');

    if (menu.classList.contains('menu--closed')) {
      menu.classList.remove('menu--closed');
      menu.classList.add('menu--opened');
      document.body.style.overflowY = 'hidden';
    } else {
      menu.classList.add('menu--closed');
      menu.classList.remove('menu--opened');
      document.body.style.overflowY = 'visible';
    }
  });
})();
