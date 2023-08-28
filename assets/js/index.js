const currentLanguageDesk = document.querySelector(
  ".language-switcher__current"
);
const languageDropBoxDesk = document.querySelector(".language-switcher__btns");

const desktopNavBar = document.querySelector(".nav__wrapper");

const currentLanguageMobi = document.querySelector(
  "#language-switcher__current-mobile"
);
const languageDropBoxMobi = document.querySelector(
  "#language-switcher__btns-mobile"
);

const mobileNavBar = document.querySelector(".mobile-nav__main");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navPopup = document.querySelector(".mobile-nav__popup");
const closePopupBtn = document.querySelector(".popup__close-btn");
const popupLinks = document.querySelectorAll(".mobile-nav__link");

currentLanguageDesk.addEventListener("click", (e) => {
  languageDropBoxDesk.classList.toggle("hide");
});

currentLanguageMobi.addEventListener("click", (e) => {
  languageDropBoxMobi.classList.toggle("hide");
});

hamburgerBtn.addEventListener("click", (e) => {
  navPopup.classList.toggle("hide");
});

closePopupBtn.addEventListener("click", (e) => {
  navPopup.classList.toggle("hide");
});

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    let st = window.scrollY || document.documentElement.scrollTop;
    if (
      st > lastScrollTop &&
      !(
        mobileNavBar.classList.contains("hide") ||
        desktopNavBar.classList.contains("hide")
      )
    ) {
      mobileNavBar.classList.add("hide");
      desktopNavBar.classList.add("hide");
    } else if (
      st < lastScrollTop &&
      (mobileNavBar.classList.contains("hide") ||
        desktopNavBar.classList.contains("hide"))
    ) {
      mobileNavBar.classList.remove("hide");
      desktopNavBar.classList.remove("hide");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

popupLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navPopup.classList.remove("hide");
  });
});
