import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={clsx("font-bold text-xl", className)}>
      Ecommerce
    </Link>
  );
}
