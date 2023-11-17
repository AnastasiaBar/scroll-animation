import ready from "../../js/utils/documentReady.js";

ready(function () {
  window.addEventListener("scroll", function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-indicator__progress").style.width = scrolled + "%";
  });
});
