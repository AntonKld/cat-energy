import {gsap} from '../../vendor/gsap.min.js';
import {ScrollTrigger} from '../../vendor/scroll-trigger.min.js';
import {pageScroller} from '../../utils/init-locomotive.js';

gsap.registerPlugin(ScrollTrigger);

const setWinnerForwardingAnimation = () => {
  if (document.querySelector('[data-section="wf-section"]') === null) {
    return;
  }
  const tl = gsap.timeline({paused: true});
  tl.to('[data-title="wf-title"]', {duration: 0.3, opacity: 1, y: 0});

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: '[data-section="wf-section"]',
    start: '50% bottom',
    animation: tl,
  });
};

export {setWinnerForwardingAnimation};
