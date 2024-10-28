const initCardSliders = () => {
  const sliderInitiate = (data) => {
    if (window.innerWidth < 768) {
      const cards = document.querySelector(data).querySelectorAll('.product-card');
      cards.forEach((card) => {
        card.classList.add('swiper-slide');
      });
      // eslint-disable-next-line no-undef, no-unused-vars
      const swiper = new Swiper(data, {
        speed: 400,
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
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
  if (document.querySelector('body').contains(document.querySelector('.item-card--slider-first'))) {
    sliderInitiate('.item-card--slider-first');
    window.addEventListener('resize', () => {
      sliderInitiate('.item-card--slider-first');
    });
  }

  if (document.querySelector('body').contains(document.querySelector('.item-card--slider-second'))) {
    sliderInitiate('.item-card--slider-second');
    window.addEventListener('resize', () => {
      sliderInitiate('.item-card--slider-second');
    });
  }

};

export {initCardSliders};
