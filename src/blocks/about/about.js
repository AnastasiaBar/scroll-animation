import ready from "../../js/utils/documentReady.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

ready(function () {
  let posStart = window.innerWidth < 1280 ? "top" : window.innerWidth;

  gsap.registerPlugin(ScrollTrigger);
  const split = new SplitType(".about__text", { types: "line" });

  split.lines.forEach((line) => {
    gsap.to(line, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: line,
        start: `${posStart} 25%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });
});
