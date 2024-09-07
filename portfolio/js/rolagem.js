// ./js/rolagem.js

document.addEventListener("DOMContentLoaded", function() {
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
});
