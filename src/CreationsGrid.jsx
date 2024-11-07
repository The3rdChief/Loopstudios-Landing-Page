/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import useScrollAnimation from "./useScrollAnimaion"; // Make sure to adjust the import path

const CreationsGrid = () => {
  // Create an array of refs for each child div
  const itemRefs = useRef([]);

  // Function to set refs for each child
  const setItemRef = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return (
    <section className="w-full grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-4 [&>div]:min-h-[8rem] [&>div]:relative [&>div]:cursor-pointer [&>div]:after:transition-all [&>div]:after:duration-500 [&>div]:after:absolute [&>div]:after:inset-0 [&>div]:after:content-[''] [&>div]:after:bg-gradient-to-r sm:[&>div]:after:bg-gradient-to-t [&>div]:after:from-black/90 [&>div>picture>img]:w-full [&>div>picture>img]:h-full [&>div>picture>img]:object-cover [&_h3]transition-all [&_h3]:duration-300">
      {Array.from({ length: 8 }).map((_, index) => {
        // Create a unique ref for each child
        const itemRef = useRef(null);
        useScrollAnimation(itemRef); // Apply the animation hook to each item

        // Render your item with the necessary content
        return (
          <div
            key={index}
            className="group opacity-0 translate-y-3 hover:after:from-white/60 hover:after:to-white/20"
            ref={(el) => {
              itemRef.current = el; // Set the individual ref
              setItemRef(el); // Store it in the array of refs
            }}
          >
            <picture>
              <source
                media="(min-width: 640px)"
                srcSet={`/public/images/desktop/image-${getImageName(
                  index
                )}.jpg`}
              />
              <img
                src={`/public/images/mobile/image-${getImageName(index)}.jpg`}
                alt=""
              />
            </picture>

            <h3 className="absolute bottom-8 left-8 uppercase text-3xl font-light text-white max-w-[12ch] z-20 group-hover:text-black">
              {getImageTitle(index)}
            </h3>
          </div>
        );
      })}
    </section>
  );
};

// Helper function to map index to image name
const getImageName = (index) => {
  const images = [
    "deep-earth",
    "night-arcade",
    "soccer-team",
    "grid",
    "from-above",
    "pocket-borealis",
    "curiosity",
    "fisheye",
  ];
  return images[index] || "default";
};

// Helper function to map index to image title
const getImageTitle = (index) => {
  const titles = [
    "Deep earth",
    "Night arcade",
    "Soccer team VR",
    "The grid",
    "From up above VR",
    "Pocket borealis",
    "The Curiosity",
    "Make it fisheye",
  ];
  return titles[index] || "Default Title";
};

export default CreationsGrid;
