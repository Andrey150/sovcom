
import '../css/style.scss'

import { controlBurgerMenu } from './functions/controlBurgerMenu';
import { initAccordion } from './functions/initAccordion';


document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth = "1439px") {
    initAccordion()
  }
  controlBurgerMenu();

});
