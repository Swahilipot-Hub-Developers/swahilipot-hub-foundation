;(function () {
  // INITIALIZATION OF MEGA MENU
  // =======================================================
  const megaMenu = new HSMegaMenu('.js-mega-menu', {
    desktop: {
      position: 'left',
    },
  })

  // INITIALIZATION OF SHOW ANIMATIONS
  // =======================================================
  new HSShowAnimation('.js-animation-link')

  // INITIALIZATION OF BOOTSTRAP VALIDATION
  // =======================================================
  HSBsValidation.init('.js-validate', {
    onSubmit: (data) => {
      data.event.preventDefault()
      alert('Submited')
    },
  })

  // INITIALIZATION OF GO TO
  // =======================================================
  new HSGoTo('.js-go-to')

  // INITIALIZATION OF NAV SCROLLER
  // =======================================================
  new HsNavScroller('.js-nav-scroller')

  // INITIALIZATION OF TEXT ANIMATION (TYPING)
  // =======================================================
  const typed = HSCore.components.HSTyped.init('.js-typedjs')
})()(function () {
  // INITIALIZATION OF SWIPER
  // =======================================================
  var swiper = new Swiper('.js-swiper', {
    mousewheel: true,
    pagination: {
      el: '.js-swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      580: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    on: {
      imagesReady: function (swiper) {
        const preloader = swiper.el.querySelector('.js-swiper-preloader')
        preloader.parentNode.removeChild(preloader)
      },
    },
  })
})()
