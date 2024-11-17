export const controlBurgerMenu = () => {
  const burger = document.querySelector('.js-burger');
  const navigation = document.querySelector('.header__nav');
  const body = document.body;

  if (!burger || !navigation) return


  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navigation.classList.toggle('is-mobile-show');
    body.classList.toggle('.disable-scroll')
  })
}