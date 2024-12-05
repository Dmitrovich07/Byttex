const thumbsSwiper = new Swiper('.thumbs-slider', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  watchSlidesProgress: true,
});


new Swiper('.swiper-gallery', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-gallery-next',
    prevEl: '.swiper-gallery-prev',
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
  initialSlide: 1, 
});


new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new Swiper('.swiper-response', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-response-next',
    prevEl: '.swiper-response-prev',
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

  },
});



new Swiper('.step_cards-swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-step_cards-next',
    prevEl: '.swiper-step_cards-prev',
  },
});