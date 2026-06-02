import Image from "next/image";
import Header from "./Header";
import Navbar from "./Navbar";
import bgBanner from "@/public/home-banner-3.webp";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="relative grid grid-cols-1 grid-rows-1">
      <div className="banner-headline relative w-full">
        <div className="flex min-h-screen flex-col items-center justify-center gap-y-8 text-center text-primary-accent-50">
          <p className="font-caption-decorative text-4xl font-semibold sm:text-7xl">
            Special Places, <br></br> Special Moments
          </p>
          <Link
            href={"/"}
            className="flex h-12 flex-col items-center justify-center border-2 border-primary-accent-500 p-4 font-decorative font-semibold transition-colors duration-150 ease-in hover:bg-primary-green-800 hover:text-primary-accent-300"
          >
            Explore Cabins
          </Link>
        </div>
        <div className="absolute bottom-0 flex h-12 w-full flex-col items-center justify-center bg-primary-base font-decorative">
          HELLO
        </div>
        <Image src={bgBanner} alt="" fill className="-z-10 object-cover" />
      </div>
    </div>
  );
}
