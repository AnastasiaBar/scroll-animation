import ready from "../../js/utils/documentReady.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

ready(function () {
  let posStart = window.innerWidth < 1280 ? "-300px" : window.innerWidth;

  const textContent = document.querySelectorAll(".about__text");
  textContent.forEach((item) => {
    splitText(item, item.innerText.split(" "));
  });

  function splitText(wrapper, words) {
    wrapper.innerHTML = "";
    words.forEach((word) => {
      wrapper.innerHTML += `<span>${word + " "}</span>`;
    });
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".about__text span", { opacity: 0.1 });
  gsap.utils.toArray(".about__text span").forEach((span) => {
    gsap.to(span, {
      scrollTrigger: {
        trigger: span,
        start: `${posStart} center`,
        scrub: true,
        invalidateOnRefresh: true,
      },
      opacity: 1,
      stagger: 0.1,
    });
  });
});
