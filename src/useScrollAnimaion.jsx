import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (ref) => {
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const animation = gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom top",
        scrub: false,
        markers: false,
        toggleActions: "play pause pause reverse",
      },
      y: 0,
      opacity: 1,
      ease: "power1.out",
      duration: 0.5,
    });

    // Cleanup function to kill the animation on unmount
    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [ref]);
};

export default useScrollAnimation;
