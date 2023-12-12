import { gsap, ScrollTrigger } from "gsap/all";

export default function scrollPage() {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalSections = gsap.utils.toArray(".scroll-trigger");
  let coef, topStartScroll;

  horizontalSections.forEach((section) => {
    const thisPinWrap = section.querySelector(".scroll-trigger__inner");
    const thisAnimWrap = thisPinWrap.querySelector(".scroll-trigger__animation");
    const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);
    let technologiesContainer = document.querySelector(".technologies__inner");

    window.innerHeight < 900 ? (coef = 0.1) : (coef = 0.35);
    section.classList.contains("scroll-trigger--two")
      ? (topStartScroll = document.querySelector(".about").clientHeight - window.innerHeight * coef)
      : (topStartScroll = "top");

    resizeTopStartScroll();

    let scrollSections = gsap.fromTo(
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
          start: `${topStartScroll} top`,
          end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        },
      },
    );

    gsap.to(".technologies__cards", {
      x: () => document.querySelector(".technologies__cards").scrollWidth * -1,
      xPercent: 50,
      scrollTrigger: {
        trigger: ".technologies__cards",
        start: `left left`,
        scrub: true,
        invalidateOnRefresh: true,
        containerAnimation: scrollSections,
        end: () => "+=2000",
      },
    });

    gsap.to(technologiesContainer, {
      ease: "none",
      x: () => -(technologiesContainer.scrollWidth - window.innerWidth),
      scrollTrigger: {
        trigger: ".technologies",
        start: "center center",
        end: () => "+=" + (technologiesContainer.scrollWidth - window.innerWidth),
        scrub: true,
        invalidateOnRefresh: true,
        containerAnimation: scrollSections,
      },
    });
  });

  gsap.registerPlugin();

  window.onresize = function () {
    resizeTopStartScroll();
  };

  function resizeTopStartScroll() {
    if (window.innerWidth < 1280) {
      document.querySelectorAll(".section-scroll").forEach((item) => {
        item.style.top = "0px";
      });
    } else {
      document.querySelectorAll(".section-scroll").forEach((item) => {
        item.style.top = topStartScroll + "px";
      });
    }
  }
}
