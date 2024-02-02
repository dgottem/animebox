document.addEventListener('DOMContentLoaded', function () {
  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.dots li'); // Updated the selector for dots

  let lengthItems = items.length - 1;
  let active = 0;

  next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  }

  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
  }

  let refreshInterval = setInterval(() => { next.click() }, 6000);

  function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.dots li.active-dot'); // Updated the selector for last_active_dot
    last_active_dot.classList.remove('active-dot');
    dots[active].classList.add('active-dot');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 6000);
  }

  dots.forEach((li, key) => {
    li.addEventListener('click', () => {
      active = key;
      reloadSlider();
    });
  });

  window.onresize = function (event) {
    reloadSlider();
  };
});