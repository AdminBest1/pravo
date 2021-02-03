// Подключаем слайдер с автоматической прокруткой
$('.multiple-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        //замена стандартных стрелок на мои
        prevArrow: "<img src='img/intro/arrow_left.svg' class='prev' alt='1'>", 
        nextArrow: "<img src='img/intro/arrow_right.svg' class='next' alt='2'>",
      });
