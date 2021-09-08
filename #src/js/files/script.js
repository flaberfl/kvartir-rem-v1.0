window.onscroll = function () {
  var fixedUp = document.getElementById('upbutton');
  if (window.pageYOffset > 800) {
    fixedUp.classList.add('_fixed');
  } else {
    fixedUp.classList.remove('_fixed');
  }
};