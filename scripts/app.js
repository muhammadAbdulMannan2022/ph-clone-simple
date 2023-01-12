const navbar = document.querySelector("nav");
var lastScrollTop = 0;
document.addEventListener(
  "scroll",
  () => {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      console.log(1);
      navbar.classList.remove("navScrollShow");
    } else {
      console.log(2);
      navbar.classList.add("navScrollShow");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
const navMobile = document.querySelector(".navContainer .ul");
const burger = document.querySelector(".burger");
burger.addEventListener("click", (e) => {
  navMobile.classList.toggle("showNav");
  burger.classList.toggle("burgerToggle");
  console.log(1);
});
