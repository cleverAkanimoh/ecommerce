"use client";

import { useGlobalContext } from "@/context/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import React from "react";

const NavLinks = ({
  links,
  className,
}: {
  links: { href: string; title: string; Icon: React.ElementType }[];
  className?: string;
}) => {
  const { setIsMenuClicked } = useGlobalContext();
  const pathname = usePathname();

  return (
    <ul className={clsx("gap-3 lg:gap-5 xl:gap-8 relative text-white", className)}>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "hover:text-blue-600 transition-all duration-300 capitalize flex items-center justify-center gap-2",
                {
                  "text-blue-600 pointer-events-none": pathname === link.href,
                }
              )}
              onClick={() => setIsMenuClicked(false)}
            >
              <link.Icon className="w-5 md:w-4" />
              <span>{link.title}</span>
            </Link>
          </li>
        );
      })}
      <li
        className={clsx(
          "absolute bottom-0 w-6 h-0.5 rounded-full hidden md:block bg-pink-secondary transition-all duration-300",
          {
            "left-0": pathname === "/",
            "left-[31%]": pathname === "/about",
            "left-[61%]": pathname === "/contact",
            "left-[90%]": pathname === "/faqs",
          }
        )}
      ></li>
    </ul>
  );
};

export const ListingBtn = ({ className }: { className: string }) => {
  const { isMenuClicked, setIsMenuClicked } = useGlobalContext();
  const toggleMenu = () => setIsMenuClicked(!isMenuClicked);
  return (
    <Link
      href="/pr/market/listings"
      onClick={toggleMenu}
      className={clsx(
        "w-fit text-center rounded text-white",
        className
      )}
    >
      <button className="flex items-center">
        <ListBulletIcon className="w-5" />
        <span>listing</span>
      </button>
    </Link>
  );
};

export default NavLinks;
