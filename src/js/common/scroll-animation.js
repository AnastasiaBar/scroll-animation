import { gsap, ScrollTrigger } from "gsap/all";

export default function scrollPage() {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalSections = gsap.utils.toArray(".scroll-trigger");

  horizontalSections.forEach((section) => {
    const thisPinWrap = section.querySelector(".scroll-trigger__inner");
    const thisAnimWrap = thisPinWrap.querySelector(".scroll-trigger__animation");
    const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);
    let coef, topStartScroll;
    window.innerHeight < 900 ? (coef = 0.1) : (coef = 0.35);
    section.classList.contains("scroll-trigger--two")
      ? (topStartScroll = document.querySelector(".about").clientHeight - window.innerHeight * coef)
      : (topStartScroll = "top");

    document.querySelectorAll(".section-scroll").forEach((item) => {
      item.style.top = topStartScroll + "px";
    });

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
          markers: true,
          start: `${topStartScroll} top`,
          end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        },
      },
    );
  });
}
