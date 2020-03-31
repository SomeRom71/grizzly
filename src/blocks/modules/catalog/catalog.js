$(".filter-list.scroll").niceScroll({
  autohidemode: false,
  cursorcolor: "rgba(12, 77, 162, 0.07)",
  cursorwidth: "8px",
});

$(".slider2").slick({
  slidesToShow: 3,
  arrows: true,
  dots: true,
  prevArrow: $(".slider2-arrow_prev"),
  nextArrow: $(".slider2-arrow_next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})
