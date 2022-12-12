window.onscroll = () => {
    window.pageYOffset > 450
      ? (document.querySelector(".header").classList.add("header__active"),
        document
          .querySelector(".header__number")
          .classList.add("header__active-number"),
        document.querySelectorAll(".nav__link").forEach(function (e) {
          e.classList.add("nav__active-link");
        }))
      : (document.querySelector(".header").classList.remove("header__active"),
        document
          .querySelector(".header__number")
          .classList.remove("header__active-number"),
        document.querySelectorAll(".nav__link").forEach(function (e) {
          e.classList.remove("nav__active-link");
        }));
  };