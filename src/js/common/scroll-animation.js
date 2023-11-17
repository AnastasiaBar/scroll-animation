import { gsap, ScrollTrigger } from "gsap/all";

export default function scrollPage() {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalSections = gsap.utils.toArray(".horizontal-animation");

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
          invalidateOnRefresh: true,
          scrub: true,
          start: "top top",
          end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        },
      },
    );
  });
}
