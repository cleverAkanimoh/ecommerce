import React from "react";
import { Section } from "./html-tags";
import { NavLink } from ".";

export default function Navbar() {
  return (
    <nav>
      <Section>
        <h1>Ecommerce</h1>
        <div>
            <NavLink text="home" href="" />
            <NavLink text="contact" />
            <NavLink text="about" />
            <NavLink text="sign up" href="signup" />
        </div>
      </Section>
    </nav>
  );
}


