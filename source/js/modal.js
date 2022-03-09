'"use strict';

const modal = () => {
  const openModalButton = document.querySelector('.navigation__btn');
  const modalWindow = document.querySelector('.modal');
  const body = document.getElementsByTagName('body');

  const escPressHandler = (evt) => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const windowClickHandler = (evt) => {
    const target = evt.target;
    if (target === modalWindow) {
      closeModal();
    }
  };

  const openModal = () => {
    modalWindow.classList.remove('hidden');
    document.addEventListener('keydown', escPressHandler);
    document.addEventListener('click', windowClickHandler);
    body[0].classList.add('no-scroll');
  };

  const closeModal = () => {
    modalWindow.classList.add('hidden');
    document.removeEventListener('keydown', escPressHandler);
    document.removeEventListener('click', windowClickHandler);
    body[0].classList.remove('no-scroll');
  };

  openModalButton.addEventListener('click', openModal);

};

export {modal};
