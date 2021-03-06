(() => {
    const mobileMenu = document.querySelector('.menu__mobile');
    const openMenuBtn = document.querySelector('.menu-open');
    const closeMenuBtn = document.querySelector('.menu-close');
    const menuNavigation = document.querySelector('.navigation');
    const buyNow = document.querySelector('.menu__button--mobile');

    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');

      const scrollLockMethod = !isMenuOpen
          ? 'disableBodyScroll'
          : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    menuNavigation.addEventListener('click', toggleMenu);
    buyNow.addEventListener('click', toggleMenu);

    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 1280px)').addEventListener('change', (e) => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });

})();