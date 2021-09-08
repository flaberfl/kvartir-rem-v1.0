//================
// Button UP

window.onscroll = function () {
  var fixedUp = document.getElementById('upbutton');
  if (window.pageYOffset > 600) {
    fixedUp.classList.add('_fixed');
  } else {
    fixedUp.classList.remove('_fixed');
  }

  // var fixedUp = document.querySelector('_upbutton');
};

//================

// Header

const headerElement = document.querySelector('.header__top');
const menuFixed = document.querySelector('.header__menu');

const callback = function (enteries, observer) {
  if (enteries[0].isIntersecting) {
    menuFixed.classList.remove('_fixed');
  } else {
    menuFixed.classList.add('_fixed');
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);


//===============