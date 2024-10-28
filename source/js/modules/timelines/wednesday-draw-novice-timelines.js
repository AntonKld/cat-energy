import {pageScroller} from '../../utils/init-locomotive.js';
import {gsap} from '../../vendor/gsap.min.js';
import {ScrollTrigger} from '../../vendor/scroll-trigger.min.js';

gsap.registerPlugin(ScrollTrigger);

const initTimeline = () => {
  if (document.querySelector('[data-section="wednesday-novice"]') === null) {
    return;
  }
  const tl = gsap.timeline({paused: true});
  const tl2 = gsap.timeline({paused: true});

  tl.to('[data-novice="wednesday-title"]', {opacity: 1, y: 0, duration: 0.3});
  tl2.to('[data-novice="wednesday-card"]', {scale: 1, duration: 0.3});

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: '[data-section="wednesday-novice"]',
    start: 'top 60%',
    animation: tl,
  });

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: '[data-section="wednesday-novice"]',
    start: 'top 60%',
    animation: tl2,
  });
};

const setWednesdayDrawNoviceAnimation = () => {
  initTimeline();
};

export {setWednesdayDrawNoviceAnimation};
