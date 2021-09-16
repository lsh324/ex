const swiper = new Swiper('.wrap', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect:'coverflow',
  grabCursor : true,
  coverflowEffect: {
    rotate: 50,
    stretch: -100,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView : "auto",
  spaceBetween : 0
});

const btnStart = document.querySelector('.auto>li:first-child');
const btnPause = document.querySelector('.auto>li:last-child');

btnStart.addEventListener('click', ()=>{
  swiper.autoplay.start();
});
btnPause.addEventListener('click',()=>{
  swiper.autoplay.stop();
});