import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import images from "@/public/about2.webp";

export default function CabinCard({ index }: { index: number }) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="flex h-[500px] items-center justify-center border border-primary-accent-200 bg-primary-base">
        <div className="relative grid h-full w-full grid-rows-[65%_1fr] space-y-2">
          <div className="relative bg-blue-400">
            {/* <Image src={images} alt="" fill className="object-cover" /> */}
            IMAGE
          </div>
          <div className="px-2">{index}</div>
        </div>
      </div>
    </CarouselItem>
  );
}
