"use client";

import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { makeStore } from "@/redux/store";

const ShoppingCart = () => {
  return (
    <div className="relative w-fit">
      <ShoppingCartIcon className="w-5" />
      {/* {makeStore().getState().cart.value && ( */}
      <span className="absolute -top-1/2 -right-1/2 translate-y-1/2 bg-red-500 text-white size-3 rounded-full flex justify-center items-center text-[0.6rem]">
        {makeStore().getState().cart.value}
      </span>
      {/* )} */}
    </div>
  );
};

export default ShoppingCart;
