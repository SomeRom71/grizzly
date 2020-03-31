$('.info-tab__item').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.info-content__item[data-tab="'+ id +'"]');

   $('.info-tab__item.active').removeClass('active');
   $(this).addClass('active'); // 2

   $('.info-content__item.active').removeClass('active');
   content.addClass('active');
});

$('.slider3').slick({
  slidesToShow: 2,
  prevArrow: $(".slider3-arrow_prev"),
  nextArrow: $(".slider3-arrow_next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})
