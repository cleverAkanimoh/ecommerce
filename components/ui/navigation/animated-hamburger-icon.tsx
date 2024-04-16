"use client";

import { useGlobalContext } from "@/context/store";
import clsx from "clsx";

const AnimatedHamburgerIcon = () => {
  const { setIsMenuClicked, isMenuClicked } = useGlobalContext();

  const toggleMenuClick = () => setIsMenuClicked(!isMenuClicked);
  return (
    <button
      className="flex flex-col flex-shrink-0 justify-center items-center md:hidden relative size-10 p-1 rounded hover:ring-2 transition-all duration-300"
      onClick={toggleMenuClick}
    >
      <Stroke position="top" />
      <Stroke position="middle" />
      <Stroke position="bottom" />
    </button>
  );
};

const Stroke = ({ position }: { position: "top" | "middle" | "bottom" }) => {
  const { isMenuClicked } = useGlobalContext();
  return (
    <div
      className={clsx(
        "absolute h-0.5 w-6  rounded-full bg-white transition-all duration-500",
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
