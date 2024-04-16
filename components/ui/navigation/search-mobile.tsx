"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Search from "../search";
import clsx from "clsx";

export default function SearchMobile() {
  const [showSearch, setShowSearch] = React.useState(false);
  console.log(showSearch);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setShowSearch(!showSearch)}
        className={clsx("p-2 rounded transition-colors duration-300", {
          "bg-red-500": showSearch,
          "bg-red-200": !showSearch,
        })}
      >
        <MagnifyingGlassIcon className="w-5 " />
      </button>

      <Search
        className={clsx(
          "absolute left-0  w-11/12 mx-4 transition-all duration-500",
          {
            "top-14 z-10 opacity-100 text-white": showSearch,
            "-top-full -z-10 opacity-0": !showSearch,
          }
        )}
        placeholder=""
      />
    </div>
  );
}
