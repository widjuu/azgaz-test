// jQuery
$(".wrapper").each(function () {
  let ths = $(this);
  ths.find(".content-block").not(":first").hide();
  ths
    .find(".tab-block__tab-item")
    .click(function () {
      ths
        .find(".tab-block__tab-item")
        .removeClass("tab-block__tab-item_active")
        .eq($(this).index())
        .addClass("tab-block__tab-item_active");
      ths.find(".content-block").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("tab-block__tab-item_active");
});
