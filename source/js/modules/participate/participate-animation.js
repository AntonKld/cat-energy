import {pageScroller} from '../../utils/init-locomotive.js';
import {gsap} from '../../vendor/gsap.min.js';
import {ScrollTrigger} from '../../vendor/scroll-trigger.min.js';

gsap.registerPlugin(ScrollTrigger);

const initTimeline = (sectionData, textData, imageData) => {
  let sectionCheck = document.querySelector(sectionData);
  if (sectionCheck === null) {
    return;
  }

  const tl = gsap.timeline({paused: true});
  const tl2 = gsap.timeline({paused: true});

  tl.to(textData, {opacity: 1, y: 0, duration: 0.3});
  tl2.to(imageData, {scale: 1, duration: 0.3});

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: textData,
    start: 'top bottom',
    animation: tl,
  });

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: imageData,
    start: 'top bottom',
    animation: tl2,
  });
};

const setParticipateAnimation = (sectionData, textData, imageData) => {
  initTimeline(sectionData, textData, imageData);
};

const initParticipateAnimation = () => {
  setParticipateAnimation('[data-gsap="participate-section"]', '[data-gsap="participate-text"]', '[data-gsap="participate-img"]');
};

export {initParticipateAnimation};
