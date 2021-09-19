//================
// Button UP

window.onscroll = function () {
  let fixedUp = document.getElementById('upbutton');
  if (window.pageYOffset > 600) {
    fixedUp.classList.add('_fixed');
  } else {
    fixedUp.classList.remove('_fixed');
  }
};

//================

// Header

const headerElement = document.querySelector('.header__top'); // Следим за этим блоком
const menuFixed = document.querySelector('.header__menu'); // К этому блоку применяем _fixed
// А чтобы остальной контент резко не прыгал вверх - мы в стилях прописываем .header {position: absolute;}

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