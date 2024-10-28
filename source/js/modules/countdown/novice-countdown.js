const countdown = document.querySelector('[data-countdown="novice"]');

const update = (targetDate, element, timer) => {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  element.textContent = `${days} дня ${hours} часов ${minutes} минут`;
  if (distance <= 0) {
    clearInterval(timer);
    element.textContent = 'Уже идет!';
  }
};

const setNoviceCountdown = () => {
  if (countdown === null) {
    return;
  }
  const currentDate = new Date().getTime();
  const targetDate = new Date(currentDate + 4096 * 60000);
  const updateCountdown = () => update(targetDate, countdown, timer);
  const timer = setInterval(updateCountdown, 1000);
};

export {setNoviceCountdown};
