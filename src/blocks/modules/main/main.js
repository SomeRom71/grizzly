$(".slider").slick({
  prevArrow: $(".slider-arrow_prev"),
  nextArrow: $(".slider-arrow_next"),
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
});
