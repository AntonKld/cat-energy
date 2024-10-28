const initPaketBonusSlider = () => {
  const sliderInitiate = (data) => {
    if (window.innerWidth < 768) {
      const cards = document.querySelector(data).querySelectorAll('.product-card');

      if (cards) {
        cards.forEach((card) => {
          card.classList.add('swiper-slide');
        });
      }

      // eslint-disable-next-line no-undef, no-unused-vars
      const swiper = new Swiper(data, {
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 16,
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        500: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        grabCursor: true,
      });
    } else {
      const swiper = document.querySelector(data).swiper;
      if (document.querySelector(data).classList.contains('swiper-initialized')) {
        swiper.destroy(true, true);
        const cards = document.querySelector(data).querySelectorAll('.product-card');
        cards.forEach((card) => {
          card.classList.remove('swiper-slide');
        });
      }
    }
  };
  if (document.querySelector('body').contains(document.querySelector('.paket-bonus__slider'))) {
    sliderInitiate('.paket-bonus__slider');
    window.addEventListener('resize', () => {
      sliderInitiate('.paket-bonus__slider');
    });
  }
};

export {initPaketBonusSlider};
