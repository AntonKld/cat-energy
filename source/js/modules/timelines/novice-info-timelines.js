import {pageScroller} from '../../utils/init-locomotive.js';
import {gsap} from '../../vendor/gsap.min.js';
import {ScrollTrigger} from '../../vendor/scroll-trigger.min.js';
const section = document.querySelector('[data-section="novice-info"]');
let clicker = '';
let clickerBar = '';

if (section !== null) {
  clicker = section.querySelector('[data-novice="clicker-bar"]');
  clickerBar = section.querySelector('[data-novice="clicker-inner"]');
}

gsap.registerPlugin(ScrollTrigger);

const initTimeline = () => {
  if (section === null) {
    return;
  }
  const tl = gsap.timeline({paused: true});
  const tl2 = gsap.timeline({paused: true});
  tl.to('[data-novice="progress-bar-inner"]', {duration: 2, strokeDashoffset: 0});
  tl2.to(clickerBar, {duration: 0.3, width: `calc(${(clickerBar.offsetWidth / clicker.offsetWidth) * 100 + 22}% + 4px)`}, '<');

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: '[data-section="novice-info"]',
    start: 'top bottom',
    animation: tl,
  });

  ScrollTrigger.create({
    scroller: pageScroller(),
    trigger: '[data-novice="clicker-bar"]',
    start: 'top bottom',
    animation: tl2,
  });
};

const setNoviceInfoAnimation = () => {
  initTimeline();
};

export {setNoviceInfoAnimation};
