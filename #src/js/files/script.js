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


const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500, // скорость
  delay: 100, // задержка перед анимацией
  // reset: true
})

sr.reveal('.promo__title', {distance: '120px', origin:'right'})
sr.reveal('.features__item,.work-plane__list-item', {interval: 100, dilay: 50})
sr.reveal('.order-form__column--in', {origin:'left'})
sr.reveal('.order-form__column--txt', {origin:'right'})
sr.reveal('.contact-info__item', {interval: 100, dilay: 50, origin:'bottom'})
