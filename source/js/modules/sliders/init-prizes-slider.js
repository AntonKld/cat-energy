const initPrizesSlider = (initSlider) => {
  const prizesSlider = document.querySelector(initSlider);
  let prizesSwiper;

  if (prizesSlider) {
    let breakpoint = window.matchMedia('(min-width: 768px)');

    const breakpointChecker = () => {
      if (breakpoint.matches === true) {
        if (prizesSwiper) {
          prizesSwiper.destroy(true, true);
          return;
        }
      } else if (breakpoint.matches === false) {
        enableSlider();
      }
    };

    const enableSlider = () => {
      prizesSwiper = new window.Swiper(prizesSlider, {
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        allowTouchMove: true,
        grabCursor: true,
      });
    };
    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};

export {initPrizesSlider};
