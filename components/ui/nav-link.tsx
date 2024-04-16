"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ text, href }: { text: string; href?: string }) => {
  const pathname = usePathname();
  console.log(pathname.replace("/", ""));

  return (
    <Link
      href={`/${href ? href : text}`}
      className={`${pathname.replace("/", "") === href || text ? "" : ""} `}
    >
      {text}
    </Link>
  );
};

export default NavLink;
