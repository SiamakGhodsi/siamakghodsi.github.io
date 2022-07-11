let windowWidth = document.body.clientWidth;;

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  if (windowWidth > 992) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }else {
    header.classList.remove("sticky");
  }
});
