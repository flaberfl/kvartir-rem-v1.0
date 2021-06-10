$(document).ready(function () {

  $(".services-list .more").click(function () {
    var s = $(this).parents(".desc").find(".title").text();
    $("#popup-phone input[name='service']").val(s);
  });

  //header-margin
  var hNav = 0;

  $(window).on('load resize', function () {

    hNav = $('.header__nav').outerHeight();

  });


  $('.benefits .benefits__item img').hover(function () {

    var thisData = 0;

    $('.benefits .benefits__item').removeClass('active');

    $(this).parents('.benefits__item').addClass('active');

    thisData = $('.benefits .benefits__item.active').data('item-id');

    $('.benefits .benefits__tab-desc').removeClass('active');

    $('.benefits .benefits__tab-desc[data-item-id="' + thisData + '"]').addClass('active');

  });

  $('.benefits .benefits__item .item__title').hover(function () {

    var thisData = 0;

    $('.benefits .benefits__item').removeClass('active');

    $(this).parents('.benefits__item').addClass('active');

    thisData = $('.benefits .benefits__item.active').data('item-id');

    $('.benefits .benefits__tab-desc').removeClass('active');

    $('.benefits .benefits__tab-desc[data-item-id="' + thisData + '"]').addClass('active');

  });

  //slick-slider
  $('.sl-review').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  function windowSize() {

    var slGallery = 0,
      slSetificates = 0;

    if ($(window).width() < 992) {

      slGallery = $('.sl-gallery').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    } else {
      if (slGallery !== 0) {
        $('.sl-gallery').slick("unslick");
      }
    }
  }


  $(window).on('load resize scroll', function () {
    windowSize();
  });


  $('.btn-menu-toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav .nav-list').slideToggle(300);
  });


  $('.sub-menu-js + .sub-menu').slideUp();
  $('.sub-menu-js').click(function () {

    $(this).toggleClass('hover');

    $(this).find(' + .sub-menu').slideToggle(300);
    $(this).find(' + .sub-menu a').click(function () {
      $('.sub-menu-js + .sub-menu').slideUp();
      $('.header__nav .menu-triangle').removeClass('rotate');
    });

    $('.header__nav .menu-triangle').toggleClass('rotate');
  });

  //Фиксированная шапка
  $(function () {
    $(window).scroll(function () {

      var hPromo = $('.header__promo').innerHeight();

      if ($(this).scrollTop() >= 88) {
        $('.header__nav').addClass('fixed');
        $('.main').css({
          "marginTop": hNav
        });
      } else {
        $('.header__nav').removeClass('fixed');
        $('.main').removeAttr('style');
      }
    });
  });


  //Маска на ввод сотового номера
  $('input[name="phone"]').mask("+8 (999) 999-99-99");


  $('.popup').magnificPopup();


  //Плавный скрол
  $(".header__nav a[href*='#']").bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - $('.header__nav').innerHeight() + 20
    }, 500);
    e.preventDefault();
    return false;
  });



  $('.js-gallery').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });



  $('.form input, .form textarea').focusin(function () {
    $('.form input').parent().removeClass('active');
    $('.form textarea').parent().removeClass('active');
    $(this).parent().addClass('active');
  });





  //Успешная отправка заявки
  $(document).on('af_complete', function (event, response) {
    if (response.success) {
      $('#thanks .thanks__title').text(response.message);
      $.magnificPopup.open({
        items: {
          src: '#thanks'
        }
      });
    }
  });


});


//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function (e) {
  e.preventDefault();

  fieldName = $(this).attr('data-field');
  type = $(this).attr('data-type');
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == 'minus') {

      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();
      }
      if (parseInt(input.val()) == input.attr('min')) {
        $(this).attr('disabled', true);
      }

    } else if (type == 'plus') {

      if (currentVal < input.attr('max')) {
        input.val(currentVal + 1).change();
      }
      if (parseInt(input.val()) == input.attr('max')) {
        $(this).attr('disabled', true);
      }

    }
  } else {
    input.val(0);
  }
});
$('.input-number').focusin(function () {
  $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function () {

  minValue = parseInt($(this).attr('min'));
  maxValue = parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());

  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
  } else {
    alert('Sorry, the minimum value was reached');
    $(this).val($(this).data('oldValue'));
  }
  if (valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
  } else {
    alert('Sorry, the maximum value was reached');
    $(this).val($(this).data('oldValue'));
  }


});
$(".input-number").keydown(function (e) {
  // Allow: backspace, delete, tab, escape, enter and .
  if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode == 65 && e.ctrlKey === true) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    e.preventDefault();
  }
});

$(document).ready(function () {
  $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, "slow")
    })
  }
});

$(function () {
  $("#go-top").scrollToTop();
});