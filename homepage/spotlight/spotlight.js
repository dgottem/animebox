document.addEventListener('DOMContentLoaded', function () {
  let sliderList = document.getElementById('slider-list');
  let sliderItems = document.querySelectorAll('.slider-item');
  let sliderDots = document.querySelectorAll('#slider-dots li');

  let lengthItems = sliderItems.length - 1;
  let activeSlide = 0;

  let refreshInterval = setInterval(() => { nextSlide() }, 6000);

  function nextSlide() {
    activeSlide = (activeSlide + 1 <= lengthItems) ? activeSlide + 1 : 0;
    reloadSlider();
  }

  function prevSlide() {
    activeSlide = (activeSlide - 1 >= 0) ? activeSlide - 1 : lengthItems;
    reloadSlider();
  }

  $('#slider').swipe({
    swipeLeft: function() {
      nextSlide();
    },
    swipeRight: function() {
      prevSlide();
    },
    threshold: 30
  });

  function reloadSlider() {
    sliderList.style.left = -sliderItems[activeSlide].offsetLeft + 'px';

    let lastActiveDot = document.querySelector('#slider-dots li.active-dot');
    lastActiveDot.classList.remove('active-dot');
    sliderDots[activeSlide].classList.add('active-dot');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { nextSlide() }, 6000);
  }

  sliderDots.forEach((li, key) => {
    li.addEventListener('click', () => {
      activeSlide = key;
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
