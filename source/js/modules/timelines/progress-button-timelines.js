import {pageScroller} from '../../utils/init-locomotive.js';
import {gsap} from '../../vendor/gsap.min.js';
import {ScrollTrigger} from '../../vendor/scroll-trigger.min.js';

gsap.registerPlugin(ScrollTrigger);

let count = 0;

const initTimeline = () => {
  if (document.querySelector('.progress-button') === null) {
    return;
  }
  Array.from(document.querySelectorAll('.progress-button')).forEach((item) => {
    item.dataset.progress = `${count}`;
    count = count + 1;
  });

  const resetItem = (item) => {
    item.style = '';
  };

  if (window.matchMedia('(max-width: 767px)').matches) {
    Array.from(document.querySelectorAll('.progress-button')).forEach((item) => {
      const resetButton = () => resetItem(item);
      const tl = gsap.timeline({paused: true, onComplete: resetButton});

      tl.to(`[data-progress="${item.dataset.progress}"]:not(:disabled)`, {backgroundSize: '100% 100%', color: '#ffffff', duration: 0.3});
      tl.to(`[data-progress="${item.dataset.progress}"]:not(:disabled)`, {backgroundSize: '0% 100%', color: '#0088fe', duration: 0.3}, '+=0.40');

      ScrollTrigger.create({
        scroller: pageScroller(),
        trigger: `[data-progress="${item.dataset.progress}"]`,
        start: 'top bottom',
        animation: tl,
      });
    });
  }
};

const setProgressButtonAnimation = () => {
  initTimeline();
};

export {setProgressButtonAnimation};
