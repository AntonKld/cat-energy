import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {initCardSliders} from './modules/sliders/init-card-sliders';
import {initLocomotiveScroll, locomotive} from './utils/init-locomotive';
import {initScrollTrigger} from './utils/init-scroll-trigger';
import './modules/timelines/wednesday-draw-timelines.js';
import {setNoviceCountdown} from './modules/countdown/novice-countdown';
import {setWinnerForwardingAnimation} from './modules/winner-forwarding/wf-animation';
import {initPaketBonusSlider} from './modules/sliders/init-paket-bonus-slider';
import {paketBonusTimelenes} from './modules/timelines/paket-bonus-timelenes';
import {setNoviceInfoAnimation} from './modules/timelines/novice-info-timelines';
import {setNoviceClicker} from './modules/clicker/novice-clicker';
import {setWednesdayDrawNoviceAnimation} from './modules/timelines/wednesday-draw-novice-timelines';
import {setWednesdayDrawNoviceSwiper} from './modules/sliders/wednesday-draw-novice-slider';
import {initPrizesSlider} from './modules/sliders/init-prizes-slider';
import {setPrizesAnimation} from './modules/timelines/prizes-timelines';
import {setProgressButtonAnimation} from './modules/timelines/progress-button-timelines';
import {initHeroBtn} from './modules/heroBtn.js';
import {initWinners} from './modules/list-winners/list-winners.js';
import {initHeroAnimate} from './modules/animations/heroAnimation.js';
import {initMobilesWinners} from './modules/list-winners/winnersMobile.js';
import {initParticipateAnimation} from './modules/participate/participate-animation';
import {initPartnerSlider} from './modules/sliders/partner-slider';
import {initParterAnimation} from './modules/partner/partner-animation';
import {initBurgerMenu} from './modules/burger-menu/burger.js';


window.addEventListener('DOMContentLoaded', () => {
  initHeroAnimate('[data-hero-bg]', '[data-hero-img]', '[data-hero-img-mob]');
  initHeroAnimate('[data-hero-search-bg]', '[data-hero-search-img]', '[data-hero-search-img-mob]');
  initHeroBtn();
  initParticipateAnimation();
  initWinners();
  initMobilesWinners();
  initBurgerMenu();
  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initLocomotiveScroll();
    initScrollTrigger();
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    initCardSliders();
    setWinnerForwardingAnimation();
    initPaketBonusSlider();
    paketBonusTimelenes();
    setNoviceInfoAnimation();
    setNoviceCountdown();
    setNoviceClicker();
    setWednesdayDrawNoviceSwiper();
    setWednesdayDrawNoviceAnimation();
    initPrizesSlider('[data-prizes-slider="prizes-slider"]');
    initPrizesSlider('[data-prizes-slider="prizes-more-slider"]');
    setPrizesAnimation('[data-prizes-section="prizes-soon"]', '[data-prizes-title="prizes-soon-title"]', '[data-prizes-card="prizes-soon-card"]');
    setPrizesAnimation('[data-prizes-section="prizes-more"]', '[data-prizes-title="prizes-more-title"]', '[data-prizes-card="prizes-more-card"]');
    setPrizesAnimation('[data-prizes-section="september-draw"]', '[data-prizes-title="september-draw-title"]', '[data-prizes-card="september-draw-card"]');
    initPartnerSlider();
    initParterAnimation();
    setProgressButtonAnimation();

    setTimeout(() => {
      locomotive.update();
    }, 10);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
