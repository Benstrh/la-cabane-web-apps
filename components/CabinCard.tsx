import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import images from "@/public/about2.webp";

export default function CabinCard({ index }: { index: number }) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="flex h-[500px] items-center justify-center bg-amber-200">
        <div className="relative grid h-full w-full grid-rows-2">
          <div className="relative">
            {/* <Image src={images} alt="" fill className="object-cover" /> */}
          </div>
          <p>{index}</p>
        </div>
      </div>
    </CarouselItem>
  );
}
