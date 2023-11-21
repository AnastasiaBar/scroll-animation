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
          onToggle: (self) => {
            console.log(self);
            if (self.progress == 1) {
              /*const textContent = document.querySelectorAll('.text-reveal_text')
              textContent.forEach(item => {
                splitText(item, item.innerText.split(' '))
              })

              gsap.utils.toArray('.text-reveal_text span');
              gsap.set('.text-reveal_text span', {opacity: 0.1})
              gsap.timeline({
                scrollTrigger: {
                  trigger: '.about__container-text',
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: true,
                  markers: true,
                  pin: '.container1',
                }
              })
                .set(".text-reveal_text span", {
                  opacity: 1,
                  stagger: 0.1,
                }, 0.1)


              function splitText(wrapper, words) {
                wrapper.innerHTML = '';
                words.forEach(word => {
                  wrapper.innerHTML += `<span>${word + " "}</span>`;
                })
              }*/
              /*const textContent = document.querySelectorAll('.about__right span')
              textContent.forEach(item => {
                splitText(item, item.innerText.split(' '))
              })

              function splitText(wrapper, words) {
                wrapper.innerHTML = '';
                words.forEach(word => {
                  wrapper.innerHTML += `<span>${word + " "}</span>`;
                })
              }*/
              /*  gsap.utils.toArray(".about__text span").forEach((span) => {
                ScrollTrigger.create({
                  trigger: span,
                  start: "-150px top",
                  markers: true,
                  onEnter: () => span.classList.add("active"),
                })
              });*/
            }
          },
        },
      },
    );
  });
}
