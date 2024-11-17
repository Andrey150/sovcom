import Accordion from 'accordion-js';

export const initAccordion = () => {
  const accordions = document.querySelectorAll('.js-accordion');

  if (!accordions.length) return;

  const options = {
    elementClass: 'js-accordion-item',
    triggerClass: 'js-accordion-header',
    panelClass: 'js-accordion-body'
  };

  accordions.forEach((item) => {
    new Accordion(item, options);
  });

};
