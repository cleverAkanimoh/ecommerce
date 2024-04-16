import React from "react";
import { Section } from "./html-tags";
import Logo from "./logo";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white flex flex-col gap-8 pt-20">
      <Section className="flex-col gap-6 text-sm">
        <div className="flex flex-col gap-3">
          <Logo />
          <form action="yy()" className="flex flex-col gap-4">
            <label htmlFor="Subscribe" className="text-lg">
              Subscribe
            </label>
            <fieldset className="space-y-1">
              <label className="text-xs text-gray-300">
                Get 10% off your first order
              </label>
              <div className="relative">
                <AtSymbolIcon className="w-4 absolute top-1/2 -translate-y-1/2 right-3" />
                <input
                  type="email"
                  id="subscribe"
                  placeholder="Enter your email address"
                  className="h-100% border rounded px-4 py-2 bg-transparent text-sm"
                />
              </div>
            </fieldset>
          </form>
        </div>

        <div>
          <h1 className="font-semibold  mb-4 text-lg">Support</h1>
          <div className="max-w-[200px] flex flex-col gap-2">
            <address className="">
              111 bjay saranj, Dhaka, DH 1515, Bangladesh.
            </address>
            <span>ecommerce@gmail.com</span>
            <span>+85015-88888-9999</span>
          </div>
        </div>

        <FooterLinkWrapper
          heading="Account"
          links={[
            { text: "My account", href: "account" },
            { text: "cart" },
            { text: "wishlist" },
            { text: "shop" },
          ]}
        />

        <FooterLinkWrapper
          heading="Quick Links"
          links={[
            { text: "Privacy Policy", href: "privacy" },
            { text: "terms and conditions", href: "terms" },
            { text: "faqs" },
            { text: "contact" },
          ]}
        />
      </Section>
      <p className="text-center w-full p-2 text-gray-600 text-sm">
        &copy; Copyright Clever {year}. All right reserved
      </p>
    </footer>
  );
}

const FooterLinkWrapper = ({
  heading,
  links,
}: {
  heading: string;
  links: { href?: string; text: string }[];
}) => {
  return (
    <div className="min-w-[200px]">
      <h1 className="font-semibold text-lg mb-4">{heading}</h1>
      <div className="capitalize space-y-3">
        {links.map(({ href, text }) => (
          <a
            key={text}
            href={href ? href : text}
            className="block w-fit hover:underline hover:text-gray-400 transition-colors duration-300"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
};
