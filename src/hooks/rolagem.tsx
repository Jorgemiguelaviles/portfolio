// ./hooks/useScrollAnimation.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useScrollAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".ship", {
      x: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: "#new-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    });
  }, []); // [] ensures this effect runs once after the component mounts
}

export default useScrollAnimation;
