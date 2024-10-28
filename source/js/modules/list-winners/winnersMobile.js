import scrollLock from '../../vendor/scroll-lock.min.js';
export const initMobilesWinners = () => {
  if (document.contains(document.querySelector('.list-winners'))) {
    const winnersList = document.querySelector('.list-winners');
    const selectButton = document.querySelector('.custom-select__button');
    const overlay = document.querySelector('.list-winners__overlay');
    const selectItems = document.querySelectorAll('.custom-select__item');

    const showOverlay = () => {
      overlay.classList.remove('list-winners__overlay--hidden');
      overlay.classList.add('list-winners__overlay--shown');
      scrollLock.disablePageScroll();
      document.addEventListener('keydown', handleEscapeKey);
    };

    const hideOverlay = () => {
      overlay.classList.remove('list-winners__overlay--shown');
      overlay.classList.add('list-winners__overlay--hidden');
      scrollLock.enablePageScroll();
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        hideOverlay();
      }
    };

    const initMobileSelectWinners = () => {
      if (document.contains(winnersList) && document.documentElement.clientWidth < 1024) {
        selectButton.addEventListener('click', showOverlay);
        document.addEventListener('keydown', handleEscapeKey);
        bindSelectItems();
        bindOverlayClick();
      }
    };

    const bindSelectItems = () => {
      if (document.documentElement.clientWidth < 1024) {
        selectItems.forEach((item) => {
          item.addEventListener('click', () => {
            hideOverlay();
          });
        });
      }
    };

    const bindOverlayClick = () => {
      overlay.addEventListener('click', hideOverlay);
    };

    const handleResize = () => {
      if (document.documentElement.clientWidth < 1024) {
        if (document.contains(winnersList)) {
          initMobileSelectWinners();
          bindOverlayClick();
          bindSelectItems();
        }
        if (document.contains(document.querySelector('.is-open'))) {
          showOverlay();
        }
      } else {
        if (document.contains(winnersList)) {
          scrollLock.enablePageScroll();
          selectButton.removeEventListener('click', showOverlay);
          hideOverlay();
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial calls
    bindOverlayClick();
    bindSelectItems();
  }
};
