//slick slider
$(document).ready(function () {
  $(`.wrapper__content-block`).slick({
    infinite: false,
    swipe: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 361,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// jQuery
$(".wrapper").each(function () {
  let ths = $(this);
  ths.find(".wrapper__content-block").not(":first").hide();
  ths
    .find(".tab-block__tab-item")
    .click(function () {
      ths
        .find(".tab-block__tab-item")
        .removeClass("tab-block__tab-item_active")
        .eq($(this).index())
        .addClass("tab-block__tab-item_active");
      ths.find(".wrapper__content-block").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("tab-block__tab-item_active");
});

//fadeInUp
jQuery(".wrapper__content-block .content-block__content-item").addClass(
  "animated fadeInUp"
);
