'use strict';

const tabs = () => {
  const tabsButtons = document.querySelectorAll('.about-card');
  const tabsButtonsParent = document.querySelector('.about__list');
  const tabsCards = document.querySelectorAll('.about-info');

  const hideContent = () => {
    tabsButtons.forEach((button) => {
      button.classList.remove('about-card--active');
    });
    tabsCards.forEach((card) => {
      card.classList.remove('about-info--active');
      card.classList.add('isHidden');
    });
  };

  const showContent = (i) => {
    tabsButtons[i].classList.add('about-card--active');
    tabsCards[i].classList.add('about-info--active');
    tabsCards[i].classList.remove('isHidden');
  };

  hideContent();
  showContent(1);

  tabsButtonsParent.addEventListener('click', (evt) => {
    const target = evt.target.closest('.about-card');
    if (target && target.classList.contains('about-card')) {
      tabsButtons.forEach((button, i) => {
        if (target === button) {
          hideContent();
          showContent(i);
        }
      });
    }
  });

};

export {tabs};
