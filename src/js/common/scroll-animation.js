import { gsap, ScrollTrigger } from "gsap/all";

export default function scrollPage() {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalSections = gsap.utils.toArray(".horizontal-animation");

  resizeWindow(window.innerWidth);

  window.addEventListener("resize", function () {
    let newWidth = window.innerWidth;
    resizeWindow(newWidth);
  });

  function resizeWindow(width) {
    if (width < 992) {
      horizontalSections.forEach((section) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            scrub: true,
          },
        });
      });
    } else {
      horizontalSections.forEach((section) => {
        const thisPinWrap = section.querySelector(".horizontal-animation__inner");
        const thisAnimWrap = thisPinWrap.querySelector(".horizontal-animation__animation");
        const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

        gsap.fromTo(
          thisAnimWrap,
          {
            x: () =>
              thisAnimWrap.classList.contains("horizontal-animation__animation--right")
                ? 0
                : getToValue(),
          },
          {
            x: () =>
              thisAnimWrap.classList.contains("horizontal-animation__animation--right")
                ? getToValue()
                : 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              pin: thisPinWrap,
              scrub: true,
              end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
            },
          },
        );
      });
    }
  }
}
