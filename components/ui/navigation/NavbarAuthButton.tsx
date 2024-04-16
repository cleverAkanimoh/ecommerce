"use client";

import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function NavbarAuthButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleAuth = () => {
    const params = new URLSearchParams(searchParams);
    params.set("modal", "auth");
    replace(`${pathname}?${params.toString()}`);

  };

  return (
    <button onClick={() => handleAuth()} className="">
      <UserCircleIcon className="w-5 text-white" />
    </button>
  );
}
