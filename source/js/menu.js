'use strict';

const mainMenu = () => {

  const openMenuButton = document.querySelector('.navigation__toggle');
  const navigationToggleBtns = document.querySelectorAll('.navigation__toggle svg');
  const navigationMenu = document.querySelector('.navigation__list');
  const body = document.getElementsByTagName('body');

  const openMenu = () => {
    navigationToggleBtns.forEach((item) => {
      item.classList.toggle('isHidden');
    });

    navigationMenu.classList.toggle('isActive');


    body[0].classList.toggle('no-scroll');
  };


  openMenuButton.addEventListener('click', openMenu);

};

export {mainMenu};
