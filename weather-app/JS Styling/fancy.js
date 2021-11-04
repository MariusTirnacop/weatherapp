const backToTop = document.querySelector("#top");

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.visibility = "hidden";
  }
});
