import ready from "../../js/utils/documentReady.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  /*let horizontalSection = document.querySelector('.technologies__cards');

  gsap.to('.technologies__cards', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
      trigger: '.technologies__cards',
      start: '-268px top',
      pin: '.technologies',
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  let container = document.querySelector(".technologies__inner");

  gsap.to(container, {
    ease: 'none',
    x: () => -(container.scrollWidth - window.innerWidth),

    scrollTrigger: {
      trigger: ".technologies",
      start: "50% center",
      end: () => '+=' + (container.scrollWidth - window.innerWidth),
      scrub: true,
      pin: true,
      invalidateOnRefresh: true
    }
  })*/
});
