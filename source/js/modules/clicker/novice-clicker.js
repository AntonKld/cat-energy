const section = document.querySelector('[data-section="novice-info"]');
let button = '';
let clicker = '';
let clickerBar = '';

if (section !== null) {
  button = section.querySelector('[data-novice="clicker-button"]');
  clicker = section.querySelector('[data-novice="clicker-bar"]');
  clickerBar = section.querySelector('[data-novice="clicker-inner"]');
}

let clicks = 0;

const updateClicks = () => {
  if (clicks >= 5) {
    button.setAttribute('disabled', true);
    document.activeElement.blur();
  }
};

const onClick = () => {
  clicks = clicks + 1;
  clickerBar.style.width = `${clickerBar.offsetWidth + (clicker.offsetWidth * 0.05)}px`;
  updateClicks();
};

const setNoviceClicker = () => {
  if (section === null || button === null || clickerBar === null) {
    return;
  }
  button.addEventListener('click', onClick);
};

export {setNoviceClicker};
