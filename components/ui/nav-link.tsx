"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ text, href }: { text: string; href?: string }) => {
  const pathname = usePathname().replace("/", "");

  const hrefStrip = href?.replace("/", "");

  return (
    <Link
      href={`/${hrefStrip ? hrefStrip : text}`}
      className={`${
        pathname === hrefStrip || pathname === text ? "underline" : ""
      } capitalize inline-block`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
