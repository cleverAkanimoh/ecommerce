import React from "react";
import { Section } from "./html-tags";
import Link from "next/link";
import NavLinksWrapper from "./navigation/navlinks-wrapper";
import Search from "./search";
import { HeartIcon } from "@heroicons/react/24/outline";
import SearchMobile from "./navigation/search-mobile";
import ShoppingCart from "./shopping-cart";
import AnimatedHamburgerIcon from "./navigation/animated-hamburger-icon";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <Section className="justify-between py-2">
        <Logo />

        <NavLinksWrapper className="hidden md:flex gap-4 items-center justify-center" />

        <div className="flex gap-6 max-[400px]:gap-2 items-center justify-center">
          <SearchMobile />
          <Search
            placeholder="search for..."
            className="hidden sm:inline-block"
          />
          <HeartIcon className="w-5 cursor-pointer" />
          <ShoppingCart />
        </div>

        <AnimatedHamburgerIcon />
      </Section>
    </nav>
  );
}
