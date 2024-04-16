"use client";

import clsx from "clsx";
import { useState } from "react";
import NavLinksWrapper from "./navlinks-wrapper";

const AnimatedHamburgerIcon = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <>
      <button
        className="flex flex-col flex-shrink-0 justify-center items-center md:hidden relative size-10 p-1 rounded transition-all duration-300"
        onClick={() => setIsMenuClicked(!isMenuClicked)}
      >
        <Stroke position="top" isMenuClicked={isMenuClicked} />
        <Stroke position="middle" isMenuClicked={isMenuClicked} />
        <Stroke position="bottom" isMenuClicked={isMenuClicked} />
      </button>

      <NavLinksWrapper
        className={clsx(
          "absolute left-0 flex flex-col justify-center items-center w-11/12 bg-red-500 transition-all duration-300 mx-4 rounded min-h-[200px] space-y-3 md:hidden",
          {
            "top-16 opacity-100": isMenuClicked,
            "-top-1/2 -z-10 opacity invisible": !isMenuClicked,
          }
        )}
      />
    </>
  );
};

const Stroke = ({
  position,
  isMenuClicked,
}: {
  position: "top" | "middle" | "bottom";
  isMenuClicked: boolean;
}) => {
  return (
    <div
      className={clsx(
        "absolute h-0.5 w-6  rounded-full bg-black transition-all duration-500",
        {
          "translate-0 rotate-0 first:mb-3 last:mt-3": !isMenuClicked,
          "rotate-[45deg]": isMenuClicked && position === "top",
          "-translate-x-1/2 opacity-0": isMenuClicked && position === "middle",
          "-rotate-[45deg]": isMenuClicked && position === "bottom",
        }
      )}
    />
  );
};

export default AnimatedHamburgerIcon;
