import { gsap, ScrollTrigger } from "gsap/all";

export default function scrollPage() {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalSections = gsap.utils.toArray(".scroll-trigger");

  horizontalSections.forEach((section) => {
    const thisPinWrap = section.querySelector(".scroll-trigger__inner");
    const thisAnimWrap = thisPinWrap.querySelector(".scroll-trigger__animation");
    const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

    gsap.fromTo(
      thisAnimWrap,
      {
        x: () =>
          thisAnimWrap.classList.contains("scroll-trigger__animation--right") ? 0 : getToValue(),
      },
      {
        x: () =>
          thisAnimWrap.classList.contains("scroll-trigger__animation--right") ? getToValue() : 0,
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
