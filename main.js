
import './src/css/style.scss'

import { controlBurgerMenu } from './src/js/functions/controlBurgerMenu';
import { initAccordion } from './src/js/functions/initAccordion';


document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth = "1439px") {
    initAccordion()
  }
  controlBurgerMenu();

});
