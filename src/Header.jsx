// /* eslint-disable no-unused-vars */

import { useState, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const overlayRef = useRef(null);
  const listItemsRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const openMenu = gsap.timeline();
    const closeMenu = gsap.timeline();

    if (!isOpen) {
      // Animation to open menu
      openMenu
        .to(overlayRef.current, 0.5, { backgroundColor: "black" })
        .to(listItemsRef.current, 1, { display: "flex" }, "-=0.3");
      // Animation to morph into close icon
      gsap.to(line1Ref.current, {
        rotation: 45,
        y: 18,
        transformOrigin: "50% 50%",
        duration: 0.5,
      });
      gsap.to(line2Ref.current, { opacity: 0, duration: 0.5 });
      gsap.to(line3Ref.current, {
        rotation: -45,
        y: -18,
        transformOrigin: "50% 50%",
        duration: 0.5,
      });
      // lock scroll
      document.body.style.overflowY = "hidden";
    } else {
      // Animation to close menu
      closeMenu
        .to(listItemsRef.current, 0.5, { display: "" })
        .to(overlayRef.current, { backgroundColor: "" });
      // Animation to morph back to hamburger icon
      gsap.to(line1Ref.current, { rotation: 0, y: 0, duration: 0.5 });
      gsap.to(line2Ref.current, { opacity: 1, duration: 0.5 });
      gsap.to(line3Ref.current, { rotation: 0, y: 0, duration: 0.5 });
      // free scroll
      document.body.style.overflowY = "auto";
    }
  };

  return (
    <>
      <header className="text-white font-light p-8 pt-12 flex flex-col gap-12 min-h-dvh justify-between relative isolate bg-[url('/public/images/mobile/image-hero.jpg')] sm:bg-[url('/public/images/desktop/image-hero.jpg')] bg-no-repeat bg-cover after:content-[''] after:inset-0 after:bg-black/45 after:absolute after:-z-10">
        <div
          id="overlay"
          ref={overlayRef}
          className="fixed top-0 left-0 h-dvh w-dvw bg-black/0 pointer-events-none sm:hidden"
        ></div>
        <nav className="flex items-center justify-between sm:z-0 z-10 max-w-7xl">
          <img src="/public/images/logo.svg" alt="logo" />

          <button className="sm:hidden" onClick={toggleMenu}>
            <svg width="40" height="40" viewBox="0 0 100 100">
              <line
                ref={line1Ref}
                x1="10"
                y1="30"
                x2="90"
                y2="30"
                stroke="white"
                strokeWidth="5"
              />
              <line
                ref={line2Ref}
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="white"
                strokeWidth="5"
              />
              <line
                ref={line3Ref}
                x1="10"
                y1="70"
                x2="90"
                y2="70"
                stroke="white"
                strokeWidth="5"
              />
            </svg>
          </button>

          <ul
            ref={listItemsRef}
            className="hidden text-xl sm:text-sm flex-col gap-4 sm:flex-row sm:gap-8 sm:flex max-[640px]:absolute max-[640px]:top-1/2 max-[640px]:left-6 max-[640px]:-translate-y-1/2 relative font-normal [&_li>a]:relative [&_li>a]:after:absolute [&_li>a]:after:content-[''] [&_li>a]:after:scale-x-0 [&_li>a]:after:-bottom-1 [&_li>a]:after:h-[1px] [&_li>a]:after:bg-white [&_li>a]:after:left-0 [&_li>a]:after:right-0 [&_li>a]:after:transition-all [&_li>a]:after:duration-200 [&_li>a]:after:origin-left md:[&_li>a]:after:origin-center"
          >
            <li>
              <a href="#" className="hover:after:scale-x-100">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:after:scale-x-100">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:after:scale-x-100">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:after:scale-x-100">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:after:scale-x-100">
                Support
              </a>
            </li>
          </ul>
        </nav>

        <p className="border border-white sm:text-5xl lg:text-6xl text-4xl uppercase max-w-[15ch] p-4 mb-20">
          Immersive experiences that deliver
        </p>
      </header>
    </>
  );
};

export default Header;
