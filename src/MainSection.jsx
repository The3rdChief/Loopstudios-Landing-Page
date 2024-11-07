import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CreationsGrid from "./CreationsGrid";

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {
  const interactiveImgRef = useRef(null);
  const articleRef = useRef(null);
  const headerRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: interactiveImgRef.current,
        start: "top 85%",
        end: "bottom top",
        scrub: false,
        markers: false,
        toggleActions: "play pause pause reverse",
      },
    });

    const articleTl = gsap.timeline({
      scrollTrigger: {
        trigger: articleRef.current,
        start: "15% 90%",
        end: "bottom top",
        scrub: false,
        markers: false,
        toggleActions: "play pause pause reverse",
      },
    });

    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "15% 90%",
        end: "bottom top",
        scrub: false,
        markers: false,
        toggleActions: "play pause pause reverse",
      },
    });

    // Animate the interactive image and article elements
    imageTl.to(interactiveImgRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out",
    });

    articleTl.to(articleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.out",
    });

    // Animate the Header elements
    headerTl
      .to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      })
      .to(
        btnRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.25"
      );

    return () => {
      // Clean up the ScrollTrigger on unmount
      imageTl.scrollTrigger.kill();
      articleTl.scrollTrigger.kill();
      headerTl.scrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <main className="bg-white py-16 flex items-center justify-center">
        <div id="container" className="w-11/12 max-w-5xl space-y-20">
          <section className="md:h-[400px] grid justify-items-center gap-4 sm:grid-cols-11 sm:grid-rows-[repeat(5,_minmax(0,_100px))]">
            <picture
              className="sm:col-span-6 sm:row-start-1 opacity-0 translate-y-6"
              ref={interactiveImgRef}
            >
              <source
                media="(min-width: 640px)"
                srcSet="/images/desktop/image-interactive.jpg"
              />
              <img src="/images/mobile/image-interactive.jpg" alt="" />
            </picture>

            <article
              ref={articleRef}
              className="bg-white sm:col-start-6 sm:col-span-6 sm:row-start-2 sm:row-span-4 sm:p-12 text-center sm:text-left z-10 space-y-6 opacity-0 translate-y-6"
            >
              <h1 className="text-4xl lg:text-5xl uppercase font-light">
                The leader in interactive VR
              </h1>
              <p className="text-sm">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </article>
          </section>

          <section className="flex flex-col items-center justify-center gap-8 min-w-full">
            <header className="w-full flex items-center justify-center sm:justify-between gap-4 uppercase font-light">
              <h2
                className="text-3xl sm:text-4xl opacity-0 translate-y-2"
                ref={headerRef}
              >
                Our creations
              </h2>{" "}
              <button
                ref={btnRef}
                className="hidden sm:block sm:opacity-0 sm:translate-y-2 uppercase py-1.5 px-10 text-lg tracking-wide border border-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                See All
              </button>
            </header>

            <CreationsGrid />

            <button className="sm:hidden uppercase py-1.5 px-10 text-lg tracking-wide border border-black transition-colors duration-300 hover:bg-black hover:text-white">
              See All
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainSection;
