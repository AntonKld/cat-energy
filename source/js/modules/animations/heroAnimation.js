import {gsap} from '../../vendor/gsap.min.js';

// Анимация для экранов шире 768 пикселей
const animateLargeScreen = (imgBg, imgContent) => {
  setTimeout(() => {
    gsap.to(imgBg, {
      duration: 1,
      y: 0,
      scale: 1,
      ease: 'power3.out',
      top: 0,
    });
    gsap.to(imgContent, {
      x: 1,
      y: 1,
      duration: 1,
      opacity: 1,
    });
  }, 500);
};

// Анимация для экранов уже 768 пикселей
const animateSmallScreen = (imgMob) => {
  setTimeout(() => {
    gsap.to(imgMob, {
      duration: 1,
      scale: 1,
      opacity: 1,
    });
  }, 300);
};

// Главная функция анимации
export const initHeroAnimate = (imgBg, imgContent, imgMob) => {
  let screenWidth = window.screen.width;
  if (screenWidth > 1023) {
    animateLargeScreen(imgBg, imgContent);
  } else {
    animateSmallScreen(imgMob);
  }

  // Обработчик изменения размера окна
  window.addEventListener('resize', () => {
    screenWidth = window.screen.width;
    if (screenWidth > 1023) {
      animateLargeScreen(imgBg, imgContent);
    } else {
      animateSmallScreen(imgMob);
    }
  });
};
