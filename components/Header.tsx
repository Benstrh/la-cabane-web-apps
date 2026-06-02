"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const linkStyles = {
  unScrolled:
    "hover:bg-primary-green-500 hover:text-primary-base flex h-8 items-center justify-center p-2 transition-colors duration-300",
  scrolled:
    "hover:bg-primary-accent-900 hover:text-primary-base flex h-8 items-center justify-center p-2 transition-colors duration-300",
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`${isScrolled ? "border-b border-primary-accent-700 bg-primary-base text-primary-accent-black transition-colors duration-300 ease-in-out" : "bg-transparent"} header absolute grid h-12 w-full grid-cols-3 place-content-center px-6 py-4 font-decorative text-lg sm:h-16`}
      >
        <p>A</p>
        <p className="textlg justify-self-center font-semibold text-primary-accent-black sm:text-2xl">
          La Cabane
        </p>
        <p className="justify-self-end">user</p>
      </div>

      <div
        className={`navbar absolute top-12 -z-10 flex h-8 w-full items-center justify-center overflow-hidden border-t border-primary-accent-700 px-4 font-decorative sm:top-16 sm:h-12 sm:px-0 ${isScrolled ? "border-none bg-primary-base drop-shadow-sm backdrop-blur-md transition-colors duration-300 ease-in-out" : "bg-transparent"}`}
      >
        <div className="overflow-x-auto p-4 text-xs text-gray-700 sm:text-lg">
          <div className="flex gap-x-6 sm:gap-x-20">
            <Link
              href={"/"}
              className={`${isScrolled ? linkStyles["scrolled"] : linkStyles["unScrolled"]}`}
            >
              HOME
            </Link>
            <Link
              className={`${isScrolled ? linkStyles["scrolled"] : linkStyles["unScrolled"]}`}
              href={"/"}
            >
              ABOUT
            </Link>
            <Link
              className={`${isScrolled ? linkStyles["scrolled"] : linkStyles["unScrolled"]}`}
              href={"/"}
            >
              CABINS
            </Link>
            <Link
              className={`${isScrolled ? linkStyles["scrolled"] : linkStyles["unScrolled"]}`}
              href={"/"}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
