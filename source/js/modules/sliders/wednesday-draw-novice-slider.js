let swiper = '';
let init = false;

const setSwiper = () => {
  let slides = 0;
  if (document.querySelectorAll('[data-novice="wednesday-card"]').length === 1) {
    document.querySelector('[data-swiper="wednesday-draw-novice"]').style.width = '156px';
    slides = 1;
  } else {
    slides = 'auto';
  }
  swiper = new window.Swiper('[data-swiper="wednesday-draw-novice"]', {
    speed: 400,
    slidesPerView: slides,
    spaceBetween: 16,
    loop: true,
    allowTouchMove: true,
  });
  init = true;
};

const observer = new ResizeObserver((entry) => {
  if (!entry) {
    return;
  }
  if (window.matchMedia('(max-width: 767px)').matches && init === false) {
    setSwiper();
    document.querySelectorAll('[data-novice="wednesday-card"]').forEach((element) => {
      element.style.transform = 'scale(1)';
    });
  }
  if (window.matchMedia('(min-width: 768px)').matches && init === true) {
    swiper.destroy();
    init = false;
    document.querySelector('[data-swiper="wednesday-draw-novice"]').style.width = '';
    document.querySelectorAll('[data-novice="wednesday-card"]').forEach((element) => {
      element.style.transform = 'scale(1)';
    });
  }
});


const setWednesdayDrawNoviceSwiper = () => {
  if (document.querySelector('[data-swiper="wednesday-draw-novice"]') === null) {
    return;
  }
  if (window.matchMedia('(max-width: 767px)').matches) {
    setSwiper();
  }
  observer.observe(document.querySelector('[data-section="wednesday-novice"]'));
};

export {setWednesdayDrawNoviceSwiper};
