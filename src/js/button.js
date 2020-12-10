(() => {
  const menuBtnRef = document.querySelector('[data-filter-button]');
  const mobileMenuRef = document.querySelector('.filter-menu');
  const mobileMenuCont = document.querySelector(".header_menu_container")
  

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is_open');
    mobileMenuCont.classList.toggle('is_open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is_open');
  });
})();
