import React from "react";
import { NavLink } from "..";
import clsx from "clsx";

export default function NavLinksWrapper({ className }: { className?: string }) {
  return (
    <div className={clsx("", className)}>
      {/* <NavLink text="home" href="/" /> */}
      <NavLink text="contact" />
      <NavLink text="about" />
      <NavLink text="sign up" href="signup" />
    </div>
  );
}
