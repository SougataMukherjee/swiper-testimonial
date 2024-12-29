let swiper = new Swiper(".swiper-container", {
  //   effect: "slide",
  //   effect: "cube",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  coverflowEffect: {
    //--effect 1
    //
    // rotate: 50,
    // modifier: 1,
    //--effect 2(carousel slider)
    //
    rotate: 0,
    modifier: 2,
    stretch: 0,
    depth: 100,

    //--effect 3
    //
    // rotate: 20,
    // stretch: -20,
    // depth: 150,
    // modifier: 1,
    slideShadows: true,
  },

  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true, // Enable dynamic bullets
  },
  speed: 1000,
});
const swiperContainer = document.querySelector(".swiper-container");
swiper.on("mouseenter", function () {
  swiper.autoplay.stop();
});

swiper.on("mouseleave", function () {
  swiper.autoplay.start();
});
