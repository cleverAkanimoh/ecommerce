"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const NavLink = ({ text, href }: { text: string; href?: string }) => {
  const pathname = usePathname().replace("/", "");

  const hrefStrip = href?.replace("/", "");

  return (
    <Link
      href={`/${hrefStrip ? hrefStrip : text}`}
      className={clsx(
        "capitalize inline-block text-sm text-gray-300 md:text-gray-500 md:hover:text-black hover:text-white hover:underline transition-colors duration-300",
        {
          underline: pathname === hrefStrip || pathname === text,
        }
      )}
    >
      {text}
    </Link>
  );
};

export default NavLink;
