import React from "react";
import { Section } from "./html-tags";
import Link from "next/link";
import NavLinksWrapper from "./navigation/navlinks-wrapper";
import Search from "./search";
import { HeartIcon } from "@heroicons/react/24/outline";
import SearchMobile from "./navigation/search-mobile";
import ShoppingCart from "./shopping-cart";

export default function Navbar() {
  return (
    <nav className="border-b">
      <Section className="justify-between py-2">
        <Link href="/" className="font-bold text-xl">
          Ecommerce
        </Link>

        <NavLinksWrapper className="hidden md:flex" />

        <SearchMobile />

        <div className="flex gap-3">
          <Search
            placeholder="search for..."
            className="hidden sm:inline-block"
          />
          <HeartIcon className="w-5" />
          <ShoppingCart />
        </div>
      </Section>
    </nav>
  );
}
