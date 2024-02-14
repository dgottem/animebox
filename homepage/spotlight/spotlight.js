document.addEventListener('DOMContentLoaded', function () {
  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let dots = document.querySelectorAll('.dots li');

  let lengthItems = items.length - 1;
  let active = 0;

  let refreshInterval = setInterval(() => { nextSlide() }, 6000);

  function nextSlide() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  }

  function prevSlide() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
  }

  $('.slider').swipe({
    swipeLeft: function() {
      nextSlide();
    },
    swipeRight: function() {
      prevSlide();
    },
    threshold: 30
  });

  function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.dots li.active-dot');
    last_active_dot.classList.remove('active-dot');
    dots[active].classList.add('active-dot');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { nextSlide() }, 6000);
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

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
    }
  });
});
