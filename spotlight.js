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

function updateSliderHeight() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Set the initial height
  var initialHeight = 550;

  // Check if the screen width is greater than or equal to 1500px
  if (screenWidth >= 1500) {
    // Calculate the additional height based on the excess width beyond 1500px
    var excessWidth = screenWidth - 1500;
    var additionalHeight = Math.floor(excessWidth / 100) * 200;

    // Update the slider height
    var newHeight = initialHeight + additionalHeight;
    document.getElementById('slider').style.height = newHeight + 'px';
  } else {
    // Reset to the initial height if the screen width is less than 1500px
    document.getElementById('slider').style.height = initialHeight + 'px';
  }
}

// Call the function on page load and window resize
window.onload = updateSliderHeight;
window.onresize = updateSliderHeight;
