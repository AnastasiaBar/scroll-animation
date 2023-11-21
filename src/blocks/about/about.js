import ready from "../../js/utils/documentReady.js";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

ready(function () {
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
    gsap
      .timeline({
        scrollTrigger: {
          trigger: span,
          start: "-200px top",
          markers: true,
          //onEnter: () => span.classList.add("active"),
          scrub: true,
          //pin: '.container1',
        },
      })
      .set(
        ".about__text span",
        {
          opacity: 1,
          stagger: 1,
        },
        0.1,
      );
  });
});
