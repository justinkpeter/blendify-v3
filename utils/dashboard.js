import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function horizontalScroll() {
    gsap.registerPlugin(ScrollTrigger);


    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            // snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    });



}


