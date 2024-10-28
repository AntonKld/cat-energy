import {pageScroller} from '../../utils/init-locomotive.js';
import {gsap} from '../../vendor/gsap.min.js';
import {ScrollTrigger} from '../../vendor/scroll-trigger.min.js';

let timeline = null;
let secondTimeline = null;
let thirdTimeline = null;
gsap.registerPlugin(ScrollTrigger);

const initTimeline = () => {
  if (timeline) { // если таймлайн создан
    timeline.seek(0).kill(); // отматываем к началу и удаляем
  }
  if (secondTimeline) { // если таймлайн создан
    secondTimeline.seek(0).kill(); // отматываем к началу и удаляем
  }
  if (thirdTimeline) { // если таймлайн создан
    thirdTimeline.seek(0).kill(); // отматываем к началу и удаляем
  }


  // eslint-disable-next-line no-undef
  timeline = gsap.timeline({paused: true}); // инициализируем таймлайн
  // eslint-disable-next-line no-undef
  secondTimeline = gsap.timeline({paused: true}); // инициализируем таймлайн
  // eslint-disable-next-line no-undef
  thirdTimeline = gsap.timeline({paused: true}); // инициализируем таймлайн


  timeline.to('.item-card--small', {scale: 1, duration: 0.3}); // задаем анимацию
  secondTimeline.to('.item-card--medium', {scale: 1, duration: 0.3}); // задаем анимацию
  thirdTimeline.to('.title--h2', {opacity: 1, y: 0, duration: 0.3}); // задаем анимацию


  // eslint-disable-next-line no-undef
  ScrollTrigger.create({
    scroller: pageScroller(), // указываем контейнер со скроллом (локо или нативный)
    trigger: '.item-card--small',
    start: 'top bottom',
    end: 'bottom 50%',
    scrub: false, // без scrub анимация не будет присоединена к скроллу
    animation: timeline, // наша анимация
  });
  // eslint-disable-next-line no-undef
  ScrollTrigger.create({
    scroller: pageScroller(), // указываем контейнер со скроллом (локо или нативный)
    trigger: '.item-card--medium',
    start: 'top bottom',
    end: 'bottom 50%',
    scrub: false, // без scrub анимация не будет присоединена к скроллу
    animation: secondTimeline, // наша анимация
  });
  // eslint-disable-next-line no-undef
  ScrollTrigger.create({
    scroller: pageScroller(), // указываем контейнер со скроллом (локо или нативный)
    trigger: '.title--h2',
    start: 'top bottom',
    end: 'bottom 50%',
    scrub: false, // без scrub анимация не будет присоединена к скроллу
    animation: thirdTimeline, // наша анимация
  });
};

initTimeline(); // ресайз не всегда отрабатывает при загрузке страницы, поэтому дублируем
const resizeObserver = new ResizeObserver(() => {
  initTimeline(); // вызываем по ресайзу
});
resizeObserver.observe(document.documentElement); // отслеживаем изменения размера корневого тега
