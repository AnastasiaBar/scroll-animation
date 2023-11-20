import ready from "../../js/utils/documentReady.js";
//import { gsap, ScrollTrigger } from "gsap/all";

ready(function () {
  /*
  gsap.registerPlugin(ScrollTrigger);
  const textReveal = document.getElementById('textReveal');

  const textContent = textReveal.querySelector('p')
  let textRaw = textContent.innerText.split(' ');
  splitText(textContent, textRaw)

  function splitText(wrapper, words){
    wrapper.innerHTML = '';
    words.forEach(word=>{
      let span = `<span>${word+" "}</span>`;

      wrapper.innerHTML+=span
    })
  }

  gsap.utils.toArray('.text-reveal_text span');

  gsap.set('.text-reveal_text span', {opacity: 0.1})

  gsap.timeline({
    scrollTrigger:{
      trigger: '.text-reveal',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      pin: '.container',
    }
  })
    .set(".text-reveal_text span", {
      opacity: 1,
      stagger: 0.1,
    }, 0.1)*/
});
