import '../js/index';
import {modal} from './modal';
import {mainMenu} from './menu';
import {tabs} from './tabs';

window.addEventListener('DOMContentLoaded', () => {
  modal();
  mainMenu();
  tabs();
});

