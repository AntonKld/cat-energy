const partnerSlider = document.querySelector('[data-partner-slider="partner-slider"]');
let partnerSwiper;

const initPartnerSlider = () => {
  if (partnerSlider) {
    let breakpoint = window.matchMedia('(min-width: 768px)');

    const breakpointChecker = () => {
      if (breakpoint.matches === true) {
        if (partnerSwiper) {
          partnerSwiper.destroy(true, true);
          return;
        }
      } else if (breakpoint.matches === false) {
        enableSlider();
      }
    };

    const enableSlider = () => {
      partnerSwiper = new window.Swiper(partnerSlider, {
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        allowTouchMove: true,
      });
    };
    breakpointChecker();
    breakpoint.addEventListener('change', breakpointChecker);
  }
};

export {initPartnerSlider};
