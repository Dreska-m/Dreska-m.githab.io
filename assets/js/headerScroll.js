$(function () {
  let header = $(".header");
  let header__inner = $(".header__inner");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      header.addClass("header_fixed");
      header__inner.addClass("header__inner_fixed");
    } else {
      header.removeClass("header_fixed");
      header__inner.removeClass("header__inner_fixed");
    }
  });
});
