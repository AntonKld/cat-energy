import {pageScroller} from '../../utils/init-locomotive.js';
import {gsap} from '../../vendor/gsap.min.js';
import {ScrollTrigger} from '../../vendor/scroll-trigger.min.js';

gsap.registerPlugin(ScrollTrigger);

const initTimeline = (sectionData, titleData, cardData) => {
  let sectionCheck = document.querySelector(sectionData);
  if (sectionCheck === null) {
    return;
  }

  const tl = gsap.timeline({paused: true});
  const tl2 = gsap.timeline({paused: true});

  tl.to(titleData, {opacity: 1, y: 0, duration: 0.3});
  tl2.to(cardData, {scale: 1, duration: 0.3});

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: titleData,
    start: 'top bottom',
    animation: tl,
  });

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: cardData,
    start: 'top bottom',
    animation: tl2,
  });
};

const setPartnerAnimation = (sectionData, titleData, cardData) => {
  initTimeline(sectionData, titleData, cardData);
};

const initParterAnimation = () => {
  setPartnerAnimation('[data-gsap="partner-section"]', '[data-gsap="partner-title"]', '[data-gsap="partner-card"]');
};

export {initParterAnimation};
